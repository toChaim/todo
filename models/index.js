const mongoose = require('mongoose');
require('dotenv').config();

mongoose.set('debug', true);
console.log(process.env.MONGODB_URI);
var promise = mongoose.connect(process.env.MONGODB_URI, {
  useMongoClient: true
  /* other options */
});

mongoose.Promise = Promise;

module.exports.User = require('./user');
