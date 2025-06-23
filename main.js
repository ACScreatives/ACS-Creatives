// This file contains functionality for the videography website, including form validation and interactive elements.

document.addEventListener('DOMContentLoaded', function() {
    // Example of form validation for the contact form
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            if (!name || !email || !message) {
                event.preventDefault();
                alert('Please fill in all fields.');
            } else {
                alert('Thank you for your message!');
            }
        });
    }

    // Example of a simple interactive element
    const videoThumbnails = document.querySelectorAll('.video-thumbnail');
    videoThumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            const videoSrc = this.getAttribute('data-video-src');
            const videoModal = document.getElementById('video-modal');
            const videoElement = document.getElementById('video-player');

            videoElement.src = videoSrc;
            videoModal.style.display = 'block';
        });
    });

    // Close video modal
    const closeModal = document.getElementById('close-modal');
    if (closeModal) {
        closeModal.addEventListener('click', function() {
            const videoModal = document.getElementById('video-modal');
            const videoElement = document.getElementById('video-player');

            videoElement.src = '';
            videoModal.style.display = 'none';
        });
    }
});