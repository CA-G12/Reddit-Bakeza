const { getUser } = require('../database/queries');

const getUsers = (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  getUser(email, password)
    .then((users) => {
      res.json(users.rows);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: 'server error' });
    });
};
module.exports = getUsers;
