const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt-nodejs')

const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    lowercase: true
  },
  password: String
})

userSchema.pre('save', function(next){
  const user = this
  bcrypt.genSalt(10, function(err, salt) {
    if(err) { return next(err) }
    bcrypt.hash(user.password, salt, null, function(err, hash) {
      if(err) { return next(err) }
      user.password = hash
      next()
    })
  })
})

userSchema.methods.comparePassword = function(candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
    if(err) { return cb(err) }
    cb(null, isMatch)
  })
}

const model = mongoose.model('User', userSchema)

module.exports = model