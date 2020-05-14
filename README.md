# Desafio Mundiale

# Online Tests

```
https://mundiale-crawler.herokuapp.com/docs/
```

## Challenge Proposal

The challenge to develop a api to perform a search on the www.mercadolivre.com.br website, returning a list of products.

### Post Request

### URL: https://mundiale-crawler.herokuapp.com/search

```
{
    "search": String,
    "limit": Int,
}
```

#### Example

```
{
    "search": "Cadeado",
    "limit": 15,
}
```

### Response

```
{
"name": String,
"link": String
"price": Number,
"store": String,
"state": String,
}
```

# How to Configure

* `git clone git@https://github.com/renemartins/mundiale-crawler.git`
* `cd mundiale-crawler/nodejs`
* `npm install`
* `npm start`

### Default URL: http://127.0.0.1:3000/search

## How to run the tests

* `npm test`

## How to configure with Docker

* `git clone git@https://github.com/renemartins/mundiale-crawler.git`
* `cd mundiale-crawler`
* `docker-compose up --build`

### Default URL: http://127.0.0.1:3000/search