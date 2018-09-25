const express = require('express')
const hbs = require('hbs')
const fs = require('fs')
/* Set express */
var app = express();

hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs');
/* set public directory for express */
app.use(express.static(__dirname + '/public'))
/* middleware */
app.use((req, res, next) => {
  let now = new Date().toString()
  let log = `Loggin at ${now} with ${req.method} ${req.url}`

  console.log(log)
  fs.appendFileSync('server.log', log + '\n')
  next();
})

/* Making helper HBS */
hbs.registerHelper('currentYear', () => new Date().getFullYear())
hbs.registerHelper('sayHello', (name) => 'Halo, ' + name)
hbs.registerHelper('author', () => 'Indra Kusuma')

app.get('/', (req, res) => {
  res.render('home.hbs', {
    data: {
      title: 'This is Homepage',
      message: 'Welcome to Express with handlebarjs!',
    }
  })
});

/* example using template engine hanldebar js */
app.get('/about', (req, res) => {
  res.render('about.hbs', {
    data: {
      title: 'About Indra Kusuma',
      description: 'Indra adalah programmer!'
    }
  })
});

app.get('/profile', (req, res) => {
  res.send({
    success: true,
    message: 'Showing your information..',
    data: {
      name: 'Indra Kusuma',
      age: 21,
      website: 'https://blog.indrakusuma.web.id'
    }
  })
});

app.get('/error', (req, res) => {
  res.send({
    success: false,
    message: 'error message..'
  })
})

app.listen(8080, () => {
  console.log('Listening server on port 8080')
});