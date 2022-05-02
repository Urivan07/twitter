# T.D.D. Twitter User Services

### T.D.D. con JEST para BackEnd NodeJs Launch X

## Requerimientos Practica 1
```markdown

Después de evaluar tiempo y esfuerzos, el equipo de Launch X ha decidido crear la aplicación `Twitter`. Para ello han definido la primera etapa del sprint con los siguientes requerimientos a desarrollar:

SPRINT 1: Creación de un modelo
 
 Requerimiento 1: Se necesita un modelo `User` para guardar la información de un usuario de nuestra app: `id`, `username`, `name`, `bio`, `dateCreated` y `lastUpdated`. 
 
 Requerimiento 2: Las propiedades `dateCreated` y `lastUpdated` deberán ser datos de tipo fecha que guarden el momento en que se instancie un nuevo objeto de la clase `User`.
 
 Requerimiento 3: Cada objeto tipo user necesita los siguietes gettes: `getUsername`, `getBio`, `getDateCreated`, `getLastUpdated`.
 
 Requerimiento 4: Cada objeto necesita los siguientes setters: `setUsername` y `setBio`, para actualizar dichas propiedades.
```

## Requerimiento 1 Practica 1

```
Requerimiento 1: Se necesita un modelo `User` para guardar la información de un usuario de nuestra app: `id`, `username`, `name`, `bio`, `dateCreated` y `lastUpdated`. 
```

![req1](https://github.com/Urivan07/twitter/blob/master/assets/img/practica1/class_user_test1.JPG)

### Test

* Captura para sobre test a realizar:<br>
![user_test_1](https://github.com/Urivan07/twitter/blob/master/assets/img/practica1/test_user.JPG)

* Prueba resultado esperado erroneo:<br>
![test1](https://github.com/Urivan07/twitter/blob/master/assets/img/practica1/test1-1.JPG)

* Prueba resultado esperdado correcto:<br>
![test1_2](https://github.com/Urivan07/twitter/blob/master/assets/img/practica1/test1-2.JPG)

## Requerimiento 2 Practica 1

```markdown
 Requerimiento 2: Las propiedades `dateCreated` y `lastUpdated` deberán ser datos de tipo fecha que guarden el momento en que se instancie un nuevo objeto de la clase `User`.
```

![req2](https://github.com/Urivan07/twitter/blob/master/assets/img/practica1/class_user_test2_date.JPG)

### Test

* Prueba resultado esperdado correcto:<br>
![user_test_2](https://github.com/Urivan07/twitter/blob/master/assets/img/practica1/test2-2.JPG)

## Requerimiento 3 Practica 1

```markdown
 Requerimiento 3: Cada objeto tipo user necesita los siguietes gettes: `getUsername`, `getBio`, `getDateCreated`, `getLastUpdated`.
```

![req3](https://github.com/Urivan07/twitter/blob/master/assets/img/practica1/class_user_test3_getters.JPG)

### Test

* Captura para sobre test a realizar:<br>
![user_test_3](https://github.com/Urivan07/twitter/blob/master/assets/img/practica1/test3_getters.JPG)

* Prueba resultado esperado erroneo:<br>
![test3](https://github.com/Urivan07/twitter/blob/master/assets/img/practica1/test3_failed.JPG)

* Prueba resultado esperdado correcto:<br>
![test3-2](https://github.com/Urivan07/twitter/blob/master/assets/img/practica1/test3_passed.JPG)

## Requerimiento 4 Practica 1

```markdown
 Requerimiento 4: Cada objeto necesita los siguientes setters: `setUsername` y `setBio`, para actualizar dichas propiedades.
 ```

![req4](https://github.com/Urivan07/twitter/blob/master/assets/img/practica1/class_user_test4_setters.JPG)

### Test

* Prueba resultado esperado erroneo:<br>
![test3](https://github.com/Urivan07/twitter/blob/master/assets/img/practica1/test4_failed.JPG)

* Prueba resultado esperdado correcto:<br>
![test3-2](https://github.com/Urivan07/twitter/blob/master/assets/img/practica1/test4_passed.JPG)



## Requerimientos Practica 2

```markdown
Requerimiento 1: Crear un nuevo usuario con la clase Usuario( id, username, name), usando una nueva clase llamada `UserService`.

Requerimiento 2: Agregar un nuevo método estático en `UserService` llamado `getInfo` que al recibir un objeto de la clase `User`, me regrese una lista con todos los valores de los atributos de dicho objeto.

Requerimiento 3: Agregar un nuevo método estático en `UserService` llamado `updateUserUsername`, que reciba un objeto de la clase `User` y un nuevo string, que actualizará el valor de `username`. 

Requerimiento 4: Agregar un nuevo método estático en `UserService` llamado `getAllUsernames`, que recibirá una lista de objetos de la clase `User`, y regresará la lista de todos los usernames de dichos objetos. 
```

## Requerimiento 1 Practica 2
```markdown
Requerimiento 1: Crear un nuevo usuario con la clase Usuario( id, username, name), usando una nueva clase llamada `UserService`.
```

* Class User: <br>
![user_class](https://github.com/Urivan07/twitter/blob/master/assets/img/practica2/user_class.JPG)

* class UserService:<br>
![user_service](https://github.com/Urivan07/twitter/blob/master/assets/img/practica2/user_service.JPG)

### Test

* Prueba resultado esperado erroneo:<br>
![test1](https://github.com/Urivan07/twitter/blob/master/assets/img/practica2/test1-failed.JPG)

* Prueba resultado esperado correcto:<br>
![test1-2](https://github.com/Urivan07/twitter/blob/master/assets/img/practica2/test1-passed.JPG)

## Requerimiento 2 Practica 2
```markdown
Requerimiento 2: Agregar un nuevo método estático en `UserService` llamado `getInfo` que al recibir un objeto de la clase `User`, me regrese una lista con todos los valores de los atributos de dicho objeto.
```
![req2](https://github.com/Urivan07/twitter/blob/master/assets/img/practica2/userServices_getInfo.JPG)

### Test

* Prueba resultado esperado erroneo:<br>
![test2](https://github.com/Urivan07/twitter/blob/master/assets/img/practica2/test2-failed.JPG)

* Prueba resultado esperado correcto:<br>
![test2-2](https://github.com/Urivan07/twitter/blob/master/assets/img/practica2/test2-passed.JPG)

## Requerimiento 3 Practica 2
```markdown
Requerimiento 3: Agregar un nuevo método estático en `UserService` llamado `updateUserUsername`, que reciba un objeto de la clase `User` y un nuevo string, que actualizará el valor de `username`. 
```
![req3](https://github.com/Urivan07/twitter/blob/master/assets/img/practica2/userServices_UpdateUsername.JPG)

### Test

* Prueba resultado esperado erroneo:<br>
![test3](https://github.com/Urivan07/twitter/blob/master/assets/img/practica2/test3-failed.JPG)

* Prueba resultado esperado correcto:<br>
![test3-2](https://github.com/Urivan07/twitter/blob/master/assets/img/practica2/test3-passed.JPG)

## Requerimiento 4 Practica 2
```markdown
Requerimiento 4: Agregar un nuevo método estático en `UserService` llamado `getAllUsernames`, que recibirá una lista de objetos de la clase `User`, y regresará la lista de todos los usernames de dichos objetos. 
```
![req4](https://github.com/Urivan07/twitter/blob/master/assets/img/practica2/userServices_getAllUsernames.JPG)

### Test

* Prueba resultado esperado erroneo:<br>
![test4](https://github.com/Urivan07/twitter/blob/master/assets/img/practica2/test4-failed.JPG)

* Prueba resultado esperado correcto:<br>
![test4-2](https://github.com/Urivan07/twitter/blob/master/assets/img/practica2/test4-passed.JPG)


