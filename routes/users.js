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

router.get('/:id', function(req, res, next) {
  db.User.findById(req.params.id).then(user => {
    res.json({ user });
  });
});

router.post('/', (req, res) => {
  db.User.create(req.body).then(user => res.json(user)),
    err =>
      res.status(err.status || 500).json({ message: err.message, error: err });
});

router.patch('/:id', (req, res) => {
  db.User.findByIdAndUpdate(req.params.id, req.body).then(user => {
    res.json({ user });
  });
});

router.delete('/:id', (req, res) => {
  db.User.findByIdAndRemove(req.params.id).then(whatTheHellDoesThisGet => {
    res.json(whatTheHellDoesThisGet);
  });
});

module.exports = router;
