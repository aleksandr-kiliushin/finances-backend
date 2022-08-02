const { execSync } = require("child_process")

beforeEach(() => {
  execSync('echo "bash /var/app/truncate-all-tables.sh" | docker exec -i personal-app-database bash;')
})
