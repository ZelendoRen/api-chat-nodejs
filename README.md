
# REST API Online Chat Description

## Introdution
The API is used to integrate the capabilities of online chat into a client’s personal project. The API is intended for developers and is accompanied by detailed documentation.

## Description
REST API Chat runs over HTTP and is a set of methods by which requests are made and responses are returned for each operation. All answers come in the form of JSON structures.

## How to use?

- download project
- create postgres db with use `query_db.txt `
- use `npm install `
- edit config files in `/config `
- use `npm start `

<a  name="2"></a>  
## How include in project?
```Javascript
let query = require('./module/database/query.js');
```

## Functions

|Route |Function  | Params|What is it do?|  Return(if succes)|
|------------- | -------------|-------------|-------------|-------------|
|/registration|`registration`|name | Register new use in chat and create token| token|
|/send|`sendMessage`  | token, message| Send message in chat room|true|
|/dialog|`getMessages` | token, (limit)| Return (limit) message in chat, or all messages in chat if limit not define|  list of messages|
|/edit|`updateMessage`| id, token, , message| Edit message by Id| true|


## Params
| Params | Description |
| ------------- | ------------- |
| name  | User name, login, in chat  |
| token  |  Identificator of user, generated as result of reistration |
| message |   Message, that user send on chat |
| id  |  Identificator of message in chat |




