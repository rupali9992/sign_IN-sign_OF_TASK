function redirectToSignIn() {
  document.getElementById("signinForm").style.display = "block";
  document.getElementById("signupForm").style.display = "none";
  document.getElementById("forgotPasswordForm").style.display = "none";
}

function redirectToSignUp() {
  document.getElementById("signinForm").style.display = "none";
  document.getElementById("signupForm").style.display = "block";
  document.getElementById("forgotPasswordForm").style.display = "none";
}

function signIn() {
  var email = document.getElementById("emailInput").value;
  if (email.endsWith("@gmail.com")) {
    window.location.href = "NayFankhFoundation/index.html";
  } else {
    alert("Please enter a valid Gmail address.");
  }
}

function signUp() {
  var email = document.getElementById("emailInput").value;
  if (email.endsWith("@gmail.com")) {
    window.location.href = "NayFankhFoundation/index.html";
  } else {
    alert("Please enter a valid Gmail address.");
  }

  window.location.href = "NayFankhFoundation/index.html";
}
function togglePasswordVisibility() {
  const passwordInput = document.getElementById("password1");
  const eyeIcon = document.getElementById("eye-icon");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    eyeIcon.classList.remove("fa-eye");
    eyeIcon.classList.add("fa-eye-slash");
  } else {
    passwordInput.type = "password";
    eyeIcon.classList.remove("fa-eye-slash");
    eyeIcon.classList.add("fa-eye");
  }
}


function togglePasswordVisibility1() {
  const passwordInput = document.getElementById("password");
  const eyeIcon = document.getElementById("eye-icon");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    eyeIcon.classList.remove("fa-eye");
    eyeIcon.classList.add("fa-eye-slash");
  } else {
    passwordInput.type = "password";
    eyeIcon.classList.remove("fa-eye-slash");
    eyeIcon.classList.add("fa-eye");
  }
}


function signIn() {
  var emailInput = document.getElementById("emailInput");
  var emailErrorMessage = document.getElementById("emailErrorMessage");
  var email = emailInput.value;

  if (!isValidEmail(email)) {
    emailErrorMessage.textContent = "Please enter a valid Gmail address.";
    emailErrorMessage.style.display = "block";
    emailErrorMessage.style.color = "red";
    emailErrorMessage.style.fontSize = "14px";
    emailErrorMessage.style.marginLeft = "10px";
  } else {
    emailErrorMessage.style.display = "none";
  }
  window.location.href = "NayFankhFoundation/index.html";
}

function isValidEmail(email) {
  var emailPattern = /^[a-zA-Z0-9._-]+@gmail\.com$/;
  return emailPattern.test(email);
}
document
  .getElementById("signInLink")
  .addEventListener("click", function (event) {
    event.preventDefault();
    redirectToSignIn();
  });

document
  .getElementById("signUpLink")
  .addEventListener("click", function (event) {
    event.preventDefault();
    redirectToSignUp();
  });

function showForgotPasswordForm() {
  document.getElementById("signinForm").style.display = "none";
  document.getElementById("signupForm").style.display = "none";
  document.getElementById("forgotPasswordForm").style.display = "block";
}

document
  .getElementById("forgotPasswordLink")
  .addEventListener("click", function (event) {
    event.preventDefault();
    showForgotPasswordForm();
  });

function resetPassword() {
  var emailInput = document.getElementById("forgotEmailInput").value;

  var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  if (!emailRegex.test(emailInput)) {
    var errorMessage = document.getElementById("forgotEmailErrorMessage");
    errorMessage.textContent = "Invalid email address";
    errorMessage.style.color = "red";
    errorMessage.style.marginLeft = "8px";
  } else {
    var errorMessage = document.getElementById("forgotEmailErrorMessage");
    errorMessage.textContent = "";
  }
}
