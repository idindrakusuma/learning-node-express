# Learning ExpressJS

## How to run?

- Clone this repo on your local machine
- Install node modules using `npm install`
- Run the server using `node server.js` or using nodemon `nodemon server.js`
- Done

## * Importan to remember
Express adalah sebuah framework minimalis untuk node js. Express sangat cocok bagi pemula yang menggunakan framework di NodeJS.

- How to install express? `npm install express --save`


### Template Engine
Template Engine adalah salah satu fitur yang ada di Express. Template engine yang digunakan pada latihan kali ini adalah template engine Handlebars.js (https://www.npmjs.com/package/hbs).

How to set handlebars in express?
- install the module `npm install hbs`
- Set the modules
```javascript
const express = require('express')
const hbs = require('hbs')
/* set the hbs in express */
const app = express();
app.set('view engine', 'hbs')
```
