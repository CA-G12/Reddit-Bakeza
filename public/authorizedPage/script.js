fetch('/getPosts')
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    renderPosts(data)
  })
  .catch((err) => console.log(err));
