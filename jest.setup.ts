const { execSync } = require("child_process")

const registerAUser = async ({ password, username }) => {
  await fetch("http://localhost:3080/api/user", {
    body: JSON.stringify({ password, username }),
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  })
}

beforeEach(async () => {
  execSync('echo "bash /var/app/fill-db-in-with-testing-data.sh" | docker exec -i personal-app-database bash;')
  await registerAUser({ username: "john-doe", password: "john-doe-password" })
  await registerAUser({ username: "jessica-stark-doe", password: "jessica-stark-password" })
})

afterAll(() => {
  execSync('echo "bash /var/app/fill-db-in-with-dev-data.sh" | docker exec -i personal-app-database bash;')
})
