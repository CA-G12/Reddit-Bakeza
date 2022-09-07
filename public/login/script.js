const signInForm = document.querySelector('#form');

signInForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = signInForm.email.value;
  const password = signInForm.password.value;

  const options = {
    method: 'POST',
    body: JSON.stringify({ email, password }),
    headers: { 'Content-Type': 'application/json' },
  };
  fetch('/logged', options)
    .then((res) => {
      window.location.href = '/authorized';
    })
    .catch((err) => console.log(err));
});
