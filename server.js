const express = require('express');

var app = express();

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
  res.send({
    success: true,
    message: 'Server express running..'
  })
});

app.get('/about', (req, res) => {
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