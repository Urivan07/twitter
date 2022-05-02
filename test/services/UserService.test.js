const UserService = require("./../../app/services/UserService");

describe("Test for UserService", () => {
    test("1. Create a new user using the UserService", () =>{
        const user = UserService.create(1,"Urivan07", "Urivan")

        expect(user.id).toBe(1)
        expect(user.username).toBe("Urivan07")
        expect(user.name).toBe("Urivan")
        expect(user.bio).not.toBeUndefined()
    });
    test("2. Get all user data in list", () =>{
        const user = UserService.create(1,"Urivan07", "Urivan")
        const userInfoList = UserService.getInfo(user)

        expect(userInfoList[0]).toBe(1)
        expect(userInfoList[1]).toBe("Urivan07")
        expect(userInfoList[2]).toBe("Urivan")
        expect(userInfoList[3]).toBe("Sin bio")

    });
});
