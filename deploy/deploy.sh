#! /bin/bash -e
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
# Update configs
update_secret() {
    echo "updating secret $1"
    mapfile -t services < <( docker stack services --format "{{.Name}}" $NAME )
    for s in "${services[@]}"
    do
        if docker service inspect $s --format "{{range .Spec.TaskTemplate.ContainerSpec.Secrets}}{{.SecretName}}{{end}}" | grep -qw $1; then
            docker secret create $1.temp $1
            docker service update --detach=false --secret-rm $1 --secret-add source=$1.temp,target=$1 $s
            docker secret rm $1
            docker secret create $1 $1
            docker service update --detach=false --secret-rm $1.temp --secret-add source=$1,target=$1 $s
            docker secret rm $1.temp
        fi
    done
}

# Update secrets
declare -a secrets=("traefik.toml")
echo "updating secrets ${secrets[@]}"
for s in "${secrets[@]}"
do
    if docker secret ls --format "{{.Name}}" | grep -qw $s; then
        update_secret $s
    else
        docker secret create $s $s
    fi
done

# Source environment variables and run docker-compose up
envsubst < production.yml | docker stack deploy --prune --compose-file - $NAME
