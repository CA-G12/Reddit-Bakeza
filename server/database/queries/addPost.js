const connection = require('../config/connection');

const addPost = (title, content, userId) => {
  const sql = {
    text: 'insert into posts (title, content, userId) values ($1, $2, $3)',
    values: [title, content, userId],
  };
  return connection.query(sql);
};
module.exports = addPost;
