const router = require('express').Router()
const { authUser } = require('../utils')

const {
  createArticle,
  getAllArticles,
  getArticleById,
  deleteArticleById,
  updateArticle
} = require('../controllers/articles.controller')

router.post('/', authUser, createArticle)
router.get('/', getAllArticles)
router.get('/:id', getArticleById)
router.delete('/:id', authUser, deleteArticleById)
router.put('/:id', authUser, updateArticle)

module.exports = router
