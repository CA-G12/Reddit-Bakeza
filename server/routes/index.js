const router = require('express').Router();
const getUser = require('./getUser');
const postUser = require('./postUser');
const addPost = require('./addPost');
const auth = require('./auth');
const logout = require('./logout');
const getPosts = require('./getPosts');
const getProfile = require('./getProfile');
const profile = require('./profile');

router.use(getUser);
router.use(postUser);
router.use(getProfile);
router.use(addPost);
router.use(profile);
router.use(auth);
router.use(logout);
router.use(getPosts);
module.exports = router;
