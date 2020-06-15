# Refer to Readmecontinued.md Disclaimer - was given incorrectly as a starting place with the 4 task below that I never finished, and this code should never be used seriously, providing it online for sharing purposes as a pseudo kata

This came from the below git hubs and the refactoring was just a pseudo kata for myself
- [V1.0.0](https://github.com/dalenguyen/rest-api-node-typescript/tree/v1.0.0): you can run the server directly after cloning this version. It will create a simple RESTful API over HTTP. 
- [V2.0.0](https://github.com/dalenguyen/rest-api-node-typescript/tree/v2.0.0): this is a more secure and control API project. You need to read the post on [how to secure RESTful API application](https://itnext.io/building-restful-web-apis-with-node-js-express-mongodb-and-typescript-part-5-a80e5a7f03db) first. After that, you can run the project.

## Description
API to serve data over RESTful calls for a user tracking software. The server uses lokijs, a in-memory JavaScript Datastore with Persistence.

## Install and run the server

### Development

```bash
npm install
npm run dev
```

## API calls

Firstly, To create users :

```bash
POST localhost:4999/signup
```

```json
{
  "email": "test@test.com",
  "password": "test",
  "phone": "444-333-1111"
}
```

Login (generate events):

```bash
POST localhost:4999/login
```

```json
{
  "email": "test@test.com",
  "password": "test"
}
```
Response:
```json
{
  "message": "Created user with email test@test.com"
}

```

- Return all events for all users:

```bash
GET localhost:4999/events/all
```
Response:
```json
[
  {
    "type": "LOGIN",
    "created": 1542333383634,
    "user": "test@ns8.com"
  },
  {
    "type": "LOGIN",
    "created": 1542333385639,
    "user": "test@ns8.com"
  },
  {
    "type": "LOGIN",
    "created": 1542333386152,
    "user": "test@ns8.com"
  },
  {
    "type": "LOGIN",
    "created": 1542333431608,
    "user": "other@lac.com"
  }
]
```

- Return all events for a single user

```bash
GET localhost:4999/events/user?email=other@lac.com
```
Response:

Response:
```json
[
  {
    "type": "LOGIN",
    "created": 1542333903026,
    "user": "other@lac.com"
  }
]

```

- Return all events for the last day

```bash
GET localhost:4999/events/lastday
```

Response:
```json
[
  {
    "type": "LOGIN",
    "created": 1542333903026,
    "user": "other@lac.com"
  },
  {
    "type": "LOGIN",
    "created": 1542333907333,
    "user": "test@ns8.com"
  },
  {
    "type": "LOGIN",
    "created": 1542333908067,
    "user": "test@ns8.com"
  }
]
```

### Todo, in the future:
- Integrate https://jwt.io/ to authorize/authenticate properly
- Use a persistent database
- Create test cases
- Refactor repetitive code specially in the endpoints logic
- Add ssl for https before deploying on a production server






