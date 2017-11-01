const express = require('express');
var api = express();

api.get('/', (req, res, next) => {
  res.render('index', { text: 'hellow world' });
});

api.listen(3001, () => {
  console.log('start linstening port 3000');
});
