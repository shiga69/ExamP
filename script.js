const form = document.getElementById('user-form');
const list = document.getElementById('people-list');
const msg = document.getElementById('message');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('full-name').value.trim();
  const email = document.getElementById('email').value.trim();
  const age = parseInt(document.getElementById('age').value.trim());

  if (!name || !email || isNaN(age) || age <= 0 || !validateEmail(email)) {
    msg.textContent = "Please enter valid data in all fields.";
    return;
  }

  if (age <= 18) {
    msg.textContent = "You must be over 18 to submit.";
    return;
  }

  msg.textContent = '';
  addPersonToList({ name, email, age });
  form.reset();
});

function validateEmail(email) {
  return /^[^@]+@[^@]+\.[^@]+$/.test(email);
}

function addPersonToList(person) {
  const li = document.createElement('li');
  li.textContent = `Full Name: ${person.name}, Email: ${person.email}, Age: ${person.age}`;
  list.appendChild(li);
}
