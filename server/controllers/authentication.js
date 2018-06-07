const User = require('../models/user')
const jwt = require('jwt-simple')
const config = require('../config')

function tokenForUser(user) {
  const timestamp = new Date().getTime()
  return jwt.encode({ sub: user.id, iat: timestamp }, config.secret)
}

exports.signup = (req, res, next) => {
  const { email, password } = req.body
  if(!email || !password) {
    res.status(422).send({ error: 'email and password required' })
  }
  User.findOne({ email: email }, (err, existingUser) => {
    if(err) { return next(error) }
    if(existingUser) {
      return res.status(422).send({ error: 'email already in use' })
    }
    const user = new User({
      email: email,
      password: password
    })
    user.save(err => {
      if(err) { return next(err) }
      res.send({ token: tokenForUser(user) })
    })
  })
}

exports.signin = (req, res, next) => {
  res.send({ token: tokenForUser(req.user) })
}