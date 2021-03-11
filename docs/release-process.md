# Release Process

We are currently using [standard-version](https://github.com/conventional-changelog/standard-version) library to manage releases of this project. This package will do these helpful things:
    
- Create a commit and tag it with the latest version
- Increment version in `package.json`
- Generate changelog out of commit messages

## Creating new release

Run `yarn release` to generate new minor release

Example output of the command:
```console
$ yarn release
yarn run v1.22.10
$ standard-version
✔ bumping version in package.json from 0.1.0 to 0.1.1
✔ created CHANGELOG.md
✔ outputting changes to CHANGELOG.md

---
### 0.1.1 (2021-03-08)


### Features

* [#5](https://github.com/ALapina/Weather-app-Challenge/issues/5) Add pull request template to the repository ([9645397](https://github.com/ALapina/Weather-app-Challenge/commit/96453975c61172ac29b73f5067066f3eea1d50b9))
---
```