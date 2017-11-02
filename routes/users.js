const express = require('express');
const router = express.Router();
var db = require('../models');

router.get(
  '/',
  (req, res) => {
    db.User.find().then(users => {
      res.json({ users });
    });
  },
  err =>
    res.status(err.status || 500).json({ message: err.message, error: err })
);
router.post('/', (req, res) => {
  db.User.create(req.body).then(user => res.json(user)),
    err =>
      res.status(err.status || 500).json({ message: err.message, error: err });
});
router.get('/:id', function(req, res, next) {
  db.User.findById(req.params.id).then(function(user) {
    res.json({ user });
  });
});
module.exports = router;
