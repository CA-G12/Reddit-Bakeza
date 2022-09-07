const jwt = require('jsonwebtoken');
require('env2')('.env');

const generateToken = (res, payload) => {
    jwt.sign(payload, process.env.SERCRET_KEY, { algorithm: 'HS256' }, (err, token) => {
        if (err) {
            res.status(401).send('Error');
        } else {
            res.cookie('token', token).send('Token successfully');
        }
    });
};

module.exports = generateToken