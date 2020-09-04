#!/usr/bin/env sh
set -e
case "$1" in
    "develop")        
      "./cypress.sh develop"
    ;;

    "local")        
      "./cypress.sh local"
    ;;

    "prod")        
      "./cypress.sh prod"
    ;;

    "staging")        
      "./cypress.sh staging"
    ;;
    *)
    # default
    "./cypress.sh staging"
esac
exit 0