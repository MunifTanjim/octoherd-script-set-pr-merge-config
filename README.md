# octoherd-script-set-pr-merge-config

> An octoherd script to set pull request merge config

[![@latest](https://img.shields.io/npm/v/octoherd-script-set-pr-merge-config.svg)](https://www.npmjs.com/package/octoherd-script-set-pr-merge-config)
[![Build Status](https://github.com/MunifTanjim/octoherd-script-set-pr-merge-config/workflows/Test/badge.svg)](https://github.com/MunifTanjim/octoherd-script-set-pr-merge-config/actions?query=workflow%3ATest+branch%3Amain)

## Usage

```js
npx octoherd-script-set-pr-merge-config \
  --octoherd-token 0123456789012345678901234567890123456789 \
  "MunifTanjim/*"
```

## Options

| option                                  | type    | description         |
| --------------------------------------- | ------- | ------------------- |
| `--merge-commit` or `--no-merge-commit` | boolean | toogle merge commit |
| `--rebase-merge` or `--no-rebase-merge` | boolean | toogle rebase merge |
| `--squash-merge` or `--no-squash-merge` | boolean | toogle squash merge |

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md)

## About Octoherd

[@octoherd](https://github.com/octoherd/) is project to help you keep your GitHub repositories in line.

## License

[ISC](LICENSE.md)
