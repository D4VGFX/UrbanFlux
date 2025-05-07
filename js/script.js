document.addEventListener('DOMContentLoaded', function() {
    // Menu mobile (per versioni future)
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if(menuToggle) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }

    // Animazioni al scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.product-card, .feature');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if(elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };

    // Inizializza elementi con animazione
    const animatedElements = document.querySelectorAll('.product-card, .feature');
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'all 0.6s ease';
    });

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Esegui una volta al caricamento

    // Gestione form di contatto
    const contactForm = document.querySelector('.contact-form');
    if(contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Grazie per il tuo messaggio! Ti risponderemo al più presto.');
            this.reset();
        });
    }

    // Aggiorna anno nel footer
    document.getElementById('current-year').textContent = new Date().getFullYear();
});