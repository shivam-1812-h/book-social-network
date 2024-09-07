// Login and Registration functionality
const loginForm = document.querySelector('form');
const registerForm = document.querySelector('form');

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = document.querySelector('#username').value;
  const password = document.querySelector('#password').value;
  // TO DO: Implement login logic here
  console.log(`Login attempt with username: ${username} and password: ${password}`);
  // Redirect to home page if login is successful
  window.location.href = 'home.html';
});

registerForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = document.querySelector('#username').value;
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;
  const confirmPassword = document.querySelector('#confirm-password').value;
  // TO DO: Implement registration logic here
  console.log(`Registration attempt with username: ${username}, email: ${email}, password: ${password}, and confirm password: ${confirmPassword}`);
  // Redirect to login page if registration is successful
  window.location.href = 'login.html';
});

// Home page functionality
const myBooksList = document.querySelector('#my-books');
const myWaitingList = document.querySelector('#my-waiting-list');
const myReturnedBooksList = document.querySelector('#my-returned-books');
const borrowedBooksList = document.querySelector('#borrowed-books');

// TO DO: Implement logic to fetch and display book data from database or API
// For now, let's just add some dummy data
myBooksList.innerHTML = `
  <li>Book 1</li>
  <li>Book 2</li>
  <li>Book 3</li>
`;

myWaitingList.innerHTML = `
  <li>Waiting Book 1</li>
  <li>Waiting Book 2</li>
`;

myReturnedBooksList.innerHTML = `
  <li>Returned Book 1</li>
  <li>Returned Book 2</li>
`;

borrowedBooksList.innerHTML = `
  <li>Borrowed Book 1</li>
  <li>Borrowed Book 2</li>
`;