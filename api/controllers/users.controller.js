const UserModel = require('../models/users.model')
const { handleError } = require('../utils')

module.exports = {
  getAllUsers,
  getUserById,
  deleteUserById,
  updateUser
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
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}
