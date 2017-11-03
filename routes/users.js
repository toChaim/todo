const express = require('express');
const router = express.Router();
var db = require('../models');

router.get('/', (req, res) => {
  db.User
    .find()
    .then(users => {
      res.json({ users });
    })
    .catch(err => {
      next(err);
    });
});

router.get('/:id', function(req, res, next) {
  db.User
    .findById(req.params.id)
    .then(user => {
      if (user) res.json({ user });
      next();
    })
    .catch(err => {
      next(err);
    });
});

router.post('/', (req, res) => {
  db.User
    .create(req.body)
    .then(user => res.json(user))
    .catch(err => {
      next(err);
    });
});

router.patch('/:id', (req, res) => {
  db.User
    .findByIdAndUpdate(req.params.id, req.body)
    .then(user => {
      res.json({ user });
    })
    .catch(err => {
      next(err);
    });
});

router.delete('/:id', (req, res) => {
  db.User
    .findByIdAndRemove(req.params.id)
    .then(whatTheHellDoesThisGet => {
      res.json(whatTheHellDoesThisGet);
    })
    .catch(err => {
      next(err);
    });
});

router.post('/login', (req, res, next) => {
  db.User.findOne({ userName: req.body.userName }).then(user => {
    user.comparePassword(req.body.password, (err, isMatch) => {
      if (isMatch) res.json({ user });
      next({
        status: 480,
        message: 'invalid username or password',
        err: 'bad id'
      });
    });
  });
});

module.exports = router;
