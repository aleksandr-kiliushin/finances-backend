describe("user", () => {
  test("I am 25 y. o.", () => {
    const myAge = 25
    expect(myAge).toEqual(25)
  })

  test("I live in Georgia.", () => {
    const theCountryILiveIn = "Georgia"
    expect(theCountryILiveIn).toEqual("Georgia")
  })
})
