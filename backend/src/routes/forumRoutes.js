const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// Ruta para crear un nuevo post
router.post('/new', async (req, res) => {
  try {
    const { content, author } = req.body;

    if (!content || !author) {
      return res.status(400).json({ message: 'Faltan campos requeridos' });
    }

    const newPost = new Post({
      content,
      author,
      timestamp: new Date(),
      likes: 0,
      comments: 0,
    });

    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    console.error('Error al crear el post:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
});

module.exports = router;
