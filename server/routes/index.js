const router = require('express').Router();
const getUser = require('./getUser');
const postUser = require('./postUser');
const verifyToken = require('./auth');

router.use(getUser ,verifyToken);
router.use(postUser);
module.exports = router;
