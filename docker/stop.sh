#!/bin/bash
if [[ -z "${NODE_ENV}" && "$NODE_ENV" == "production" ]]; then
    docker-compose -f ./compose-production.yml stop
elif [[ -z "${NODE_ENV}" && "$NODE_ENV" == "development" ]]; then
    docker-compose -f ./compose-development.yml stop
else
    docker-compose -f ./compose-development.yml stop
fi