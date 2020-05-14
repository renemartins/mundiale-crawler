# Desafio Mundiale

## Challenge Proposal

The challenge to develop a api to perform a search on the www.mercadolivre.com.br website, returning a list of products.

### Post Request

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


# Online Tests

```
http://127.0.0.1
```

# How to Configure

* `git clone git@https://github.com/renemartins/mundiale-crawler.git`
* `cd mundiale-crawler`
* `npm install`
* `npm start`


## How to run the tests

* `npm test`