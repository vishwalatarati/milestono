const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  fullName: String,
  email: { type: String, unique: true },
  phone: String,
  password: String,
});

userSchema.pre('save', async function (next) {
  const user = this;
  if (!user.isModified('password')) return next();

  const hashedPassword = await bcrypt.hash(user.password, 10);
  user.password = hashedPassword;
  next();
});

const User = mongoose.model('User', userSchema);

module.exports = User;
