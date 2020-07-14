#! /bin/bash -ex
# Deployment Script

[ -z "${NAME}" ] && echo "error: please set the 'NAME' environment variable to access your Digital Ocean droplet using docker-machine" && exit 1
# $NAME should already be loaded into docker-machine 
eval $(docker-machine env $NAME)
NAME=$(echo $NAME | cut -f1 -d".")

# Build and upload website
echo "updating static assets..."
(cd .. && yarn build)
aws s3 sync --acl "public-read" --endpoint=$SPACES_URL ../build s3://$NAME-cdn

echo "deploying..."
# Source environment variables and run docker-compose up
envsubst < production.yml | docker stack deploy --prune --compose-file - $NAME
