// @ts-check

/**
 * An octoherd script to set pull request merge config
 *
 * @param {import('@octoherd/cli').Octokit} octokit
 * @param {import('@octoherd/cli').Repository} repository
 * @param {object} options
 * @param {boolean} [options.mergeCommit] toogle merge commit
 * @param {boolean} [options.rebaseMerge] toogle rebase merge
 * @param {boolean} [options.squashMerge] toogle squash merge
 */
export async function script(
  octokit,
  repository,
  { mergeCommit, rebaseMerge, squashMerge }
) {
  const body = {
    allow_merge_commit: mergeCommit,
    allow_rebase_merge: rebaseMerge,
    allow_squash_merge: squashMerge,
  }

  for (const key of Object.keys(body)) {
    if (typeof body[key] !== 'boolean') {
      delete body[key]
    }
  }

  if (Object.keys(body).length === 0) {
    octokit.log.info('Nothing to update!')
    return
  }

  octokit.log.info(body, 'Updating Config')

  const id = repository.id
  const owner = repository.owner.login
  const repo = repository.name

  await octokit.request('PATCH /repos/{owner}/{repo}', {
    owner,
    repo,
    ...body,
  })

  octokit.log.info(
    { id, owner, repo },
    'Updated Pull Request Merge Config for %s',
    repository.html_url
  )
}
