const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  text: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    required: true
  }
})

const articleSchema = new mongoose.Schema({
  img_url: [{
    type: String,
    required: true
  }],
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
  createdAt: {
    type: Date,
    required: true
  },
  tags: [{
    type: String,
    required: true
  }],
  comments: [commentSchema]
})

const articleModel = mongoose.model('article', articleSchema)
module.exports = articleModel
