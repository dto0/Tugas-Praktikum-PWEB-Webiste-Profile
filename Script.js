function smoothScroll(targetId) {
    event.preventDefault();

    const target = document.getElementById(targetId);
    const navbarHeight = document.querySelector("nav").offsetHeight;
    const offset = 20;
    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight - offset;

    window.scrollTo({
        top: targetPosition,
        behavior: "smooth"
    });
}

document.getElementById("homeLink").addEventListener("click", function (event) {
    smoothScroll("hero");
});

document.getElementById("aboutMeLink").addEventListener("click", function (event) {
    smoothScroll("aboutMeSection");
});

document.getElementById("skillsLink").addEventListener("click", function (event) {
    smoothScroll("skillsSection");
});

document.getElementById("linkhardskills").addEventListener("click", function (event) {
    smoothScroll("skillsSection");
});

document.getElementById("linksoftskills").addEventListener("click", function (event) {
    smoothScroll("SoftskillsSection");
});

document.getElementById("contactLink").addEventListener("click", function (event) {
    smoothScroll("contactSection");
});




document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.createElement("button");
    toggleButton.id = "mode-toggle";
    toggleButton.innerText = "🌙";
    document.body.appendChild(toggleButton);

    toggleButton.style.position = "fixed";
    toggleButton.style.top = "20px";
    toggleButton.style.right = "20px";
    toggleButton.style.padding = "10px 15px";
    toggleButton.style.border = "none";
    toggleButton.style.borderRadius = "8px";
    toggleButton.style.cursor = "pointer";
    toggleButton.style.fontSize = "16px";
    toggleButton.style.backgroundColor = "#5E3B76";
    toggleButton.style.color = "white";
    toggleButton.style.zIndex = "1000";
    toggleButton.style.boxShadow = "0px 4px 8px rgba(0, 0, 0, 0.2)";
    toggleButton.style.transition = "background 0.3s ease";

    const isDarkMode = localStorage.getItem("darkMode") === "enabled";
    if (isDarkMode) {
        enableDarkMode();
    }

    toggleButton.addEventListener("click", function () {
        alert("Mengubah mode")
        if (document.body.classList.contains("dark-mode")) {
            disableDarkMode();
        } else {
            enableDarkMode();
        }
    });

    function enableDarkMode() {
        document.body.classList.add("dark-mode");
        localStorage.setItem("darkMode", "enabled");
        toggleButton.innerText = "☀️";
        toggleButton.style.backgroundColor = "#F9F9F9";
        toggleButton.style.color = "#333";
    }

    function disableDarkMode() {
        document.body.classList.remove("dark-mode");
        localStorage.setItem("darkMode", "disabled");
        toggleButton.innerText = "🌙";
        toggleButton.style.backgroundColor = "#5E3B76";
        toggleButton.style.color = "white";
    }
});
