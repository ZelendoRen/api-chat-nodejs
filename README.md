
# REST API Online Chat Description

## Introdution
The API is used to integrate the capabilities of online chat into a client’s personal project. The API is intended for developers and is accompanied by detailed documentation.

## Description
REST API Chat runs over HTTP and is a set of methods by which requests are made and responses are returned for each operation. All answers come in the form of JSON structures.

# Functions

## Registration
Registration (`registration`) procces can start only, when user enter his nicknamev  (`name`) and this is unic in this database. Return, as result, `token` to user. This token uses to do actions in chat.

| Params | Description |
| ------------- | ------------- |
| string name  | User name, display in chat  |
| int  token  |  Identificator of user, generated as result of reistration |

##  SendMesasge 
To use this function (`sendMessage`) need define `token` and `message` paarams. `message` contains user message, that sending in chat, `token` indenify user, that send this mesaage. As result returns bool `true`, if succes.

| Params | Description |
| ------------- | ------------- |
|int token  |  Identificator of user, generated as result of reistration |
|string message |   Message, that user send on chat |

## UpadeMessage
This function `updateMessage` get permisson to change already send message, if entered pare of `id` and `token` exist in databes. Param `message` contain new meassge. `id` is unic variable for every message. Return bool `true`, if succes.
| Params | Description |
| ------------- | ------------- |
| int token  |  Identificator of user, generated as result of reistration |
| string message |   Message, that user send on chat |
| int id  |  Identificator of message in chat |

## GetMessages
This fucntion `getMessages`  return list of all (or `limit`, if define) message. To get permission for this action necessary to define `token`. 


| Params | Description |
| ------------- | ------------- |
| int limit (variative) | limit of dipalayed message  |
| int token  |  Identificator of user, generated as result of reistration |

# Routes
|Route |Function  | Params|
|------------- | -------------|-------------|
|/registration|`registration`|name |
|/send| `sendMessage`| token, message|
|/dialog|`getMessages` | token, (limit)| messages|
|/edit|`updateMessage`| id, token, message| 


# Errors


|id |Description |
|------------- | -------------|
|01|  This name already used|
|02|  Bad token|
|03|  You don`t have permissoin to this action|
|04|  Message with this id don`t exist. Check message id and try again|



