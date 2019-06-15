const express = require('express')
const multer = require('multer')
const uploadConfig = require('./config/upload')
const PostController = require('./controllers/PostControlles')
const LikeController = require('./controllers/LikeControllers')

const routes = express.Router()
const upload = multer(uploadConfig)

routes.get('/', (req,res)=>{
  return res.send(`Hello ${req.query.name}`)
})

routes.get('/posts', PostController.index)
routes.post('/posts', upload.single('image'), PostController.store)
routes.post('/posts/:id/like', LikeController.store)

module.exports = routes