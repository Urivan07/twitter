const UserService = require("./../services/UserService");

class UserView {
  static createUser(user) {
    if (user === null) {
      return {error: "Payload no existe"};
    } else if (checkProperties(user)) {
      return {error: "Datos incompletos o incorrectos"};
    }else{
        return UserService.create(user.id, user.username, user.name)
    }
  }
}

function checkProperties(obj) {
  let keys = Object.keys(obj);
  let error = false;
  let expect_keys = ["username", "name", "id"];
  
  expect_keys.every((item) => {
    if (!keys.includes(item) || obj[item] === null) {
        error = true
        return false
    }
    return true
  });

  return error;
}

module.exports = UserView;
