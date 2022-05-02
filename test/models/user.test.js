const User = require("./../../app/models/user")

describe("Unit Tests for User class", ()=>{
    test("Create an User objet", () =>{
        //Aqui se invoca el codigo que se usara en la app
        const user = new User(1,'Urivan07','Urivan','https://twitter.com/urivanrubiogarc')

        //Validamos los resultados del codigo
        expect(user.id).toBe(1)
        expect(user.username).toBe('Urivan07')
        expect(user.name).toBe('Urivan')
        expect(user.bio).toBe('https://twitter.com/urivanrubiogarc')
        expect(user.dateCreated).not.toBeUndefined() // Verifica que el valor no sea undefine
        expect(user.lastUpdated).not.toBeUndefined()
    })
    test('Add getters', ()=>{
        const user = new User(1, 'Urivan07', 'Urivan', 'https://twitter.com/urivanrubiogarc')

        expect(user.getUsername).toBe('Urivan07')
        expect(user.getBio).toBe('https://twitter.com/urivanrubiogarc')
        expect(user.getDateCreated).not.toBeUndefined()
        expect(user.getLastUpdated).not.toBeUndefined()
    })
    test('Add setters', ()=>{
        const user = new User(1, 'Urivan07', 'Urivan', 'https://twitter.com/urivanrubiogarc')
        user.setUsername = "Urivan"
        user.setBio = "NewBio"
        expect(user.username).toBe('Urivan')
        expect(user.bio).toBe('NewBio')
    })
});