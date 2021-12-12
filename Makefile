start-app:
	docker-compose --env-file ./config/prod.env up
stop-app:
	docker stop logsapp

dev:
	docker-compose -f docker-compose.dev.yml --env-file ./config/dev.env up

build-client:
	npm run build --prefix client
build-server:
	npm run build --prefix server

dev-client:
	npm run dev --prefix client
dev-db:
	docker-compose -f ./db/docker-compose.yml --env-file ./config/dev.env up
dev-server:
	npm run dev --prefix server

start-client:
	npm run start --prefix client
start-server:
	npm run start --prefix server

test-client:
	npm run test --prefix client
