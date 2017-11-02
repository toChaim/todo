const express = require('express');
const methodOverride = require('method-override');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/users');
require('dotenv').config();

const api = express();
api.use(morgan('tiny'));
api.use(bodyParser.json());
api.use(methodOverride('_method'));

api.use('/users', userRoutes);

api.get('/', (req, res, next) => {
  res.json({ text: 'hellow world' });
});

api.use((req, res, next) => {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

if (process.env.ENV === 'development') {
  api.use((err, req, res, next) => {
    res.status(err.status || 500).json({ message: err.message, error: err });
  });
}

api.use(function(err, req, res, next) {
  res.status(err.status || 500).json({
    message: err.message,
    error: {}
  });
});

api.listen(3001, () => {
  console.log('start linstening port 3001');
});
