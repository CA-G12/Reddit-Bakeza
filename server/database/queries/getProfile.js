const connection = require('../config/connection');

const getProfile = (id) => {
  const sql = {
    text: 'select posts.* , users.username from posts , users where users.id = posts.userId and users.id =($1)',
    values: [id],
  };
  return connection.query(sql);
};

module.exports = getProfile;
