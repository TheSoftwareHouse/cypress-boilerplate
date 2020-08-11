#!/usr/bin/env sh
set -e
case "$1" in
    'develop')        
        npm run e2e:develop
    ;;

    'local')        
       npm run e2e:local
    ;;

    'prod')        
        npm run e2e:prod
    ;;

    'staging')        
       npm run e2e:staging
    ;;
    *)
    # default
    npm run e2e:staging
esac
exit 0