const router = require('express').Router();
const postUser = require('./postUser');

router.use(postUser);
module.exports = router;
