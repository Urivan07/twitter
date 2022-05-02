const UserService = require("./../../app/services/UserService");

describe("Test for UserService", () => {
    test("1. Create a new user using the UserService", () =>{
        const user = UserService.create(1,"Urivan07", "Urivan")

        expect(user.id).toBe(1)
        expect(user.username).toBe("Urivan07")
        expect(user.name).toBe("Urivan")
        expect(user.bio).not.toBeUndefined()
    });
});
