document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission

    // Simulate a successful login
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
});