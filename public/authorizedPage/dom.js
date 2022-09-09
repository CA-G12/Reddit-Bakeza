const postContainer = document.querySelector('#postContainer');

const renderPosts = (data) => {
  data.forEach((e) => {
    const div = document.createElement('div');
    const title = document.createElement('h1');
    title.textContent = `${e.title}`;
    div.appendChild(title);
    const postId = document.createElement('p');
    postId.textContent = `${e.id}`;
    div.appendChild(postId);
    const content = document.createElement('p');
    content.textContent = `${e.content}`;
    div.appendChild(content);
    const userid = document.createElement('p');
    userid.textContent = `${e.userid}`;
    div.appendChild(userid);
    postContainer.appendChild(div);
  });
};
