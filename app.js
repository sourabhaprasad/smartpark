document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', function(event) {
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');

        if (nameInput.value === '' || emailInput.value === '' || messageInput.value === '') {
            alert('Please fill out all fields');
            event.preventDefault(); // 
        }
    });
});


