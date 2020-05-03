const router = require('express').Router()
const { authUser } = require('../utils')

const {
  getAllUsers,
  getUserById,
  deleteUserById,
  updateUser
} = require('../controllers/users.controller')

router.get('/', getAllUsers)
router.get('/me', authUser, getUserById)
router.delete('/me', authUser, deleteUserById)
router.put('/me', authUser, updateUser)

module.exports = router
