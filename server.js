const express = require('express');

var app = express();

app.get('/', (req, res) => {
  res.send('Express running!')
})

app.listen(3000, () => {
  console.log('Listening server on port 3000')
});