document.getElementById("signupForm")?.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const city = document.getElementById("city").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const error = document.getElementById("signupError");

  error.textContent = "";

  // EMAIL VALIDATION
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    error.textContent = "Please enter a valid email address";
    return;
  }

  // PHONE NUMBER VALIDATION 
  if (!/^\d{10}$/.test(phone)) {
    error.textContent = "Phone number must contain exactly 10 digits";
    return;
  }

  // CITY VALIDATION 
  if (!/^[A-Za-z ]+$/.test(city)) {
    error.textContent = "City must contain only alphabets";
    return;
  }

  // PASSWORD VALIDATION 
  const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  if (!passwordPattern.test(password)) {
    error.textContent =
      "Password must be at least 8 characters and include letters and numbers";
    return;
  }

  // CONFIRM PASSWORD MATCH
  if (password !== confirmPassword) {
    error.textContent = "Passwords do not match";
    return;
  }

  // STORE USER DATA
  localStorage.setItem("user", JSON.stringify({ email, password }));

  alert("Signup successful! Please login.");
  window.location.href = "https://noel-anto.github.io/Travel/";
//   window.location.href = "https://noel-anto.github.io/Travel/"
});
