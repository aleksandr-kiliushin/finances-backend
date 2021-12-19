dev:
	docker-compose -f ./compose.dev.yml up

init-db:
	echo "bash /app/init.sh" | docker exec -i finance-db bash;
