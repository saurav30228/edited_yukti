
// Mobile menu functionality
const mobileMenuButton = document.getElementById('mobile-menu-button');
const closeMenuButton = document.getElementById('close-menu');
const mobileMenu = document.getElementById('mobile-menu');

function toggleMenu() {
    mobileMenu.classList.toggle('active');
}

mobileMenuButton.addEventListener('click', toggleMenu);
closeMenuButton.addEventListener('click', toggleMenu);

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!mobileMenu.contains(e.target) && !mobileMenuButton.contains(e.target)) {
        mobileMenu.classList.remove('active');
    }
});

// Update copyright year dynamically
document.getElementById('current-year').textContent = new Date().getFullYear();

// Contact form and WhatsApp button handling
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    const whatsappButton = document.getElementById('whatsapp-send-button');

    function sendWhatsAppMessage() {
        // Get form data
        const name = document.getElementById('name').value.trim();
        const inquiry = document.getElementById('inquiry').value.trim();

        // Basic validation
        if (!name || !inquiry) {
            alert('Please fill in all fields before sending a message.');
            return;
        }

        // Format WhatsApp message
        const whatsappMessage = encodeURIComponent(
            `*New Inquiry from Website*

` +
            `*Name:* ${name}
` +
            `*Inquiry:*
${inquiry}`
        );

        // Create WhatsApp link
        const whatsappLink = `https://wa.me/9779869812491?text=${whatsappMessage}`;

        // Open WhatsApp in a new tab
        window.open(whatsappLink, '_blank');

        // Optional: Alert the user
        alert('You will be redirected to WhatsApp to send your message.');
    }

    // Event listener for the form submission
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            sendWhatsAppMessage();
            this.reset(); // Reset form after submission
        });
    }

    // Event listener for WhatsApp button click
    if (whatsappButton) {
        whatsappButton.addEventListener('click', sendWhatsAppMessage);
    }
});
