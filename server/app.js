const { join } = require('path');
const express = require('express');
const compression = require('compression');
const cookieParser = require('cookie-parser');
const router = require('./routes');

const app = express();

app.set('port', process.env.PORT || 8080);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(compression());
app.use(cookieParser());
app.use(express.static(join(__dirname, '..', 'public')));

app.get('/login', (req, res) => {
  res.redirect('/public/login/index.html');
  res.send('logged');
});
app.get('/signup', (req, res) => {
  res.redirect('/public/signup/index.html');
  res.send('signed');
});
app.use(router);

app.use((req, res) => {
  res.status(404).sendFile(join(__dirname, '..', 'public', 'errors', '404.html'));
});
app.use((req, res) => {
  res.status(401).sendFile(join(__dirname, '..', 'public', 'errors', '401.html'));
});

app.use((err, req, res, next) => {
  res.status(err.status || 500).sendFile(join(__dirname, '..', 'public', 'errors', '500.html'));
});

module.exports = app;
