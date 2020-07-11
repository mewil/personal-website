# Personal Website

[![Build Status](https://travis-ci.org/mewil/personal-website.svg?branch=master)](https://travis-ci.org/mewil/personal-website)

My personal website built in [React](https://reactjs.org/) plus a [Grafana](https://grafana.com) dashboard protected by Google OAuth, all proxied through [Traefik](https://containo.us/traefik/). Hosted on [Digital Ocean](https://www.digitalocean.com/).

## Setup

1. [Install Docker](https://docs.docker.com/install/)
2. `cd deploy` and start whichever environment you want:
    * Development
      * `docker-compose -f development.yml up -d`
      * **Your local directory will be linked to the development environment, so your local changes will be reflected in the Docker container**
      * Access `http://localhost:7000` and start developing!

    * Production (**environment variables required for provisioning and deployment**)
      * [Install Docker Machine](https://docs.docker.com/machine/install-machine/)
      * Provision a small Digital Ocean droplet with `./provision.sh`
      * Deploy to the droplet with `./deploy.sh`
