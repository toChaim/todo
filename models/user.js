const mongoose = require('mongoose');
const userSchema = new mongoose.Schema(
  {
    userName: String
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);

module.exports = User;
