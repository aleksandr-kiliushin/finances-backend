dev:
	docker-compose -f ./compose.dev.yml up

init-database:
	echo "bash /var/app/init.sh" | docker exec -i personal-app-database bash;
