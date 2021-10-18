const hiddenElements = document.querySelectorAll('.hidden');
const loader = document.querySelector('.loader');
const message = document.querySelector('.success-message');

window.addEventListener('load', () => {
  setTimeout(() => {
    hiddenElements.forEach(elem => {
      elem.classList.remove('hidden');
    });

    loader.classList.add('hidden');
    message.classList.add('hidden');
  }, 1000)
});
