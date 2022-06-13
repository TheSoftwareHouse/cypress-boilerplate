#!/usr/bin/env sh
argEnvironment=$1
argTestType=$2
argSpecName=$3
if [ -z $argEnvironment ] ; then
  eval "./node_modules/.bin/cypress run"
else
  if [ -z "$argTestType" ] ; then
    eval "./node_modules/.bin/cypress run --env configFile=cypress.$argEnvironment"
  else
    if [ -z "$argSpecName" ] ; then
      eval "./node_modules/.bin/cypress run --env configFile=cypress.$argEnvironment --spec 'cypress/integration/$argTestType/**.spec.js'"
    else
      eval "./node_modules/.bin/cypress run --env configFile=cypress.$argEnvironment --spec 'cypress/integration/$argTestType/$argSpecName.spec.js'"
    fi
  fi
fi