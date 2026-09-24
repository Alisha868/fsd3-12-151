# NPM Project
1. goto project folder(by cd)
2. type `npm init -y`
3. open package.json
4. update `type:module`
5. install nodemon `npm i nodemon -D`
6. update script in package.json

```

script{
    "start": "node app.js",
    "dev": "nodemon prg7.js"
}
```

7. add node_modules to .gitignore
8. to run use npm run dev

## REST API

### Representational State Transfer (REST)
- majorly backend server return only data not html file
- REST API uses (get, post, put, patch, delete) method to communicate with client
- any browser can check only get method
- for other method type we use third party API Tester like postman, thunder client, echo api etc

## Request Type
1. get - getAll , getById
Get: /api/products->url for all products
Get: /api/products/101->url for one products
2. POST: /api/products->url  add products to the database and data will be shared by echoAPI using
3. PUT/PATCH:  /api/products/201->url update in product
4. DELETE: /api/products/110->url 

An exported function is a function that is made available from one JavaScript file so it can be imported and used in another file


