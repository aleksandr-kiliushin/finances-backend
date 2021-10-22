start-app:
	docker-compose --env-file ./config/prod.env up 
stop-app:
	docker stop logsapp

build-client:
	npm run build --prefix client
build-server:
	npm run build --prefix server

dev-client:
	npm run dev --prefix client
dev-db:
	docker start finance-dev-db-server
dev-db-download:
	bash ./db.sh
dev-server:
	npm run dev --prefix server

start-client:
	npm run start --prefix client
start-server:
	npm run start --prefix server

test-client:
	npm run test --prefix client
