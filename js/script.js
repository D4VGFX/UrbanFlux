document.addEventListener('DOMContentLoaded', function() {
    // Elementi UI
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    document.body.appendChild(overlay);

    // Inizializza hamburger menu
    menuToggle.innerHTML = `
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
    `;

    // Gestione click menu toggle
    menuToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
        overlay.classList.toggle('active');
        document.body.classList.toggle('menu-open');
    });

    // Chiudi menu cliccando sull'overlay
    overlay.addEventListener('click', closeMobileMenu);

    // Chiudi menu cliccando su un link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });

    // Funzione per chiudere il menu mobile
    function closeMobileMenu() {
        menuToggle.classList.remove('active');
        navLinks.classList.remove('active');
        overlay.classList.remove('active');
        document.body.classList.remove('menu-open');
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

    // Inizializza elementi animati
    const animatedElements = document.querySelectorAll('.product-card, .feature');
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'all 0.6s ease';
    });

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Esegui una volta al caricamento

    // Aggiorna anno nel footer
    const currentYear = document.getElementById('current-year');
    if(currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }
});