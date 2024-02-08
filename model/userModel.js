const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  prenom: String,
  nom: String,
  adresse: String,
  telephone: String,
});

const User = mongoose.model('User', userSchema);

module.exports = User;
