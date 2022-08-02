describe("Login", () => {
  it("responds that user is not found", async () => {
    const response = await fetch("http://localhost:3080/api/login", {
      body: JSON.stringify({
        username: "sasha",
        password: "s3cret",
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    })

    expect(response.status).toEqual(404)
    expect(await response.json()).toEqual({
      error: "Not Found",
      message: "User not found.",
      statusCode: 404,
    })
  })
})
