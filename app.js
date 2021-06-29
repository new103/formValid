const name = document.querySelector('#name');
const password = document.querySelector('#password');
const error = document.querySelector('#error');
const form = document.querySelector('#form');

form.addEventListener('submit', e => {
  let messages = [];

  if (name.value === '' || name.value == null) {
    messages.push('Name is required')
  }

  if (password.value.length <= 6) {
    messages.push('Password must me longer than 6 characters');
  }

  if (password.value.length > 12) {
    messages.push('Password must be less than 12 characters');
  }

  if (messages.length > 0) {
    e.preventDefault();
    error.textContent = messages.join(', ')
  }


});