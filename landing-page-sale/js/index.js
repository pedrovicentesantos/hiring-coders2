const form = document.querySelector('form');
const successMessage = document.querySelector('.success-message');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = form.querySelector('input[type=email]').value;
  const name = form.querySelector('input[type=text]').value;
  const data = {
    name,
    email
  };

  localStorage.setItem('user', JSON.stringify(data));
  form.classList.add('hidden');
  successMessage.classList.remove('hidden');
});