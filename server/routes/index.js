const router = require('express').Router();
const getUser = require('./getUser');
const postUser = require('./postUser');
const addPost = require('./addPost');
const auth = require('./auth');
const logout = require('./logout');
const getPosts = require('./getPosts');

router.use(getUser);
router.use(postUser);
router.use(addPost );
router.use(auth );
router.use(logout);
router.use(getPosts);
module.exports = router;
