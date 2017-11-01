const express = require('express');
var api = express();

api.get('/', (req, res, next) => {
  console.log('index response');
  res.json({ text: 'hellow world' });
});

api.listen(3001, () => {
  console.log('start linstening port 3001');
});
