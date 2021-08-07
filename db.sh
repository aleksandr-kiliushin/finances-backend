#!/bin/bash
# set -e

SERVER="finance-dev-db-server";
PW="123";
DB="finance";

echo "stop old docker [$SERVER]"
docker kill $SERVER || :

echo "remove old docker [$SERVER]"
docker rm $SERVER || :

echo "starting a new fresh instance of [$SERVER]"
docker run --name $SERVER -e POSTGRES_PASSWORD=$PW -e PGPASSWORD=$PW -p 5432:5432 -d postgres:13.3

# wait for pg to start
echo "wait 3 seconds for pg-server [$SERVER] to start";
sleep 3;

# create the db
echo "CREATE DATABASE $DB ENCODING 'UTF-8';" | docker exec -i $SERVER psql -U postgres
echo "\l" | docker exec -i $SERVER psql -U postgres