# Getting started with Cypress E2E
Fast, easy and reliable testing for anything that runs in a browser.

## System requirements
Cypress is a desktop application that is installed on your computer. The desktop application supports these operating systems:

-   **macOS**  10.9 and above  _(64-bit only)_
-   **Linux**  Ubuntu 12.04 and above, Fedora 21 and Debian 8  _(64-bit only)_
-   **Windows**  7 and above

## Prerequisites:

- node
- chrome browser
- terminal

## Before running new verision
Sometimes there will be upadated of npm packages, so tests can fail for some reasons. 

To avoid this problem:
- delete `node_modules` folder from `root` folder, using: `rm -rf node_modules` command
- install dependecies `npm i`

## Running Cypress with Test Runner
 
To open `Test Runner`:
- in terminal open `root` folder, then use `npx cypress open` command

After that the desktop application will open where you can select and run desired test suit. 

## Running Cypress in CLI 

To run specific tests using terminal:
- open `root` folder. 
- use command `npx cypress run --spec 'cypress/integration/sample-test.spec.js'`

Examples of usage: 
- to run all tests from testFolder folder use: `npx cypress run --spec 'cypress/integration/*'`
- to run one test from testFolder folder use: `npx cypress run --spec 'cypress/integration/sample-test.spec.js'`

## Reportes

Using cypress in command line give as opportunity to make screenshots and records videos. I've turned off recording video to speed up tests, but to turn it on just open `cypress.json`, find `video` and change flag to `true`

## Running tests from Docker

To build project: `docker build -t ${nameOfBuild} .` example: `docker build -t cypress .`
To run tests in docker `docker run -it cypress` it will run command `npm run test` - this is command from package.json. In case you want to use different command modify in Dokcerfile `CMD ["npm", "run", "test"]` section.  

In case you would like to delete docker image, use `docker images` then find IMAGE ID and use `docker image rm ${IMAGEID}` - sometimes use --force flag.