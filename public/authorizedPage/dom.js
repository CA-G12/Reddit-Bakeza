const postContainer = document.querySelector('#postContainer');
const addNewPost = document.querySelector('#post-btn');
const closeBtn = document.querySelector('.close-btn');
const modal = document.querySelector('#modal-post');

addNewPost.addEventListener('click', (e) => {
  modal.classList.remove('display');
});
closeBtn.addEventListener('click', (e) => {
  modal.classList.add('display');
});

const renderPosts = (data) => {
  console.log(data);
  data.forEach((e) => {
    const div = document.createElement('div');
    div.setAttribute('id', e.id);
    div.innerHTML = `
    <div class="user-post-${e.id} user-post">
    <div class="vote">
      <i class="fas fa-long-arrow-alt-up"></i>
      <div>
        <p class="votes-num" id="votes-num">0</p>
      </div>
      <i class="fas fa-long-arrow-alt-down"></i>
    </div>
  
    <div class="post-content">
      <div class="post-title">${e.title}</div>
      <div class="post-desc">${e.content}</div>
      <div class="post-title">
        <div class="post-desc"></div>
      </div>
      <div class="post-footer" id="postFooter">
        <div class="comments-sec">
          <i class="fas fa-comment-alt"></i>
          <p class="comment-label">Comments</p>
        </div>
      </div>
    </div>
    </div>
`;
    postContainer.appendChild(div);
  });
};
