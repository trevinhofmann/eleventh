# Contributing

This project [is licensed](https://github.com/trevinhofmann/eleventh/blob/master/LICENSE) under the [Unlicense](https://unlicense.org). By submitting a pull request to `eleventh`, you represent that you have the right to license your contributions to `eleventh` under the project's license, and agree by submitting the patch that your contributions are licensed under the same license as `eleventh`.

## Guidelines

### Conventional Commits

All commits in `eleventh` follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) standard. This helps to promote descriptive commit messages and also informs our CI/CD pipeline to automatically bump the package version according to [Semantic Versioning](https://semver.org/) and generate the `CHANGELOG.md`.

### Atomic Commits

Developers should strive for [atomic commits](https://en.wikipedia.org/wiki/Atomic_commit#Atomic_commit_convention) which are relatively small in size, narrow in scope, and easy to read. All commits in `eleventh` must pass the test suite.

### Pull Requests

Each pull request should be narrow in scope. A pull request might introduce a new feature, fix a defect, or refactor some code, but it should not do more than one of these.

## Making and Submitting Changes

### 1. Fork

To begin, please [fork the project](https://docs.github.com/en/github/getting-started-with-github/fork-a-repo) under your own account.

### 2. Clone

Next, `git clone` your fork to your local development machine.

### 3. Branch

Create a new branch for your changes. For example, `git checkout -b feature/add-a-widget`.

### 4. Install Dependencies

Run `npm install` to install the development dependencies.

### 5. Make Your Changes

Use your favorite text editor to make changes to the project.

### 6. Test Your Changes

You can run `npm test` to execute the full test suite, and you can run `npm run lint` to use [ESLint](https://github.com/eslint/eslint#eslint) to check for possible errors or formatting issues. Some formatting issues can automatically be fixed by running `npm run lint -- --fix`.

### 7. Commit Your Changes

To make committing easier, we invite you to use the `npm run commit` command which invokes the [Commitizen](https://github.com/commitizen/cz-cli#commitizen-for-contributors) command line prompt for creating a valid commit message.

### 8. Push Your Changes

Push your branch to GitHub. For example, `git push --set-upstream origin feature/add-a-widget`.

### 9. Create a Pull Request

Create a [new pull request](https://github.com/trevinhofmann/eleventh/compare). The source branch should be from your own fork of the project, and the target branch should be `master` of the main project.
