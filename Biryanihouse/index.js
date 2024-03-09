function showSignIn() {
  document.getElementById('loginForm').style.display = 'none';
  document.getElementById('signInForm').style.display = 'block';
}

function showLogin() {
  document.getElementById('signInForm').style.display = 'none';
  document.getElementById('loginForm').style.display = 'block';
}

function register() {
  var firstName = document.getElementById('firstName').value.trim();
  var lastName = document.getElementById('lastName').value.trim();
  var email = document.getElementById('email').value.trim();
  var password = document.getElementById('password').value.trim();
  var confirmPassword = document.getElementById('confirmPassword').value.trim();

  if (!firstName || !lastName || !email || !password || !confirmPassword) {
    alert("Please enter credentials for all fields.");
    return;
  }

  if (password !== confirmPassword) {
    alert("Passwords don't match.");
    return;
  }

  // Store user data in local storage
  localStorage.setItem(email, JSON.stringify({firstName, lastName, email, password}));

  alert("Account successfully created.");
  showLogin();
}

function login() {
  var email = document.getElementById('loginEmail').value.trim();
  var password = document.getElementById('loginPassword').value.trim();

  if (!email || !password) {
    alert("Please enter credentials.");
    return;
  }

  // Retrieve user data from local storage
  var userData = localStorage.getItem(email);
  if (userData) {
    userData = JSON.parse(userData);
    if (userData.password === password) {
      alert("Successfully logged in.");
      window.location.href = "homepage.html";
    } else {
      alert("Incorrect password.");
    }
  } else {
    alert("User not found. Please register.");
  }
}

// Event listeners for buttons
document.getElementById('signInBtn').addEventListener('click', showSignIn);
document.getElementById('loginBtn').addEventListener('click', showLogin);
