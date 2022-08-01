#!/bin/bash

# After the database container has started, run this script to initialize database.

# Variant 1:
# From your host machine execute: `echo "bash /app/init.sh" | docker exec -i personal-app-database bash;`.

# Variant 2:
# From your host machine execute: `docker exec -it personal-app-database /bin/sh`.
# Inside the database container execute: `bash /app/init.sh`.

# Variant 3:
# From your host machine execute: `make init-database`.

# Loading dump list from remote server to the container.
curl -u :$REMOTE_API_KEY --output /var/app/dumps/dumps.json https://api.elephantsql.com/api/backup?db=$REMOTE_DATABASE_NAME;

# Get the latest date from the dumps array.
DUMP_URL=$(jq 'max_by(.backup_date) | .url' /var/app/dumps/dumps.json -r);

# Downloading the last dump.
curl $DUMP_URL --output /var/app/dumps/dump.lzo

# Create a new clear database for out app.
psql -U $DATABASE_USERNAME -c "CREATE DATABASE $DATABASE_NAME ENCODING 'UTF-8';";

# Restore database from the downloaded dump.
lzop -cd /var/app/dumps/dump.lzo | psql -U $DATABASE_USERNAME $DATABASE_NAME;
