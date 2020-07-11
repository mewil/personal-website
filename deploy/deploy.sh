#! /bin/bash -e
# Deployment Script

[ -z "${NAME}" ] && echo "error: please set the 'NAME' environment variable to access your Digital Ocean droplet using docker-machine" && exit 1

# Build and upload website
(cd .. && yarn build)
aws s3 sync --endpoint=$SPACES_URL ../build s3://$NAME/home

# $NAME should already be loaded into docker-machine 
eval $(docker-machine env $NAME)

# Source environment variables and run docker-compose up
echo "deploying..."
envsubst < traefik.yml > traefik.yml.env
envsubst < production.yml | docker-compose --file - up -d
