const router = require('express').Router();
const { join } = require('path');
const { verifyToken } = require('../jwt');

router.get('/profile', verifyToken, (req, res) => {
  res.sendFile(join(__dirname, '..', '..', 'public', 'profilePage', 'index.html'));
});

module.exports = router;
