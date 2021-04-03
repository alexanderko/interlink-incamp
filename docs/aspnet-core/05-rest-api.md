---
id: rest-api
title: REST API
---

[Соглашения для REST API](https://youtu.be/FRNeMnPMPx0)

## What is REST
* Representative State Transfer
* Convention over HTTP

## Key characteristics
1. Resource based (server pages, records in database)
2. Use URLs as unique identifiers
3. Stateless ("session" state transfered in request/respose and not hold on server side)
4. Common representations: HTML, XML, JSON

## HTTP usage
* resource identifier – HTTP path (/posts, /tasks/42, /posts/123/comments)
* action – HTTP method (GET, POST, PUT, PATCH, DELETE, HEAD)
* resorce representation (JSON, HTML) – request and/or response body
* meta information – headers (authentication, caching, content type)
* action result status – HTTP status codes

## HTTP method mapping to actions against resource
* GET – get
* POST - create
* PUT – replace
* PATCH – partial update
* DELETE – delete

## Common status codes
* 200 OK
* 201 Created
* 400 Bad request (malformed body)
* 401 Not authenticated
* 403 Not authorized
* 404 Resource not faund
* 422 Unprocessable entity (server side validation failed)
* 500 Internal server error

## Ручное тестирование с HTTPie

[Ручное тестирование с HTTPie](https://youtu.be/ykhazqtoQY4)