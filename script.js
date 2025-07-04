const form = document.getElementById('user-form');
const list = document.getElementById('people-list');
const msg = document.getElementById('message');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('full-name').value.trim();
  const email = document.getElementById('email').value.trim();
  const age = parseInt(document.getElementById('age').value.trim());
  const hobbies = document.getElementById('hobbies').value.trim();

  if (!name || !email || !hobbies || isNaN(age) || age <= 0 || !validateEmail(email)) {
    msg.textContent = "Please enter valid data in all fields.";
    return;
  }

  if (age <= 18) {
    msg.textContent = "You must be over 18 to submit.";
    return;
  }

  msg.textContent = '';
  addPersonToList({ name, email, age, hobbies });
  form.reset();
});

function validateEmail(email) {
  return /^[^@]+@[^@]+\.[^@]+$/.test(email);
}

function addPersonToList(person) {
  const container = document.createElement('div');
  container.className = 'card';
  container.innerHTML = `
    <p><strong>Name:</strong> ${person.name}</p>
    <p><strong>Email:</strong> ${person.email}</p>
    <p><strong>Age:</strong> ${person.age}</p>
    <p><strong>Hobbies:</strong> ${person.hobbies}</p>
  `;
  list.appendChild(container);
}
