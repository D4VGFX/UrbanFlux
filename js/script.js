document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    document.body.appendChild(overlay);

    // Aggiungi icone hamburger e chiudi
    menuToggle.innerHTML = `
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
    `;

    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        overlay.classList.toggle('active');
        document.body.classList.toggle('no-scroll');
        
        // Animazione hamburger a X
        this.classList.toggle('active');
    });

    // Chiudi menu cliccando sull'overlay
    overlay.addEventListener('click', function() {
        navLinks.classList.remove('active');
        this.classList.remove('active');
        document.body.classList.remove('no-scroll');
        menuToggle.classList.remove('active');
    });

    // Chiudi menu quando si clicca su un link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function() {
            navLinks.classList.remove('active');
            overlay.classList.remove('active');
            document.body.classList.remove('no-scroll');
            menuToggle.classList.remove('active');
        });
    });

    // Aggiungi stili per il no-scroll
    const style = document.createElement('style');
    style.textContent = `
        body.no-scroll {
            overflow: hidden;
            position: fixed;
            width: 100%;
        }
        
        .hamburger-line {
            display: block;
            width: 25px;
            height: 3px;
            background-color: white;
            margin: 4px 0;
            transition: all 0.3s ease;
        }
        
        .menu-toggle.active .hamburger-line:nth-child(1) {
            transform: translateY(7px) rotate(45deg);
        }
        
        .menu-toggle.active .hamburger-line:nth-child(2) {
            opacity: 0;
        }
        
        .menu-toggle.active .hamburger-line:nth-child(3) {
            transform: translateY(-7px) rotate(-45deg);
        }
    `;
    document.head.appendChild(style);

    // Resto del tuo codice JavaScript...
});