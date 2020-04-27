const router = require('express').Router()

const authRouter = require('./auth.router')
const { authUser } = require('../utils') // Authenticated Route

router.use('/auth', authRouter)

router.get('/me', authUser, (req, res) => {
  res.json({ user: res.locals.user })
})

module.exports = router
