<p align="center">
  <a href="http://github.com/1Lua" target="blank"><img src="https://avatars.githubusercontent.com/u/89131388?v=4" width="150" alt="My Photo" /></a>
</p>

<p>Me in Social Networks: <a href="https://vk.com/1luajit">Вконтакте</a>, <a href="https://t.me/matvey369">Telegram1</a>, <a href="https://t.me/anondabro">Telegram2</a>, <a href="https://www.instagram.com/matvey_369">Instagram</a></p>

## Description

This is Rest API CRUD for iLink

## API Methods

#### 1. Get Users list (all not deleted users)
Request:
```
GET localhost:7777/users
```
Example answer (JSON array):
```json
[
    {
        "_id": "613d9a3e43776bfa8040a23c",
        "deletedAt": null,
        "createdAt": 1631427134418,
        "password": "12345",
        "email": "ivan@gmail.com",
        "name": "Иван",
        "__v": 0
    },
    {
        "_id": "613d9e8d43776bfa8040a240",
        "deletedAt": null,
        "createdAt": 1631428237007,
        "password": "1234",
        "email": "matvey@ilink.com",
        "name": "Матвей",
        "__v": 0
    }
]
```

#### 2. Create User
Example request:
```
POST localhost:7777/users
```
Example request body (JSON): 
```json
{
    "name": "Матвей",
    "email": "matvey@ilink.com",
    "password": 1234
}
```
Example answer (JSON):
```json
{
    "deletedAt": null,
    "createdAt": 1631428237007,
    "password": "1234",
    "email": "matvey@ilink.com",
    "name": "Матвей",
    "_id": "613d9e8d43776bfa8040a240",
    "__v": 0
}
```

#### 3. Update User data
Example request:
```
PATCH localhost:7777/users/613d9a3e43776bfa8040a23c
```
Example request body (JSON): 
```json
{
    "name" : "eOne"
}
```
Example answer (it returns uptated User (JSON)):
```json
{
    "_id": "613d9a3e43776bfa8040a23c",
    "deletedAt": null,
    "createdAt": 1631427134418,
    "password": "12345",
    "email": "ivan@gmail.com",
    "name": "eOne",
    "__v": 0
}
```

#### 4. Delete User (soft-delete)
Example request:
```
DELETE localhost:7777/users/613d9a3e43776bfa8040a23c
```
Example answer (JSON):
```json
{
    "_id": "613d9a3e43776bfa8040a23c",
    "deletedAt": 1631428695800,
    "createdAt": 1631427134418,
    "password": "12345",
    "email": "ivan@gmail.com",
    "name": "eOne",
    "__v": 0
}
```

#### 5. Find User(s) by name
Example request:
```
GET localhost:7777/users/find?name=Матвей
```
Example answer (JSON array):
```json
[
    {
        "_id": "613d9e8d43776bfa8040a240",
        "deletedAt": null,
        "createdAt": 1631428237007,
        "password": "1234",
        "email": "matvey@ilink.com",
        "name": "Матвей",
        "__v": 0
    }
]
```

# Run Application

Setup mongoose
```bash
npm install --save @nestjs/mongoose mongoose
```

Run application
```bash
npm run start:dev
```

# Setup DataBase (Mongo)

Startup Mongo with Docker
```bash
docker run -p 127.0.0.1:27017:27017 --name mondodb-test mongo
```

# P.S.

My NodeJS vesion: v12.18.2
My npm version: 6.14.5