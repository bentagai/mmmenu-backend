const mongoose = require('mongoose')

const articleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  created_at: {
    type: Number,
    default: Date.now() // Es automático?
  }
})

const articleModel = mongoose.model('article', articleSchema)
module.exports = articleModel
