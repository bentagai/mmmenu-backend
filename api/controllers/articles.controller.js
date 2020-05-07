const ArticleModel = require('../models/articles.model')
const { handleError } = require('../utils')

module.exports = {
  createArticle,
  getAllArticles,
  getArticleById,
  deleteArticleById,
  updateArticle
}

function createArticle (req, res) {
  const articleBody = req.body
  ArticleModel
    .create(articleBody)
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}

function getAllArticles(req, res) {
  const query = req.query.search

  if (query === undefined || query === '') {
    ArticleModel
      .find()
      .then(response => res.json(response))
      .catch((err) => handleError(err, res))
  } else {
    ArticleModel
      .find({
        category: {
          $regex: query,
          $options: 'i'
        }
      })
      .then(response => res.json(response))
      .catch((err) => handleError(err, res))
  }
}

function getArticleById (req, res) {
  const articleId = req.params.id
  ArticleModel
    .findById(articleId)
    .then(response => res.json(response))
    .catch(err => handleError(err, res))
}

function deleteArticleById (req, res) {
  const articleId = req.params.id
  ArticleModel
    .remove({ _id: articleId })
    .then(response => res.json(response))
    .catch(err => handleError(err, res))
}

function updateArticle (req, res) {
  const articleId = req.params.id
  ArticleModel
    .findByIdAndUpdate(articleId, req.body, {
      new: true
    })
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}