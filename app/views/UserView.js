const User = require("./../models/user");

class UserView {
  static createUser(user) {
    return new User(user.id, user.username, user.name, "Sin bio");
  }
}

module.exports = UserView;
