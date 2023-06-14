# Students List API
```
```
## Get all created notes

**GET** `/api/v1/students`

Response

```json
[
  {
    "id": 1,
    "name": "John",
    "surname": "Doe"
    "image": "https://example.com"
    "group": "student group"
    "age": 18
  },
  {
    "id": 2,
    "name": "John",
    "surname": "Doe"
    "image": "https://example.com"
    "group": "student group"
    "age": 18
  }
]

```
---
## Create new student

**POST**`/api/v1/newstudent` 

Request
```json
{
    "name": "John",
    "surname": "Doe"
    "image": "https://example.com"
    "group": "student group"
    "age": 18
}
```

Response
```json
{   "id" : 2
    "name": "John",
    "surname": "Doe"
    "image": "https://example.com"
    "group": "student group"
    "age": 18
}
```
---
## Delete any note

**DELETE**`/api/v1/deletestudent`

Request
```json
{
    "id": 3,
    "name": "John",
    "surname": "Doe"
    "image": "https://example.com"
    "group": "student group"
    "age": 18
}
```
Response
```json
{
    "id": 3,
    "name": "John",
    "surname": "Doe"
    "image": "https://example.com"
    "group": "student group"
    "age": 18
}
```
---
## Update any note

**PATCH**`/api/v1/patchstudent`

Request
```json
{
    "id": 4,
    "name": "John",
    "surname": "Doe"
    "image": "https://example.com"
    "group": "student group"
    "age": 18
}
```
Response
```json
{
    "id": 4,
    "name": "John",
    "surname": "Doe"
    "image": "https://example.com"
    "group": "student group"
    "age": 18
}
```
