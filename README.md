# Getting started with Cypress E2E

Fast, easy and reliable testing for anything that runs in a browser.

## System requirements

Cypress is a desktop application that is installed on your computer. The desktop application supports these operating systems:

- **macOS** 10.9 and above _(64-bit only)_
- **Linux** Ubuntu 12.04 and above, Fedora 21 and Debian 8 _(64-bit only)_
- **Windows** 7 and above

## Prerequisites:

- node.js 8 and above
- chrome browser
- terminal

## TL:DR

Install dependencies:

- `npm install`

Install cypress:

- `npm install cypress`

Run tests on local machine:

- `./cypress.sh`

Build and run tests from Docker:

- `docker-compose build e2e`
- `docker-compose run --rm e2e`

## Before running new version

Sometimes there will be updated of npm packages, so tests can fail for some reasons.

To avoid this problem:

- delete `node_modules` folder from `root` folder, using: `rm -rf node_modules` command
- install dependencies `npm i`

## Tests architecture

For automation tests architecture we use Page Object Pattern. All necessary files are placed in `cypress` directory, which primarily includes:

- `config` with environment configuration,
- `integration` directory with test cases for `ui` and `api` tests,
- `pages` and `components` with implementation for pages and reusable components,
- `endpoints` with implementation for API endpoints,
- `fixtures` with some test data,
- `utils` with helpers and data generators.

## Environment variables

To use environment variables in `cypress/config` folder add json with excepted configuration. Then you can run simply `./cypress.sh "newEnvironment"`. If user doesn't provide any environment variable then the `cypress.staging.json` will be used. To change destination of the configs file, go to `cypress/plugins/index.ts` and edit method for configuration.

## Reports

Using cypress in command line give as opportunity to make screenshots and records videos. I've turned off recording video to speed up tests, but to turn it on just open `cypress.json`, find `video` and change flag to `true`.

Running command `npm run cy:start` will run complete set of tests and generate report with Mochawesome generator. It will be added to `/cypress/reports/` directory.

## Running Cypress with Test Runner

To open `Test Runner`:

- in terminal open `root` folder, then use `npm run cy:open` command

After that the desktop application will open where you can select and run desired test suit.

## Running Cypress from bash script

There is prepared dedicated script `cypress.sh` that provide running specific kind of tests on desired environment. You can run complete test suite but also only tests related to API or UI. Just run command with scheme: `./cypress.sh "environment" "typeOfTests" "specFileName"`. Parameters `"typeOfTests"` and `"specFileName"` are optional.

Examples of usage:

- to run complete test suite on develop environment use `./cypress.sh develop`,
- to run UI tests on staging use `./cypress.sh staging ui`, for API `./cypress.sh staging api`,
- to run tests related to static pages on prod, just run `./cypress.sh prod ui staticPages`.

## Running Cypress in CLI

To run specific tests using terminal:

- open `root` folder.
- use command `$(npm bin)/cypress run --spec 'cypress/integration/sample-test.spec.ts'` - you can add in script `cypress: cypress run` and use command `npm run cypress`.

Examples of usage:

- to run all tests from testFolder folder use: `$(npm bin)/cypres --spec 'cypress/integration/*'`
- to run one test from testFolder folder use: `$(npm bin)/cypres --spec 'cypress/integration/sample-test.spec.ts'`

## Running tests from Docker

To build project: `docker build -t ${nameOfBuild} .` example: `docker build -t cypress .`
To run tests in docker `docker-compose run --rm e2e` it will run command `./cypress.sh staging` after that container will be removed. In case you want to use different environment use `docker-compose run --rm e2e prod` or `docker-compose run --rm e2e local`

In case you would like to delete docker image, use `docker images` then find IMAGE ID and use `docker image rm ${image}` - sometimes use --force flag.

In case you would like to remove docker-compose service type: `docker-compose ps e2e` if it return e2e type `docker-compose rm e2e`

## Running test from CircleCI

In `.circleci` folder there is `config.yml` with configuration of the running test in CircleCI. After login in CCI add your repository. For more information read article with information about [full configuration](https://tsh.npio/blog/continuous-integration-for-e2e-tests-2-4-circleci-configuration-for-test-automation/)
