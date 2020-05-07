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
  category: {
    type: String,
    enum: ['comer', 'comprar', 'hacer']
  },
  img_url: [{
    type: String
  }],
  text: {
    type: String,
    required: true
  },
  created_at: {
    type: Date,
    default: Date.now()
  }
})

const articleModel = mongoose.model('article', articleSchema)
module.exports = articleModel
