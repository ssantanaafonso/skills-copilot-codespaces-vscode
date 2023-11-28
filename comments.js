//Create web server
const express = require('express');
const router = express.Router();

//Import the comment model
const Comment = require('../models/comment');

//Get all comments
router.get('/', async (req, res) => {
    try {
        const comments = await Comment.find();
        res.json(comments);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

//Create one comment
router.post('/', async (req, res) => {
    const comment = new Comment({
        title: req.body.title,
        content: req.body.content,
    });
    try {
        const newComment = await comment.save();
        res.status(201).json(newComment);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}