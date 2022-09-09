const { addPost } = require('../database/queries');

const addPosts = (req, res) => {
  const { title, content } = req.body;
  addPost(title, content, req.user.id)
    .then((users) => {
      res.redirect('/authorized');
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: 'server error' });
    });
};
module.exports = addPosts;
