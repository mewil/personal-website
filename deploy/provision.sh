#! /bin/bash -e
# Provisioning Script

[ -z "${DOTOKEN}" ] && echo "error: please set the 'DOTOKEN' environment variable with an API key from Digital Ocean" && exit 1
[ -z "${NAME}" ] && echo "error: please set the 'NAME' environment variable to name your Digital Ocean droplet" && exit 1
[ ! -f authorized_keys ] && echo -e "error: please create a file 'authorized_keys' with the SSH keys to add to the created machines\n       use 'cat ~/.ssh/id_rsa.pub >> authorized_keys' to add your own SSH key to the file" && exit 1

# List available sizes with:
# curl -H "Authorization: Bearer $DOTOKEN" "https://api.digitalocean.com/v2/sizes" | python -m json.tool
# https://developers.digitalocean.com/documentation/v2/#list-all-sizes
MACHINE_SIZE=s-1vcpu-1gb

# List available images with:
# curl -H "Authorization: Bearer $DOTOKEN" "https://api.digitalocean.com/v2/images?type=distribution" | python -m json.tool
# https://developers.digitalocean.com/documentation/v2/#list-all-distribution-images
BASE_OS=ubuntu-18-04-x64

# List available regions with:
# curl -H "Authorization: Bearer $DOTOKEN" "https://api.digitalocean.com/v2/regions" | python -m json.tool
# https://developers.digitalocean.com/documentation/v2/#list-all-regions
REGION=sfo3

# Creates a machine with the name given by $1 with the specifications declared above
create_machine() {
    docker-machine create $1 \
        --driver digitalocean \
        --digitalocean-access-token $DOTOKEN \
        --digitalocean-image $BASE_OS  \
        --digitalocean-monitoring \
        --digitalocean-private-networking \
        --digitalocean-region $REGION \
        --digitalocean-size $MACHINE_SIZE
}

# Adds the given SSH keys from authorized_keys to the machine
add_keys_to_machine() {
    cat authorized_keys | docker-machine ssh $1 "mkdir -p ~/.ssh && cat >> ~/.ssh/authorized_keys"
}

# Set up firewall rules
add_firewall_rules() {
    docker-machine ssh $1 "ufw allow 22,53,80,443/tcp && ufw allow 53/udp && ufw --force enable && ufw reload"
}

# Create and configure the machine
create_machine $NAME
add_keys_to_machine $NAME
add_firewall_rules $NAME
