const router = require('express').Router();
const { join } = require('path');
const { verifyToken } = require('../jwt');

router.get('/authorized', verifyToken, (req, res) => {
  res.sendFile(join(__dirname, '..', '..', 'public', 'authorizedPage', 'index.html'));
});

module.exports = router;
