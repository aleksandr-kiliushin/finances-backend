#!/bin/bash

# Loading dump list from remote server to the host machine.
curl -u :$REMOTE_API_KEY --output app/dumps/dumps.json https://api.elephantsql.com/api/backup?db=$REMOTE_DB_NAME;

# Get the latest date from an array of objects.
DUMP_URL=$(jq 'max_by(.backup_date) | .url' app/dumps/dumps.json -r);

# Downloading the last dump.
curl $DUMP_URL --output /app/dumps/dump.lzo
