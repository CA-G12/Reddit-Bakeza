fetch('/getPosts')
  .then((res) => res.json())
  .then((data) => {
    renderPosts(data)
  })
  .catch((err) => console.log(err));
