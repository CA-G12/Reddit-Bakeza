const router = require('express').Router();
const { deletePost } = require('../controllers');
const { verifyToken } = require('../jwt');

router.get('/deletePost/:id', verifyToken, deletePost);

module.exports = router;
