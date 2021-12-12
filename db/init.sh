#!/bin/bash

# Loading dump list from remote server to the host machine.
curl -u :$REMOTE_API_KEY --output app/dumps/dumps.json https://api.elephantsql.com/api/backup?db=$REMOTE_DB_NAME;

# Get the latest date from an array of objects.
DUMP_URL=$(jq 'max_by(.backup_date) | .url' app/dumps/dumps.json -r);

# Downloading the last dump.
echo "curl $DUMP_URL --output /app/dumps/dump.lzo"

# Create an empty db.
# echo "CREATE DATABASE $LOCAL_DB ENCODING 'UTF-8';" | docker exec -i $LOCAL_SERVER psql -U postgres;

# echo "populating local db from the downloaded dump";
# echo "lzop -cd /db/dump.lzo | psql -U postgres $LOCAL_DB" | docker exec -i $LOCAL_SERVER bash;

# echo "\l" | docker exec -i $LOCAL_SERVER psql -U postgres;
