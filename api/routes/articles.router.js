const router = require('express').Router()
const { authUser } = require('../utils')
const { authAdmin } = require('../utils')

const {
  createArticle,
  getAllArticles,
  getArticleById,
  deleteArticleById,
  updateArticle
} = require('../controllers/articles.controller')

router.post('/', authUser, authAdmin, createArticle)
router.get('/', getAllArticles)
router.get('/:id', getArticleById)
router.delete('/:id', authUser, authAdmin, deleteArticleById)
router.put('/:id', authUser, authAdmin, updateArticle)

module.exports = router
