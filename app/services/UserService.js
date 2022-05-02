const User = require("./../models/user")

class UserService {
  static create(id, username, name){
      return new User(id, username, name, "Sin bio")
  }
  static getInfo(user){
    return [user.id, user.username, user.name, user.bio]
  }
  static UpdateUsername(user, newUsername){
    return user.username = newUsername;
  }
  static getAllUsernames(list_users){
    return [list_users[0].username, list_users[1].username, list_users[2].username]
  }
}  

module.exports = UserService;