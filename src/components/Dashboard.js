/* =============================
📌 Interactive Dashboard JavaScript (dashboard.js) with Dark Mode & Background Image
============================= */

document.addEventListener("DOMContentLoaded", () => {
    const logoutBtn = document.getElementById("logout-btn");
    const cards = document.querySelectorAll(".card");
    const darkModeToggle = document.createElement("button");
    darkModeToggle.innerText = "Toggle Dark Mode";
    darkModeToggle.id = "dark-mode-toggle";
    document.body.appendChild(darkModeToggle);

    // Apply background image
    document.body.style.backgroundImage = "url('C:\Users\oindr\OneDrive\Desktop\Gender-Equality-Tech-Solution\frontend\assets\background.jpg')";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.transition = "background 0.5s ease";

    // Smooth Navigation to Other Pages
    function navigateTo(page) {
        document.body.style.opacity = "0";
        setTimeout(() => {
            window.location.href = page;
        }, 500);
    }

    cards.forEach(card => {
        card.addEventListener("click", () => {
            const page = card.getAttribute("onclick").split("'")[1];
            navigateTo(page);
        });
    });

    // Logout Functionality
    logoutBtn.addEventListener("click", () => {
        alert("Logging out...");
        setTimeout(() => {
            window.location.href = "login.html";
        }, 500);
    });

    // Smooth Page Load Transition
    document.body.style.opacity = "0";
    setTimeout(() => {
        document.body.style.opacity = "1";
    }, 300);

    // Dark Mode Toggle
    darkModeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });

    // Dynamic Light Glow Effect
    document.body.addEventListener("mousemove", (e) => {
        const glow = document.createElement("div");
        glow.classList.add("glow-effect");
        glow.style.left = `${e.clientX}px`;
        glow.style.top = `${e.clientY}px`;
        document.body.appendChild(glow);
        setTimeout(() => glow.remove(), 500);
    });
});
