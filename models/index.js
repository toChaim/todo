const mongoose = require('mongoose');
mongoose.set('debug', true);
// mongoose.connect('mongodb://localhost/todo-app');
var promise = mongoose.connect('mongodb://localhost/todo-app', {
  useMongoClient: true
  /* other options */
});
mongoose.Promise = Promise;

module.exports.User = require('./user');
