const UserView = require("./../../app/views/UserView");

describe("Test for UserView", () => {
  test("Return an error object when try to create a new user with an null payload", () => {
      const payload = null
      const result = UserView.createUser(payload)
      //https://jestjs.io/docs/using-matchers#strings
      expect(result.error).toMatch(/Payload no existe/)
  });
  test("Return an error object when try to create a new user with a payload whith invalid properties", () =>{
    const payload = {username:null, name:17, id:"id"}
    const result = UserView.createUser(payload)
    expect(result.error).toMatch(/Datos incompletos o incorrectos/)
  })
  test("Return an error object when try to create a new user whith a payload with missing properties", () => {
    const payload = {username:"Urivan"}
    const result = UserView.createUser(payload)
    expect(result.error).toMatch(/Datos incompletos o incorrectos/)
  })
  test("Create a user by a given valid payload", () => {
    const payload = {username:"Urivan07", name:"Urivan", id:1}
    const result = UserView.createUser(payload)
    expect(result.name).toBe("Urivan")
    expect(result.username).toBe("Urivan07")
    expect(result.id).toBe(1)
  })
});
