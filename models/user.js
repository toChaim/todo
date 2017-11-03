const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false
    }
  },
  { timestamps: true }
);

userSchema.pre('save', function(next) {
  var user = this;
  if (!user.isModified('password')) return next();
  bcrypt
    .hash(user.password, 14)
    .then(hashedPassword => {
      user.password = hashedPassword;
      next();
    })
    .catch(err => next(err));
});

userSchema.methods.comparePassword = function(candidatePassword, next) {
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
    if (err) return next(err);
    next(null, isMatch);
  });
};

const User = mongoose.model('User', userSchema);
module.exports = User;
