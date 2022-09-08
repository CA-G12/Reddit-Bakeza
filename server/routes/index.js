const router = require('express').Router();
const getUser = require('./getUser');
const postUser = require('./postUser');
const auth = require('./auth');
const logout = require('./logout');
const getPosts = require('./getPosts');

router.use(getUser ,auth);
router.use(postUser);
router.use(logout);
router.use(getPosts);
module.exports = router;
