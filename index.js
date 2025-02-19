document.addEventListener("DOMContentLoaded", function () {
    // Dark Mode Toggle
    const themeToggle = document.createElement("button");
    themeToggle.class = "theme-toggle";
    themeToggle.textContent = "🌙 Dark Mode";
    document.querySelector("header .container").appendChild(themeToggle);

    themeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
        if (document.body.classList.contains("dark-mode")) {
            themeToggle.textContent = "☀️ Light Mode";
        } else {
            themeToggle.textContent = "🌙 Dark Mode";
        }
    });
        
    }
);
