#!/usr/bin/env sh
set -e
case "$1" in
    'prod')        
        npm run prod
    ;;

    'local')        
       npm run local
    ;;

    'staging')        
       npm run staging
    ;;
    *)
    # default
    npm run staging
esac
exit 0