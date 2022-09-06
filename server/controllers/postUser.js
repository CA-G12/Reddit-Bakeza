const { postUser } = require('../database/queries');

const postUsers = (req, res) => {
  const { username, email, password } = req.body;
  console.log(username, email, password);
  postUser(username, email, password)
    .then((data) => {
      console.log(data);
      res.json(data.rows);
    }).catch((err) => {
      console.log(err);
      res.status(500).json({ msg: 'server error' });
    });
};

module.exports = postUsers;
