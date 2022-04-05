# Contributing Guide

Growers, we're really excited that you are interested in contributing to our BaseCamp app. Before submitting your contribution, please make sure to take a moment and read through the following guidelines:

<!---
- [Code of Conduct](insert url here)
- [Project Structure](#project-structure)
--->

- [Issue Reporting Guidelines](#issue-reporting-guidelines)
- [Pull Request Guidelines](#pull-request-guidelines)
- [Development Setup](#development-setup)

## Issue Reporting Guidelines

- Use the Application Board on [jira](https://urgrow.atlassian.net/jira/software/c/projects/BC/boards/28) to create new issues.

## Pull Request Guidelines

- The `master` branch is just a snapshot of the latest stable release. All development should be done in dedicated branches. **Do not submit PRs against the `staging` or `master` branch.**

- Checkout from `staging`, `development` or any topic related branch and merge back against that branch.

- Work in the `src` folder and **DO NOT** checkin `dist` in the commits.

- It's OK to have multiple small commits as you work on the PR - GitLab will automatically squash it before merging.

- Make sure the testing pipeline passes. (see [development setup](#development-setup))

- If adding a new feature:
    - Add accompanying test case.
    - Provide a convincing reason to add this feature. Ideally, you should open a suggestion issue first and have it approved before working on it.

- If fixing bug:
    - If you are resolving a special issue, add `(fix #xxxx[,#xxxx])` (#xxxx is the issue id) in your PR title for a better release log, e.g. `update entities encoding/decoding (fix #3899)`.
    - Provide a detailed description of the bug in the PR. Live demo preferred.
    - Add appropriate test coverage if applicable.


### Committing Changes

Commit messages should be formatted within the Angular2 Commit guidelines. You can use this [tool](https://commitlint.io) to validate your messages.

When a certain jira issue is being resolved with the commit, make sure to mention it in the commit body.

e.g. resolve issue BH-62 from Jira, use:

* Closes BH-62
* Fixes BH-62
* Resolves BH-62

<!---
## Project Structure

   --->     
## Credits

Thanks to all who have already contributed!
