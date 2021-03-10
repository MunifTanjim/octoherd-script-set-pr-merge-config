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

| option           | type    | description                         |
| ---------------- | ------- | ----------------------------------- |
| `--squash-merge` | boolean | Use `--no-squash-merge` for `false` |
| `--merge-commit` | boolean | Use `--no-merge-commit` for `false` |
| `--rebase-merge` | boolean | Use `--no-rebase-merge` for `false` |

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md)

## About Octoherd

[@octoherd](https://github.com/octoherd/) is project to help you keep your GitHub repositories in line.

## License

[ISC](LICENSE.md)
