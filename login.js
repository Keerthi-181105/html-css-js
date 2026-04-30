document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const errorMessage = document.getElementById('error-message');

  // Example login credentials
  const validUsername = "admin";
  const validPassword = "1234";

  if (username === validUsername && password === validPassword) {
    alert("Login successful!");
    errorMessage.textContent = "";
    // Redirect or load new content here
  } else {
    errorMessage.textContent = "Invalid username or password.";
  }
});
