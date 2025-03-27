/* =============================
📌 Signup Form Validation & Redirect to Sign In (signup.js)
============================= */

document.addEventListener("DOMContentLoaded", () => {
    const signupForm = document.getElementById("signup-form");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirm-password");

    signupForm.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const password = passwordInput.value;
        const confirmPassword = confirmPasswordInput.value;
        
        if (!validateName(name)) {
            alert("Please enter a valid name (at least 3 characters)");
            return;
        }
        if (!validateEmail(email)) {
            alert("Please enter a valid email address");
            return;
        }
        if (!validatePassword(password)) {
            alert("Password must be at least 8 characters long, include a number, an uppercase letter, and a special character");
            return;
        }
        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }
        
        alert("Signup successful! Redirecting to Sign In page...");
        setTimeout(() => {
            window.location.href = "../public/Login.html";
        }, 1000);
    });
});

function validateName(name) {
    return name.length >= 3;
}

function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function validatePassword(password) {
    const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordPattern.test(password);
}
