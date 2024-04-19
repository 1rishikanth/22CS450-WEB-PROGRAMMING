document.getElementById('registrationForm').addEventListener('submit', function(event) {
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var usernameError = document.getElementById('usernameError');
    var emailError = document.getElementById('emailError');
    var passwordError = document.getElementById('passwordError');
    var isValid = true;
  
    // Username validation
    if (username.trim() === '') {
      usernameError.textContent = 'Username is required';
      isValid = false;
    } else {
      usernameError.textContent = '';
    }
  
    // Email validation
    if (email.trim() === '') {
      emailError.textContent = 'Email is required';
      isValid = false;
    } else if (!isValidEmail(email)) {
      emailError.textContent = 'Invalid email address';
      isValid = false;
    } else {
      emailError.textContent = '';
    }
  
    // Password validation
    if (password.trim() === '') {
      passwordError.textContent = 'Password is required';
      isValid = false;
    } else if (password.length < 6) {
      passwordError.textContent = 'Password must be at least 6 characters';
      isValid = false;
    } else {
      passwordError.textContent = '';
    }
  
    if (!isValid) {
      event.preventDefault(); // Prevent form submission if there are errors
    }
  });
  
  function isValidEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
  