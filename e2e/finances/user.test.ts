describe("Login", () => {
  it("responds that user is not found", async () => {
    const response = await fetch("http://localhost:3080/api/login", {
      body: JSON.stringify({
        username: "unexisting-username",
        password: "some-password",
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    })
    const responseData = await response.json()
    expect(responseData).toEqual({
      error: "Not Found",
      message: "User not found.",
      statusCode: 404,
    })
  })
})
