const router = require('express').Router()

const articleRouter = require('./articles.router')
const authRouter = require('./auth.router')
const userRouter = require('./users.router')

const { authUser } = require('../utils') // Authenticated Route

router.use('/auth', authRouter)
router.use('/article', articleRouter)
router.use('/users', userRouter)

router.get('/me', authUser, (req, res) => {
  res.json({ user: res.locals.user })
})

module.exports = router
