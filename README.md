
<h1 align="center">Product Api</h1>

<p align="center">
  <img alt="Github top language" src="https://img.shields.io/github/languages/top/nkosi-tauro/product-api?color=56BEB8">

  <img alt="Github language count" src="https://img.shields.io/github/languages/count/nkosi-tauro/product-api?color=56BEB8">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/nkosi-tauro/product-api?color=56BEB8">

  <img alt="License" src="https://img.shields.io/github/license/nkosi-tauro/product-api?color=56BEB8">

  <!-- <img alt="Github issues" src="https://img.shields.io/github/issues/nkosi-tauro/product-api?color=56BEB8" /> -->

  <!-- <img alt="Github forks" src="https://img.shields.io/github/forks/nkosi-tauro/product-api?color=56BEB8" /> -->

  <!-- <img alt="Github stars" src="https://img.shields.io/github/stars/nkosi-tauro/product-api?color=56BEB8" /> -->
</p>

<!-- Status -->

<!-- <h4 align="center"> 
	🚧  Product Api 🚀 Under construction...  🚧
</h4> 

<hr> -->

<br>

## :dart: About ##

A Simple CRUD API built with NestJS

## :sparkles: Features ##

:heavy_check_mark: User can GET/POST/PATCH/DELETE Products

## :rocket: Technologies ##

The following tools were used in this project:

- [Nest.js](https://nestjs.com/)
- [Node.js](https://nodejs.org/en/)

## :white_check_mark: Requirements ##

Before starting :checkered_flag:, you need to have [Git](https://git-scm.com) and [Node](https://nodejs.org/en/) installed.

## :checkered_flag: Starting ##

```bash
# Clone this project
$ git clone https://github.com/nkosi-tauro/product-api

# Access
$ cd product-api

# Install dependencies
$ npm install

# Run the project
$ npm start

# The server will initialize in the <http://localhost:3000>
```

## :checkered_flag: Usage ##
**Using Postman** or a service of your choice
```bash
# POST new Product
$ http://localhost:3000/products
-> Body -> JSON
{
    "title": "New Title",
    "description": "New Description",
    "price": 13000
}

# GET All Products
$ http://localhost:3000/products

# GET Single Product
http://localhost:3000/products/:id

# PATCH  Product
$ http://localhost:3000/products/:id
-> Body -> JSON
{
    "title": "New Udpated Title",
    "description": "New Udpated  Description",
    "price": 13000
}

# Delete Single Product
http://localhost:3000/products/:id

```

## :memo: License ##

This project is under license from MIT. For more details, see the [LICENSE](LICENSE.md) file.


Made with :heart: by <a href="https://github.com/nkosi-tauro" target="_blank">Nkosilathi Tauro</a>

&#xa0;

<a href="#top">Back to top</a>
