document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");
    const signupForm = document.getElementById("signup-form");

    // Validation for Login Form
    if (loginForm) {
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault(); // Prevent form submission

            const username = document.getElementById("username").value.trim();
            const password = document.getElementById("password").value.trim();
            const errorMessage = document.getElementById("error-message");

            // Clear previous error message
            errorMessage.textContent = "";

            if (!username || !password) {
                errorMessage.textContent = "Username and password are required!";
                errorMessage.style.color = "red";
                return;
            }

            console.log("Login successful for user:", username);
            // Redirect or proceed with further login actions
        });
    }

    // Validation for Signup Form
    if (signupForm) {
        signupForm.addEventListener("submit", function (e) {
            e.preventDefault(); // Prevent form submission

            const firstName = document.getElementById("firstname").value.trim();
            const lastName = document.getElementById("lastname").value.trim();
            const email = document.getElementById("email").value.trim();
            const username = document.getElementById("username").value.trim();
            const password = document.getElementById("password").value.trim();
            const recaptchaResponse = grecaptcha.getResponse(); // Get reCAPTCHA response
            const errorMessage = document.getElementById("error-message");

            // Clear previous error message
            errorMessage.textContent = "";

            if (!firstName || !lastName || !email || !username || !password) {
                errorMessage.textContent = "All fields are required!";
                errorMessage.style.color = "red";
                return;
            }

            // Validate email format
            const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
            if (!emailRegex.test(email)) {
                errorMessage.textContent = "Please enter a valid email address!";
                errorMessage.style.color = "red";
                return;
            }

            // Validate password length
            if (password.length < 6) {
                errorMessage.textContent = "Password must be at least 6 characters long!";
                errorMessage.style.color = "red";
                return;
            }

            // Check if reCAPTCHA is completed
            if (!recaptchaResponse) {
                errorMessage.textContent = "Please complete the reCAPTCHA!";
                errorMessage.style.color = "red";
                return;
            }

            console.log("Signup successful for user:", username);
            // Proceed with signup actions (e.g., redirect, etc.)
        });
    }
});
