// Select elements
const button = document.querySelector('button');
const input = document.querySelector('input');
const heading = document.querySelector('h1');
const form = document.querySelector('form');

// Add event listeners
button.addEventListener('click', updateHeading);
input.addEventListener('input', updateHeading);
form.addEventListener('submit', addToList);

// Event functions
function updateHeading() {
  heading.textContent = input.value;
}

function addToList(e) {
  e.preventDefault(); // prevent the form from submitting
  const list = document.querySelector('ul');
  const newItem = document.createElement('li');
  newItem.textContent = input.value;
  list.appendChild(newItem);
  input.value = '';
}

// Helper function
function showMessage(message, type = 'success') {
  const messageDiv = document.createElement('div');
  messageDiv.classList.add('message', type);
  messageDiv.textContent = message;
  document.body.appendChild(messageDiv);
  setTimeout(() => {
    messageDiv.remove();
  }, 2000);
}

