#!/usr/bin/env sh
environment=$1
testType=$2
if [ -z "$testType" ] ; then
  eval "./node_modules/.bin/cypress run --env configFile=cypress.$environment"
else
  eval "./node_modules/.bin/cypress run --env configFile=cypress.$environment --spec 'cypress/integration/$testType/**.spec.js'"
fi