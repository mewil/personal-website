# Personal Website

[![Build Status](https://travis-ci.org/mewil/personal-website.svg?branch=master)](https://travis-ci.org/mewil/personal-website)

My personal website built in [React](https://reactjs.org/).

## Setup

1. [Get Docker](https://docs.docker.com/install/)
2. Start whichever environment you want:
    * Development
        * `docker-compose -f development.yml up -d`
        * **Your git repo will be linked to the development environment, so your local changes will be reflected with a container restart**
    * Production (environment variables file required)
        * `docker-compose -f production.yml up -d`
        * **This takes care of setting up NGINX AND LetsEncrypt with the appropriate hosts and autorenewal**
3. Access `http://localhost:3000` and start developing!
