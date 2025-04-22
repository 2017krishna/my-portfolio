document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById("dark-mode-toggle");
    const body = document.body;

    if (localStorage.getItem("darkMode") === "enabled") {
        body.classList.add("dark-mode");
    }

    toggleButton.addEventListener("click", () => {
        body.classList.toggle("dark-mode");
        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("darkMode", "enabled");
        } else {
            localStorage.setItem("darkMode", "disabled");
        }
    });

    const detailButtons = document.querySelectorAll(".toggle-details");
    detailButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const projectDetails = button.nextElementSibling;
            if (projectDetails.style.display === "none" || !projectDetails.style.display) {
                projectDetails.style.display = "block";
                button.textContent = "Hide Details";
            } else {
                projectDetails.style.display = "none";
                button.textContent = "Show Details";
            }
        });
    });

    const filterDropdown = document.getElementById("project-filter");
    const projects = document.querySelectorAll(".project");

    filterDropdown.addEventListener("change", () => {
        const selectedCategory = filterDropdown.value;

        projects.forEach((project) => {
            const category = project.getAttribute("data-category");

            if (selectedCategory === "all" || category === selectedCategory) {
                project.style.display = "block";
            } else {
                project.style.display = "none";
            }
        });
    });

    projects.forEach((project, index) => {
        project.style.animationDelay = `${index * 0.25}s`;
        project.style.opacity = '1';
    });

    const form = document.getElementById('contact-form');
    const errorMessage = document.getElementById('error-message');

    form.addEventListener('submit', (event) => {
        let valid = true;
        errorMessage.style.display = 'none';
        errorMessage.textContent = '';

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name === '') {
            valid = false;
            errorMessage.textContent += 'Name is required. ';
        }

        if (email === '') {
            valid = false;
            errorMessage.textContent += 'Email is required. ';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            valid = false;
            errorMessage.textContent += 'Email is invalid. ';
        }

        if (message === '') {
            valid = false;
            errorMessage.textContent += 'Message is required. ';
        }

        if (!valid) {
            errorMessage.style.display = 'block';
            event.preventDefault();
        }
    });
});