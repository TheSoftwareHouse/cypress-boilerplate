#!/usr/bin/env sh
set -e
case "$1" in
    "develop")        
      eval "./cypress.sh develop"
    ;;

    "local")        
      eval "./cypress.sh local"
    ;;

    "prod")        
      eval "./cypress.sh prod"
    ;;

    "staging")        
      eval "./cypress.sh staging"
    ;;
    *)
    # default
    eval "./cypress.sh staging"
esac
exit 0