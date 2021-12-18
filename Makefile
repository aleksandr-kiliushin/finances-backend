dev:
	docker-compose -f ./compose.dev.yml up

dev-client:
	npm run dev --prefix client
dev-server:
	npm run dev --prefix server
