function showSignIn() {
  document.getElementById('loginForm').style.display = 'none';
  document.getElementById('signInForm').style.display = 'block';
}

function showLogin() {
  document.getElementById('signInForm').style.display = 'none';
  document.getElementById('loginForm').style.display = 'block';
}

function register() {
  // Get values from the input fields
  var firstName = document.getElementById('firstName').value.trim();
  var lastName = document.getElementById('lastName').value.trim();
  var email = document.getElementById('email').value.trim();
  var password = document.getElementById('password').value.trim();
  var confirmPassword = document.getElementById('confirmPassword').value.trim();

  // Check if any input is empty
  if (!firstName || !lastName || !email || !password || !confirmPassword) {
    alert("Please enter credentials for all fields.");
    return;
  }

  // Check if passwords match
  if (password !== confirmPassword) {
    alert("Passwords doesn't match.");
    return;
  }

  // If everything is okay
  alert("Account successfully created.");
  showLogin(); // Switch to the login form
}

function login() {
  var email = document.getElementById('loginEmail').value.trim();
  var password = document.getElementById('loginPassword').value.trim();

  // Check if email and password inputs are empty
  if (!email || !password) {
    alert("Please enter credentials.");
    return;
  }

  // Here you would normally validate the login credentials with your backend
  alert("Successfully logged in.");
  // After login, you might want to redirect the user or change the page state
}

// Event listeners for buttons
document.getElementById('signInBtn').addEventListener('click', showSignIn);
document.getElementById('loginBtn').addEventListener('click', showLogin);

// function login() {
//   // Placeholder login verification logic
//   // In a real app, verify login credentials here

//   // Redirecting to another page upon successful login
//   window.location.href = "homepage.html"; // Adjust 'index1.html' to the target page's URL
// }

function login() {
  // Assuming you have input fields with IDs 'loginEmail' and 'loginPassword'
  var email = document.getElementById('loginEmail').value.trim();
  var password = document.getElementById('loginPassword').value.trim();

  // Check if email and password inputs are not empty
  if (email !== "" && password !== "") {
    // Placeholder for actual login verification logic
    // In a real application, here you would verify the login credentials against your backend

    // Simulate successful login by redirecting to another page upon valid (non-empty in this case) credentials
    window.location.href = "homepage.html"; // Adjust this to the target page's URL
  } else {
    // If credentials are not entered, alert the user to enter them
    alert("Please enter user credentials.");
  }
}
