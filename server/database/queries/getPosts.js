const connection = require('../config/connection');

const getPosts = () => connection.query('select users.username,posts.title, posts.id, posts.content from posts join users on posts.userId = users.id;');

module.exports = getPosts;
