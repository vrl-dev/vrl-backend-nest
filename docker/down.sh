#!/bin/bash
if [[ -z "${NODE_ENV}" && "$NODE_ENV" == "production" ]]; then
    docker-compose -f docker/compose/production.yml down
elif [[ -z "${NODE_ENV}" && "$NODE_ENV" == "development" ]]; then
    docker-compose -f docker/compose/development.yml down
else
    docker-compose -f docker/compose/development.yml down
fi