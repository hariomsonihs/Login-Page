document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const signInButton = document.querySelector('button');

    if (!email || !password) {
        // Add funny animation to the button
        signInButton.style.position = 'relative';
        signInButton.style.animation = 'shake 0.5s ease-in-out';

        // Show a message on the screen
        const message = document.createElement('div');
        message.classList.add('error-message');
        message.textContent = 'Fill the details before!';
        document.querySelector('.login-box').appendChild(message);

        // Remove the message after 2 seconds
        setTimeout(() => {
            message.remove();
        }, 2000);

        // Remove the shake animation after it ends
        signInButton.addEventListener('animationend', () => {
            signInButton.style.animation = '';
        });
    } else {
        // Simulate successful login
        const successMessage = document.createElement('div');
        successMessage.classList.add('success-message');
        successMessage.innerHTML = `<i class="fas fa-check-circle"></i> Sign In Successful!`;
        document.querySelector('.login-box').appendChild(successMessage);

        // Show the success message
        successMessage.style.display = 'block';

        // Reset the form after 2 seconds
        setTimeout(() => {
            successMessage.style.display = 'none';
            document.querySelector('form').reset();
        }, 2000);
    }
});