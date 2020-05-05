const UserModel = require('../models/users.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { handleError } = require('../utils')

module.exports = {
  getAllUsers,
  getUserById,
  deleteUserById,
  updateUser,
  updateUserPassword
}

function getAllUsers (req, res) {
  UserModel
    .find()
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}

function getUserById (req, res) {
  UserModel
    .findById(res.locals.user._id)
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}

function deleteUserById (req, res) {
  UserModel
    .remove({ _id: res.locals.user._id })
    .then(response => res.json(response))
    .catch(err => handleError(err, res))
}

function updateUser (req, res) {
  UserModel
    .findByIdAndUpdate(res.locals.user._id, req.body, {
      new: true,
      runValidators: true
    })
    .then(user => {
      const userData = {
        username: user.name,
        email: user.email
      }
      const token = jwt.sign(
        userData,
        process.env.SECRET, {
          expiresIn: '7d'
        }
      )
      res.json({ token, ...userData })
    })
    .catch((err) => handleError(err, res))
}

function updateUserPassword(req, res) {
  bcrypt.compare(req.body.current, res.locals.user.password, (err, result) => {
    if (err) {
      handleError(err)
    }
    if (!result) {
      return res.json({
        error: `wrong password for ${res.locals.user.email}`
      })
    }

    UserModel
      .findById(res.locals.user._id)
      .then(user => {
        user.password = bcrypt.hashSync(req.body.new, 10)
        user.save()
        return res.json('ok')
      })
      .catch(err => handleError(err, res))
  })
  
  UserModel
    .findByIdAndUpdate(res.locals.user._id, req.body, {
      new: true,
      runValidators: true
    })
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}
