// @ts-check

/**
 * An octoherd script to set pull request merge config
 *
 * @param {import('@octoherd/cli').Octokit} octokit
 * @param {import('@octoherd/cli').Repository} repository
 * @param {object} options
 * @param {boolean} [options.mergeCommit]
 * @param {boolean} [options.rebaseMerge]
 * @param {boolean} [options.squashMerge]
 */
export async function script(
  octokit,
  repository,
  { squashMerge, mergeCommit, rebaseMerge }
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
