document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.toggle-details');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const details = button.nextElementSibling;
            if (details.style.display === 'none') {
                details.style.display = 'block';
                button.textContent = 'Hide Details';
            } else {
                details.style.display = 'none';
                button.textContent = 'Show Details';
            }
        });
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