import {run} from '../src/run'
import * as core from '@actions/core'
import * as github from '@actions/github'
import nock from 'nock'
import * as process from 'process'

beforeEach(() => {
  jest.resetModules()

  github.context.payload = {
    action: 'opened',
    pull_request: {
      number: 1
    }
  }
})

test('comments on PR', async () => {
  process.env['INPUT_REPO-TOKEN'] = 'test-github-token'
  process.env['INPUT_MESSAGE'] = 'Test Comment'
  process.env['GITHUB_REPOSITORY'] = 'testowner/testrepo'

  nock('https://api.github.com')
    .post(
      '/repos/testowner/testrepo/issues/1/comments',
      body => body.body === 'Test Comment'
    )
    .reply(200, {
      html_url: 'https://github.com/testowner/testrepo/issues/1#issuecomment-1'
    })
  const setOutputMock = jest.spyOn(core, 'setOutput')

  await run()

  expect(setOutputMock).toHaveBeenCalledWith(
    'comment-url',
    'https://github.com/testowner/testrepo/issues/1#issuecomment-1'
  )
})
