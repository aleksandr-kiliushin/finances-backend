#!/bin/bash
# set -e

# LOCAL_SERVER="finance-dev-db-server";
LOCAL_SERVER="local-db-server-1";
LOCAL_PW="123";
LOCAL_DB="finance";
REMOTE_API_KEY="11774a77-e885-485b-858f-b1dec98828e4";
REMOTE_DB_NAME="xwyksyfg";

echo "stop old local docker [$LOCAL_SERVER]";
docker kill $LOCAL_SERVER || :;

echo "remove old local docker [$LOCAL_SERVER]";
docker rm $LOCAL_SERVER || :;

echo "starting a new fresh local instance of [$LOCAL_SERVER]";
docker run --name $LOCAL_SERVER -e POSTGRES_PASSWORD=$LOCAL_PW -e PGPASSWORD=$LOCAL_PW -p 5432:5432 -d postgres:13.3;

# wait for pg to start
echo "wait 3 seconds for pg-server [$LOCAL_SERVER] to start";
sleep 3;

echo "updating packages";
echo "apt-get update" | docker exec -i $LOCAL_SERVER bash;

echo "installing curl, lzop";
echo "apt-get install -y curl lzop" | docker exec -i $LOCAL_SERVER bash;

echo "getting dump list from remote server to the host machine";
curl -u :$REMOTE_API_KEY --output temp/dumps.json https://api.elephantsql.com/api/backup?db=$REMOTE_DB_NAME;

echo "waiting 3 second for downloading";
sleep 3;

# get maximum date from an array of objects.
dump_url=$(jq 'max_by(.backup_date) | .url' temp/dumps.json);

echo "creating 'db' directory in the container"
echo "mkdir /db" | docker exec -i $LOCAL_SERVER bash;

echo "downloading the last dump"
echo "curl $dump_url --output /db/dump.lzo" | docker exec -i $LOCAL_SERVER bash;

echo "waiting 3 second for downloading";
sleep 3;

# create an empty db
echo "CREATE DATABASE $LOCAL_DB ENCODING 'UTF-8';" | docker exec -i $LOCAL_SERVER psql -U postgres;

echo "populating local db from the downloaded dump";
echo "lzop -cd /db/dump.lzo | psql -U postgres $LOCAL_DB" | docker exec -i $LOCAL_SERVER bash;

echo "\l" | docker exec -i $LOCAL_SERVER psql -U postgres;