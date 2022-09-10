const connection = require('../config/connection');

const getUsername = (id) => {
  const sql = {
    text: 'select username from users where id =($1)',
    values: [id],
  };
  return connection.query(sql);
};

module.exports = getUsername;
