const connection = require('../config/connection');

const deletePost = (id) => {
  const sql = {
    text: 'delete from posts where id=($1)',
    values: [id],
  };
  return connection.query(sql);
};
module.exports = deletePost;
