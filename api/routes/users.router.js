const router = require('express').Router()
const { authUser } = require('../utils')

const {
  getAllUsers,
  getUserById,
  deleteUserById,
  updateUser,
  updateUserPassword,
  addFavouriteToUser,
  getAllFavourites,
  deleteFavourite
} = require('../controllers/users.controller')

router.get('/', getAllUsers)
router.get('/me', authUser, getUserById)
router.delete('/me', authUser, deleteUserById)
router.put('/me', authUser, updateUser)
router.put('/me/password', authUser, updateUserPassword)
router.post('/me/favourites/:id', authUser, addFavouriteToUser)
router.get('/me/favourites', authUser, getAllFavourites)
router.delete('/me/favourites/:id', authUser, deleteFavourite)

module.exports = router
