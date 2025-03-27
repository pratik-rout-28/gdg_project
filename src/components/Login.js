/* =============================
📌 Login Form Validation & Redirect to Dashboard (login.js)
============================= */

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("login-form");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");

    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const email = emailInput.value.trim();
        const password = passwordInput.value;
        
        // Default email and password for login
        const defaultEmail = "test@example.com";
        const defaultPassword = "Password@123";
        
        if (email === defaultEmail && password === defaultPassword) {
            alert("Login successful! Redirecting to Dashboard...");
            setTimeout(() => {
                window.location.replace ("../public/Dashboard.html");
            }, 1000);
        } else {
            alert("Invalid email or password. Please try again.");
        }
    });
});
