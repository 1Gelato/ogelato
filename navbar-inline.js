// navbar-inline.js - Version corrigée pour conflit hover/mobile
(function() {
    'use strict';
    
    if (window.ogelatoNavbarLoaded) {
        console.log('Navbar already loaded, skipping...');
        return;
    }
    window.ogelatoNavbarLoaded = true;
    
    console.log('Loading O\'Gelato Navbar v2.1...');
    
    // Injecter le CSS
    const navbarCSS = `
        <style id="navbar-inline-css">
        :root {
            --fraise: #E84A5F;
            --fraise-light: #FF6B7A;
            --dark: #3D2C29;
            --shadow-soft: 0 10px 40px rgba(61, 44, 41, 0.08);
            --radius-xl: 48px;
            --radius-lg: 32px;
        }
        
        * {
            box-sizing: border-box;
        }
        
        header {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            z-index: 1000;
            padding: 1rem 2rem;
            transition: all 0.4s ease;
            background: rgba(255, 255, 255, 0.98);
        }
        
        header.scrolled {
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(20px);
            box-shadow: var(--shadow-soft);
        }
        
        nav {
            max-width: 1400px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .logo {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            text-decoration: none;
            color: var(--dark);
            z-index: 1001;
        }
        
        .logo-icon {
            width: 50px;
            height: 50px;
            background: linear-gradient(135deg, var(--fraise) 0%, var(--fraise-light) 100%);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5rem;
            color: white;
            box-shadow: 0 4px 15px rgba(255, 107, 107, 0.4);
            transition: transform 0.3s ease;
        }
        
        .logo:hover .logo-icon {
            transform: scale(1.1) rotate(10deg);
        }
        
        .logo-text {
            font-family: 'Playfair Display', serif;
            font-size: 1.8rem;
            font-weight: 700;
            background: linear-gradient(135deg, var(--fraise) 0%, var(--fraise-light) 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }
        
        .nav-links {
            display: flex;
            align-items: center;
            gap: 2.5rem;
            list-style: none;
            margin: 0;
            padding: 0;
        }
        
        .nav-link {
            color: var(--dark);
            text-decoration: none;
            font-weight: 500;
            font-size: 1rem;
            position: relative;
            padding: 0.5rem 0;
            transition: color 0.3s ease;
        }
        
        .nav-link::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 0;
            height: 2px;
            background: linear-gradient(90deg, var(--fraise), var(--fraise-light));
            transition: width 0.3s ease;
        }
        
        .nav-link:hover {
            color: var(--fraise);
        }
        
        .nav-link:hover::after {
            width: 100%;
        }
        
        .nav-dropdown {
            position: relative;
        }
        
        .dropdown-trigger {
            color: var(--dark);
            text-decoration: none;
            font-weight: 500;
            font-size: 1rem;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.5rem 0;
            cursor: pointer;
            transition: color 0.3s ease;
        }
        
        .dropdown-trigger:hover {
            color: var(--fraise);
        }
        
        .dropdown-arrow {
            font-size: 0.7rem;
            transition: transform 0.3s ease;
        }
        
        .dropdown-menu {
            position: absolute;
            top: 100%;
            left: 50%;
            transform: translateX(-50%);
            min-width: 280px;
            background: white;
            border-radius: var(--radius-lg);
            box-shadow: 0 25px 60px rgba(61, 44, 41, 0.15);
            padding: 1.5rem;
            display: none;
            grid-template-columns: 1fr;
            gap: 0.5rem;
            opacity: 0;
            visibility: hidden;
            transition: opacity 0.3s ease, visibility 0.3s ease;
            z-index: 1000;
        }
        
        .dropdown-menu.show {
            display: grid;
            opacity: 1;
            visibility: visible;
        }
        
        /* HOVER UNIQUEMENT SUR DESKTOP (>992px) */
        @media (min-width: 993px) {
            .nav-dropdown:hover .dropdown-menu {
                display: grid;
                opacity: 1;
                visibility: visible;
            }
            
            .nav-dropdown:hover .dropdown-arrow {
                transform: rotate(180deg);
            }
        }
        
        .dropdown-section {
            padding-bottom: 0.75rem;
            margin-bottom: 0.75rem;
            border-bottom: 1px solid rgba(232, 74, 95, 0.1);
        }
        
        .dropdown-section:last-child {
            border-bottom: none;
            padding-bottom: 0;
            margin-bottom: 0;
        }
        
        .dropdown-title {
            font-size: 0.75rem;
            text-transform: uppercase;
            letter-spacing: 1px;
            color: var(--fraise);
            margin: 0 0 0.75rem 0;
            font-weight: 600;
        }
        
        .dropdown-item {
            display: block;
            color: var(--dark);
            text-decoration: none;
            padding: 0.5rem 0.75rem;
            border-radius: 8px;
            transition: all 0.2s ease;
            font-size: 0.95rem;
        }
        
        .dropdown-item:hover {
            color: var(--fraise);
            background: rgba(255, 107, 107, 0.1);
            padding-left: 1rem;
        }
        
        .dropdown-highlight {
            color: var(--fraise) !important;
            font-weight: 600 !important;
        }
        
        .nav-dropdown:first-child .dropdown-menu {
            min-width: 500px;
            grid-template-columns: repeat(3, 1fr);
        }
        
        .nav-promo {
            color: var(--fraise) !important;
        }
        
        .btn-nav {
            background: linear-gradient(135deg, var(--fraise) 0%, var(--fraise-light) 100%);
            color: white !important;
            padding: 0.75rem 1.5rem;
            border-radius: var(--radius-xl);
            text-decoration: none;
            font-weight: 600;
            transition: all 0.3s ease;
            box-shadow: 0 4px 15px rgba(255, 107, 107, 0.4);
        }
        
        .btn-nav:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(255, 107, 107, 0.5);
        }
        
        .mobile-toggle {
            display: none;
            flex-direction: column;
            gap: 5px;
            cursor: pointer;
            padding: 10px;
            z-index: 1001;
            background: none;
            border: none;
        }
        
        .mobile-toggle span {
            width: 25px;
            height: 3px;
            background: var(--dark);
            border-radius: 3px;
            transition: all 0.3s ease;
        }
        
        .mobile-toggle.active span:nth-child(1) {
            transform: rotate(45deg) translate(6px, 6px);
        }
        
        .mobile-toggle.active span:nth-child(2) {
            opacity: 0;
        }
        
        .mobile-toggle.active span:nth-child(3) {
            transform: rotate(-45deg) translate(6px, -6px);
        }
        
        /* ==================== */
        /* STYLES MOBILE        */
        /* ==================== */
        @media (max-width: 992px) {
            header {
                padding: 0.75rem 1rem;
            }
            
            .mobile-toggle {
                display: flex;
            }
            
            .nav-links {
                display: none;
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: white;
                flex-direction: column;
                padding: 80px 1.5rem 2rem;
                gap: 0;
                overflow-y: auto;
                -webkit-overflow-scrolling: touch;
                z-index: 999;
            }
            
            .nav-links.active {
                display: flex;
            }
            
            .nav-links > li {
                width: 100%;
                border-bottom: 1px solid rgba(0,0,0,0.05);
            }
            
            .nav-link,
            .dropdown-trigger {
                display: flex;
                width: 100%;
                padding: 1rem 0;
                font-size: 1.1rem;
                justify-content: space-between;
            }
            
            .nav-link::after {
                display: none;
            }
            
            /* DROPDOWN MOBILE */
            .nav-dropdown {
                width: 100%;
            }
            
            .dropdown-menu {
                position: static !important;
                transform: none !important;
                min-width: 100% !important;
                width: 100% !important;
                box-shadow: none;
                border-radius: 0;
                padding: 0 0 1rem 0;
                margin: 0;
                background: #fafafa;
                /* IMPORTANT: Caché par défaut sur mobile */
                display: none !important;
                opacity: 1;
                visibility: visible;
                grid-template-columns: 1fr !important;
            }
            
            /* Quand ouvert sur mobile via JS */
            .dropdown-menu.mobile-open {
                display: block !important;
            }
            
            .dropdown-section {
                padding: 0.75rem 1rem;
                margin: 0;
                border-bottom: none;
            }
            
            .dropdown-title {
                font-size: 0.7rem;
                margin-bottom: 0.5rem;
            }
            
            .dropdown-item {
                padding: 0.6rem 0.5rem;
                font-size: 0.95rem;
            }
            
            .dropdown-arrow {
                font-size: 0.8rem;
                transition: transform 0.3s ease;
            }
            
            .dropdown-arrow.rotated {
                transform: rotate(180deg);
            }
            
            /* Désactiver complètement le hover sur mobile */
            .nav-dropdown:hover .dropdown-menu {
                display: none !important;
            }
            
            .dropdown-menu.mobile-open {
                display: block !important;
            }
            
            /* Bouton contact mobile */
            .btn-nav {
                display: block;
                text-align: center;
                margin-top: 1rem;
            }
            
            /* Premier dropdown (Machines Glaces) - colonnes sur mobile */
            .nav-dropdown:first-child .dropdown-menu {
                min-width: 100% !important;
                grid-template-columns: 1fr !important;
            }
        }
        
        /* Très petits écrans */
        @media (max-width: 380px) {
            .logo-text {
                font-size: 1.4rem;
            }
            
            .logo-icon {
                width: 40px;
                height: 40px;
                font-size: 1.2rem;
            }
        }
        </style>
    `;
    
    const navbarHTML = `
    <header id="header">
        <nav>
            <a href="index.html" class="logo">
                <div class="logo-icon">🍦</div>
                <span class="logo-text">O'Gelato</span>
            </a>
            <ul class="nav-links" id="navLinks">
                <li class="nav-dropdown">
                    <a href="machines-glaces.html" class="dropdown-trigger">Machines Glaces <span class="dropdown-arrow">▼</span></a>
                    <div class="dropdown-menu glass-dropdown">
                        <div class="dropdown-section">
                            <h4 class="dropdown-title">Verticales 3 Manettes</h4>
                            <a href="tutto-gelato-3.html" class="dropdown-item">Tutto Gelato 3</a>
                            <a href="tutto-gelato-3-plus.html" class="dropdown-item">Tutto Gelato 3+</a>
                            <a href="tutto-gelato-4.html" class="dropdown-item">Tutto Gelato 4</a>
                        </div>
                        <div class="dropdown-section">
                            <h4 class="dropdown-title">Comptoir 3 Manettes</h4>
                            <a href="tutto-gelato-2.html" class="dropdown-item">Tutto Gelato 2</a>
                            <a href="tutto-gelato-2-plus.html" class="dropdown-item">Tutto Gelato 2+</a>
                            <a href="kion-2-comptoir.html" class="dropdown-item">KION 2 Comptoir</a>
                        </div>
                        <div class="dropdown-section">
                            <h4 class="dropdown-title">Sundae / Yaourt</h4>
                            <a href="tutto-gelato-1.html" class="dropdown-item">Tutto Gelato 1</a>
                            <a href="tutto-gelato-1-plus.html" class="dropdown-item">Tutto Gelato 1+</a>
                            <a href="tutto-gelato-auto.html" class="dropdown-item">Tutto Gelato Auto</a>
                        </div>
                        <div class="dropdown-section">
                            <h4 class="dropdown-title">Voir tout</h4>
                            <a href="machines-glaces.html" class="dropdown-item dropdown-highlight">→ Toutes les machines</a>
                        </div>
                    </div>
                </li>
                <li class="nav-dropdown">
                    <a href="machines-granites.html" class="dropdown-trigger">Machines Granités <span class="dropdown-arrow">▼</span></a>
                    <div class="dropdown-menu">
                        <div class="dropdown-section">
                            <h4 class="dropdown-title">Machines Granités</h4>
                            <a href="fc-1-plus.html" class="dropdown-item">FC 1+</a>
                            <a href="fc-2-plus.html" class="dropdown-item">FC 2+</a>
                            <a href="fc-3-plus.html" class="dropdown-item">FC 3+</a>
                        </div>
                        <div class="dropdown-section">
                            <a href="machines-granites.html" class="dropdown-item dropdown-highlight">→ Toutes les machines</a>
                        </div>
                    </div>
                </li>
                <li><a href="location.html" class="nav-link nav-promo">📍 Location</a></li>
                <li><a href="occasions.html" class="nav-link">Occasions</a></li>
                <li><a href="actualites.html" class="nav-link">Actualités</a></li>
                <li><a href="a-propos.html" class="nav-link">À Propos</a></li>
                <li><a href="contact.html" class="btn-nav">Contact</a></li>
            </ul>
            <button class="mobile-toggle" id="mobileToggle" aria-label="Menu">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </nav>
    </header>
    `;
    
    // Injecter le CSS et le HTML
    document.head.insertAdjacentHTML('afterbegin', navbarCSS);
    document.body.insertAdjacentHTML('afterbegin', navbarHTML);
    
    // Fonctions
    function initScrollEffect() {
        const header = document.getElementById('header');
        if (!header) return;
        
        let lastScroll = 0;
        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;
            if (currentScroll > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
            lastScroll = currentScroll;
        }, { passive: true });
    }
    
    function isMobile() {
        return window.innerWidth <= 992;
    }
    
    function closeAllDropdowns() {
        document.querySelectorAll('.dropdown-menu').forEach(menu => {
            menu.classList.remove('mobile-open');
            menu.classList.remove('show');
        });
        document.querySelectorAll('.dropdown-arrow').forEach(arrow => {
            arrow.classList.remove('rotated');
        });
    }
    
    function initDropdowns() {
        const dropdownTriggers = document.querySelectorAll('.dropdown-trigger');
        
        dropdownTriggers.forEach(trigger => {
            const parentLi = trigger.closest('.nav-dropdown');
            if (!parentLi) return;
            
            const dropdownMenu = parentLi.querySelector('.dropdown-menu');
            const arrow = trigger.querySelector('.dropdown-arrow');
            if (!dropdownMenu) return;
            
            // GESTION DU CLIC (pour mobile ET desktop)
            trigger.addEventListener('click', (e) => {
                // Sur mobile : toggle le dropdown
                if (isMobile()) {
                    e.preventDefault();
                    e.stopPropagation();
                    
                    const isOpen = dropdownMenu.classList.contains('mobile-open');
                    
                    // Fermer tous les autres
                    closeAllDropdowns();
                    
                    // Toggle celui-ci
                    if (!isOpen) {
                        dropdownMenu.classList.add('mobile-open');
                        if (arrow) arrow.classList.add('rotated');
                    }
                }
                // Sur desktop : laisser le lien fonctionner normalement
            });
            
            // GESTION DU HOVER (uniquement desktop)
            // Le hover est géré en CSS via @media (min-width: 993px)
            // Pas besoin de JavaScript pour le hover desktop
        });
        
        // Fermer les dropdowns en cliquant ailleurs
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.nav-dropdown')) {
                closeAllDropdowns();
            }
        });
    }
    
    function initMobileMenu() {
        const mobileToggle = document.getElementById('mobileToggle');
        const navLinks = document.getElementById('navLinks');
        
        if (mobileToggle && navLinks) {
            mobileToggle.addEventListener('click', (e) => {
                e.stopPropagation();
                mobileToggle.classList.toggle('active');
                navLinks.classList.toggle('active');
                
                // Fermer tous les dropdowns quand on ouvre/ferme le menu
                closeAllDropdowns();
                
                // Empêcher le scroll du body quand le menu est ouvert
                document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
            });
        }
        
        // Fermer le menu mobile quand on clique sur un lien simple (pas dropdown)
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                if (isMobile() && navLinks) {
                    navLinks.classList.remove('active');
                    mobileToggle?.classList.remove('active');
                    document.body.style.overflow = '';
                }
            });
        });
        
        // Gérer le redimensionnement
        window.addEventListener('resize', () => {
            if (!isMobile()) {
                // Réinitialiser l'état quand on passe en desktop
                closeAllDropdowns();
                if (navLinks) navLinks.classList.remove('active');
                if (mobileToggle) mobileToggle.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
    
    // Initialisation
    function init() {
        initScrollEffect();
        initDropdowns();
        initMobileMenu();
        console.log('O\'Gelato Navbar v2.1 initialized!');
    }
    
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
