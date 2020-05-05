const router = require('express').Router()
const { authUser } = require('../utils')

const {
  getAllUsers,
  getUserById,
  deleteUserById,
  updateUser,
  updateUserPassword
} = require('../controllers/users.controller')

router.get('/', getAllUsers)
router.get('/me', authUser, getUserById)
router.delete('/me', authUser, deleteUserById)
router.put('/me', authUser, updateUser)
router.put('/me/password', authUser, updateUserPassword)

module.exports = router
