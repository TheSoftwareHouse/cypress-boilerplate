# Getting started with Cypress E2E
Fast, easy and reliable testing for anything that runs in a browser.

## System requirements
Cypress is a desktop application that is installed on your computer. The desktop application supports these operating systems:

-   **macOS**  10.9 and above  _(64-bit only)_
-   **Linux**  Ubuntu 12.04 and above, Fedora 21 and Debian 8  _(64-bit only)_
-   **Windows**  7 and above


## Prerequisites:

- node.js 8 and above
- chrome browser
- terminal

## TL:DR

- `npm install`
- `docker-compose build e2e`
- `docker-compose run  --rm e2e`

## Before running new version
Sometimes there will be updated of npm packages, so tests can fail for some reasons. 

To avoid this problem:
- delete `node_modules` folder from `root` folder, using: `rm -rf node_modules` command
- install dependencies `npm i`

## Environment variables

To use environment variables in `cypress/config` folder add json with excepted configuration. Then you can run simply `npm run cypress run --env configFile="addedFile"`.
In `package.json` `scripts` section there is example of usage `npm run e2e:staging`. If user doesn't provide any environment variable then the `cypress.develop.json` will be used. To change destination of the configs file, go to `cypress/plugins/index.js` and edit method for configuration. 

## Running Cypress with Test Runner
 
To open `Test Runner`:
- in terminal open `root` folder, then use `npm run cy:open` command

After that the desktop application will open where you can select and run desired test suit. 

## Running Cypress in CLI 

To run specific tests using terminal:
- open `root` folder. 
- use command `$(npm bin)/cypress run --spec 'cypress/integration/sample-test.spec.js'` - you can add in scriptt `cypress: cypress run` and use command `npm run cypress`.

Examples of usage: 
- to run all tests from testFolder folder use: `$(npm bin)/cypres --spec 'cypress/integration/*'`
- to run one test from testFolder folder use: `$(npm bin)/cypres --spec 'cypress/integration/sample-test.spec.js'`

## Reports

Using cypress in command line give as opportunity to make screenshots and records videos. I've turned off recording video to speed up tests, but to turn it on just open `cypress.json`, find `video` and change flag to `true`

## Running tests from Docker

To build project: `docker build -t ${nameOfBuild} .` example: `docker build -t cypress .`
To run tests in docker `docker-compose run --rm e2e` it will run command `npm run staging` after that container will be removed. In case you want to use different environment use `docker-compose run --rm e2e prod` or  `docker-compose run --rm e2e local`  

In case you would like to delete docker image, use `docker images` then find IMAGE ID and use `docker image rm ${image}` - sometimes use --force flag.

In case you would like to remove docker-compose service type: `docker-compose ps e2e` if it return e2e type `docker-compose rm e2e` 

## Running test from CircleCI

In `.circleci` folder there is `config.yml` with configuration of the running test in CircleCI. After login in CCI add your repository. For more information read article with information about [full configuration](https://tsh.npio/blog/continuous-integration-for-e2e-tests-2-4-circleci-configuration-for-test-automation/)