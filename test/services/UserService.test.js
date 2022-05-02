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
    test("3. Update username", () =>{
        const user = UserService.create(1,"Urivan07", "Urivan")
        UserService.UpdateUsername(user, "Urivan Rubio")
        expect(user.username).toBe("Urivan Rubio")
    });
    test("4. Given a list of users give me the list of usernames", () =>{
        const user = UserService.create(1,"Urivan 1", "Urivan Rubio 1")
        const user2 = UserService.create(2,"Urivan 2", "Urivan Rubio 2")
        const user3 = UserService.create(3,"Urivan 3", "Urivan Rubio 3")
        const usernames = UserService.getAllUsernames([user, user2, user3])
        expect(usernames[0]).toBe("Urivan 1")
        expect(usernames).toContain("Urivan 2")
        expect(usernames).toContain("Urivan 3")
    });
});
