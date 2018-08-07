const express = require('express');
const hbs = require('hbs');

/* Set express */
var app = express();
app.set('view engine', 'hbs');

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
  res.send({
    success: true,
    message: 'Server express running..'
  })
});

/* example using template engine hanldebar js */
app.get('/about', (req, res) => {
  res.render('about.hbs');
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

app.listen(3000, () => {
  console.log('Listening server on port 3000')
});