# BOOKS API

## MONGODB - NODE.JS EXPRESS REST API

With this API, 
 - A book can be created
 - A book can be updated
 - A book can be get by title
 - Many books can be get by filter
 - A book can be deleted by title

## Create book
`POST /book/create`
### Request
curl -i http://localhost:3000/book/create -H 'Content-Type: application/json' -d '{"title": "Sample Book", "author": {"name": "Sample Author", "country": "Sample Country", "birthDate": "06.11.1996"}, "price": "50", "isbn": "Sample ISBN", "language": "Sample Language", "numberOfPages": "50", "publisher": "Sample Publisher"}'
### Response
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 56
ETag: W/"38-DCr1NmL54s5lHhEYr+PFTZJTFqQ"
Date: Sun, 30 Jul 2023 20:53:26 GMT
Connection: keep-alive
Keep-Alive: timeout=5

{"_id":"64c79d31b3b6e836acd2ae5d","title":"Sample Book","author":{"name":"Sample Author","country":"Sample Country","birthDate":"1996-06-10T21:00:00.000Z","_id":"64c79d31b3b6e836acd2ae5e"},"price":"50","isbn":"Sample ISBN","language":"Sample Language","numberOfPages":"50","publisher":"Sample Publisher","__v":0}

## Update Book
`POST /book/update`
### Request
curl -i http://localhost:3000/book/update -H 'Content-Type: application/json' -d '{"id": "64c79d31b3b6e836acd2ae5d", "title": "Sample Book", "numberOfPages": "55", "publisher": "Sample Publisher 2"}'
### Response
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 159
ETag: W/"13a-NWS5CC9k0vJ7Js6Ci5eAXyhUohQ"
Date: Sun, 30 Jul 2023 20:51:56 GMT
Connection: keep-alive
Keep-Alive: timeout=5

{"_id":"64c79d31b3b6e836acd2ae5d","title":"Sample Book","author":{"name":"Sample Author","country":"Sample Country","birthDate":"1996-06-10T21:00:00.000Z","_id":"64c79d31b3b6e836acd2ae5e"},"price":"50","isbn":"Sample ISBN","language":"Sample Language","numberOfPages":"50","publisher":"Sample Publisher","__v":0}

## Get Book by Tile
`GET /book/get/{id}`
### Request
curl -i -X GET -H 'Accept: application/json' http://localhost:3000/book/get/64c79d31b3b6e836acd2ae5d
### Response
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 159
ETag: W/"9f-vWQznvJVP+PoitmIItUBTIJWAII"
Date: Sun, 30 Jul 2023 19:51:35 GMT
Connection: keep-alive
Keep-Alive: timeout=5

{"_id":"64c79d31b3b6e836acd2ae5d","title":"Sample Book","author":{"name":"Sample Author","country":"Sample Country","birthDate":"1996-06-10T21:00:00.000Z","_id":"64c79d31b3b6e836acd2ae5e"},"price":"50","isbn":"Sample ISBN","language":"Sample Language","numberOfPages":"55","publisher":"Sample Publisher 2","__v":0}

## Get Books
`GET /book/getBooks`
### Request
curl -i -X GET -H 'Accept: application/json' http://localhost:3000/book/getBooks
### Response
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 159
ETag: W/"9f-vWQznvJVP+PoitmIItUBTIJWAII"
Date: Sun, 30 Jul 2023 19:53:26 GMT
Connection: keep-alive
Keep-Alive: timeout=5

[{"_id":"64c79d31b3b6e836acd2ae5d","title":"Sample Book","author":{"name":"Sample Author","country":"Sample Country","birthDate":"1996-06-10T21:00:00.000Z","_id":"64c79d31b3b6e836acd2ae5e"},"price":"50","isbn":"Sample ISBN","language":"Sample Language","numberOfPages":"55","publisher":"Sample Publisher 2"},{"_id":"64c79ef9b3b6e836acd2ae64","title":"Sample Book 2","author":{"name":"Sample Author 2","country":"Sample Country","birthDate":"1996-06-10T21:00:00.000Z","_id":"64c79ef9b3b6e836acd2ae65"},"price":"50","isbn":"Sample ISBN","language":"Sample Language","numberOfPages":"50","publisher":"Sample Publisher"}]

## Delete Book
`DELETE /book/delete/{id}`
### Request
curl -i -X DELETE -H 'Accept: application/json' http://localhost:3000/book/delete/64c79d31b3b6e836acd2ae5d
### Response
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 56
ETag: W/"38-DCr1NmL54s5lHhEYr+PFTZJTFqQ"
Date: Mon, 31 Jul 2023 12:12:22 GMT
Connection: keep-alive
Keep-Alive: timeout=5

{"httpCode":"200","code":0,"errorCode":0,"message":"OK"}

## Run Project

 - Build the docker image

docker build -t book-api .

 - Run the Docker container

sudo docker-compose up
