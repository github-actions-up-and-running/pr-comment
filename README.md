<p align="center">
  <a href="https://github.com/github-actions-up-and-running/pr-comment/actions"><img alt="GitHub Actions status" src="https://github.com/github-actions-up-and-running/pr-comment/workflows/build-test/badge.svg"></a>
</p>

# PR Comment Action

This action comments a message on PR.

## Inputs

### `repo-token`

**Required** The GitHub Token for comment on PR.

### `message`

**Required** The message to comment on PR.

## Outputs

### `commentUrl`

The PR comment URL.

## Example Usage

```yaml
uses: github-actions-up-and-running/pr-comment@v1.0.0
with:
  repo-token: ${{ secrets.GITHUB_TOKEN }}
  message: Nice PR!👍
```
