const getUser = require('./getUser');
const postUser = require('./postUser');
const getPosts = require('./getPosts');
const addPost = require('./addPost');
const validatePassword = require('./validatePassword');
const getProfile = require('./getProfile');
const deletePost = require('./deletePost');

module.exports = { getUser, postUser, validatePassword, getPosts, addPost, getProfile, deletePost };
