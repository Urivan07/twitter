# T.D.D. User Services

### T.D.D. con JEST para BackEnd NodeJs Launch X

## Requerimientos

```markdown
Requerimiento 1: Crear un nuevo usuario con la clase Usuario( id, username, name), usando una nueva clase llamada `UserService`.

Requerimiento 2: Agregar un nuevo método estático en `UserService` llamado `getInfo` que al recibir un objeto de la clase `User`, me regrese una lista con todos los valores de los atributos de dicho objeto.

Requerimiento 3: Agregar un nuevo método estático en `UserService` llamado `updateUserUsername`, que reciba un objeto de la clase `User` y un nuevo string, que actualizará el valor de `username`. 

Requerimiento 4: Agregar un nuevo método estático en `UserService` llamado `getAllUsernames`, que recibirá una lista de objetos de la clase `User`, y regresará la lista de todos los usernames de dichos objetos. 
```

## Requerimiento 1 
```markdown
Requerimiento 1: Crear un nuevo usuario con la clase Usuario( id, username, name), usando una nueva clase llamada `UserService`.
```

* Class User: <br>
![user_class](https://github.com/Urivan07/user_services/blob/master/assets/img/user_class.JPG)

* class UserService:<br>
![user_service](https://github.com/Urivan07/user_services/blob/master/assets/img/user_service.JPG)

### Test

* Prueba resultado esperado erroneo:<br>
![test1](https://github.com/Urivan07/user_services/blob/master/assets/img/test1-failed.JPG)

* Prueba resultado esperado correcto:
![test1-2](https://github.com/Urivan07/user_services/blob/master/assets/img/test1-passed.JPG)

## Requerimiento 2
```markdown
Requerimiento 2: Agregar un nuevo método estático en `UserService` llamado `getInfo` que al recibir un objeto de la clase `User`, me regrese una lista con todos los valores de los atributos de dicho objeto.
```
![req2](https://github.com/Urivan07/user_services/blob/master/assets/img/userServices_getInfo.JPG)

### Test

* Prueba resultado esperado erroneo:<br>
![test2](https://github.com/Urivan07/user_services/blob/master/assets/img/test2-failed.JPG)

* Prueba resultado esperado correcto:<br>
![test2-2](https://github.com/Urivan07/user_services/blob/master/assets/img/test2-passed.JPG)

## Requerimiento 3
```markdown
Requerimiento 3: Agregar un nuevo método estático en `UserService` llamado `updateUserUsername`, que reciba un objeto de la clase `User` y un nuevo string, que actualizará el valor de `username`. 
```
![req3](https://github.com/Urivan07/user_services/blob/master/assets/img/userServices_UpdateUsername.JPG)

### Test

* Prueba resultado esperado erroneo:<br>
![test3](https://github.com/Urivan07/user_services/blob/master/assets/img/test3-failed.JPG)

* Prueba resultado esperado correcto:<br>
![test3-2](https://github.com/Urivan07/user_services/blob/master/assets/img/test3-passed.JPG)

## Requerimiento 4
```markdown
Requerimiento 4: Agregar un nuevo método estático en `UserService` llamado `getAllUsernames`, que recibirá una lista de objetos de la clase `User`, y regresará la lista de todos los usernames de dichos objetos. 
```
![req4](https://github.com/Urivan07/user_services/blob/master/assets/img/userServices_getAllUsernames.JPG)

### Test

* Prueba resultado esperado erroneo:<br>
![test4](https://github.com/Urivan07/user_services/blob/master/assets/img/test4-failed.JPG)

* Prueba resultado esperado correcto:<br>
![test4-2](https://github.com/Urivan07/user_services/blob/master/assets/img/test4-passed.JPG)


