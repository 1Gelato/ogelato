// navbar-inline.js - Version corrigée pour mobile
(function() {
    'use strict';
    
    // Vérifier si déjà chargé pour éviter les doublons
    if (window.ogelatoNavbarLoaded) {
        console.log('Navbar already loaded, skipping...');
        return;
    }
    window.ogelatoNavbarLoaded = true;
    
    console.log('Loading O\'Gelato Navbar...');
    
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
            gap: 2rem;
            list-style: none;
            align-items: center;
            margin: 0;
            padding: 0;
        }
        
        .nav-links > li {
            display: flex;
            align-items: center;
        }
        
        .nav-links a {
            text-decoration: none;
            color: var(--dark);
            font-weight: 500;
            font-size: 0.95rem;
            position: relative;
            padding: 0.5rem 0;
            transition: color 0.3s ease;
            display: flex;
            align-items: center;
        }
        
        .nav-links a::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 0;
            height: 3px;
            background: var(--fraise);
            border-radius: 2px;
            transition: width 0.3s ease;
        }
        
        .nav-links a:hover {
            color: var(--fraise);
        }
        
        .nav-links a:hover::after {
            width: 100%;
        }
        
        .nav-cta {
            background: linear-gradient(135deg, var(--fraise) 0%, var(--fraise-light) 100%);
            color: white !important;
            padding: 0.75rem 1.5rem !important;
            border-radius: var(--radius-xl);
            font-weight: 600 !important;
            box-shadow: 0 4px 15px rgba(255, 107, 107, 0.3);
            transition: all 0.3s ease !important;
            white-space: nowrap;
        }
        
        .nav-cta::after {
            display: none !important;
        }
        
        .nav-cta:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(255, 107, 107, 0.4);
        }
        
        .mobile-toggle {
            display: none;
            flex-direction: column;
            gap: 5px;
            background: none;
            border: none;
            cursor: pointer;
            padding: 5px;
            z-index: 1001;
        }
        
        .mobile-toggle span {
            width: 25px;
            height: 3px;
            background: var(--dark);
            border-radius: 2px;
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
        
        /* Dropdown Desktop */
        .nav-dropdown {
            position: relative;
        }
        
        .dropdown-trigger {
            display: flex;
            align-items: center;
            gap: 0.3rem;
            cursor: pointer;
        }
        
        .dropdown-arrow {
            font-size: 0.6rem;
            transition: transform 0.3s ease;
            display: inline-block;
        }
        
        .dropdown-menu {
            position: absolute;
            top: 100%;
            left: 50%;
            transform: translateX(-50%) translateY(10px);
            min-width: 280px;
            padding: 1.5rem;
            opacity: 0;
            visibility: hidden;
            pointer-events: none;
            transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
            z-index: 1000;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
            background: rgba(255, 255, 255, 0.98);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.5);
            border-radius: var(--radius-lg);
            box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15), 0 10px 20px rgba(0, 0, 0, 0.1);
        }
        
        /* Desktop hover */
        @media (min-width: 769px) {
            .nav-dropdown:hover .dropdown-menu {
                opacity: 1;
                visibility: visible;
                pointer-events: auto;
                transform: translateX(-50%) translateY(0);
            }
            
            .nav-dropdown:hover .dropdown-arrow {
                transform: rotate(180deg);
            }
        }
        
        .dropdown-section {
            padding: 0.5rem 0;
        }
        
        .dropdown-title {
            font-size: 0.7rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            color: var(--fraise);
            margin-bottom: 0.75rem;
            padding-bottom: 0.5rem;
            border-bottom: 2px solid rgba(255, 107, 107, 0.2);
        }
        
        .dropdown-item {
            display: block;
            padding: 0.4rem 0.5rem;
            color: var(--dark);
            text-decoration: none;
            font-size: 0.9rem;
            font-weight: 500;
            transition: all 0.2s ease;
            border-radius: 6px;
            margin-left: -0.5rem;
            margin-right: -0.5rem;
        }
        
        .dropdown-item:hover {
            color: var(--fraise);
            background: rgba(255, 107, 107, 0.1);
            padding-left: 1rem;
        }
        
        .dropdown-item::after {
            display: none !important;
        }
        
        .dropdown-highlight {
            color: var(--fraise) !important;
            font-weight: 600 !important;
        }
        
        /* Premier dropdown plus large (machines glaces) */
        .nav-dropdown:first-child .dropdown-menu {
            min-width: 500px;
            grid-template-columns: repeat(3, 1fr);
        }
        
        .nav-promo {
            color: var(--fraise) !important;
        }
        
        /* ========== MOBILE STYLES ========== */
        @media (max-width: 768px) {
            header {
                padding: 0.75rem 1rem;
            }
            
            .logo-text {
                font-size: 1.4rem;
            }
            
            .logo-icon {
                width: 40px;
                height: 40px;
                font-size: 1.2rem;
            }
            
            .mobile-toggle {
                display: flex;
            }
            
            .nav-links {
                display: none;
                position: fixed;
                top: 70px;
                left: 0;
                right: 0;
                bottom: 0;
                background: white;
                flex-direction: column;
                padding: 0;
                gap: 0;
                overflow-y: auto;
                -webkit-overflow-scrolling: touch;
                align-items: stretch;
                z-index: 999;
            }
            
            .nav-links.active {
                display: flex;
            }
            
            .nav-links > li {
                width: 100%;
                flex-direction: column;
                align-items: stretch;
                border-bottom: 1px solid rgba(0, 0, 0, 0.08);
            }
            
            .nav-links > li:last-child {
                border-bottom: none;
                padding: 1rem;
            }
            
            .nav-links > li > a {
                padding: 1rem 1.5rem;
                font-size: 1rem;
                display: flex;
                justify-content: space-between;
                align-items: center;
                width: 100%;
                box-sizing: border-box;
            }
            
            .nav-links > li > a::after {
                display: none;
            }
            
            /* Dropdown Mobile */
            .nav-dropdown {
                width: 100%;
            }
            
            .dropdown-trigger {
                width: 100%;
                justify-content: space-between;
                padding: 1rem 1.5rem;
            }
            
            .dropdown-arrow {
                font-size: 0.8rem;
                margin-left: auto;
            }
            
            .nav-dropdown.mobile-open .dropdown-arrow {
                transform: rotate(180deg);
            }
            
            .dropdown-menu {
                position: static;
                transform: none;
                width: 100%;
                min-width: 100% !important;
                max-width: 100%;
                opacity: 1;
                visibility: visible;
                pointer-events: auto;
                display: none;
                padding: 0 1rem 1rem 1rem;
                margin: 0;
                grid-template-columns: 1fr !important;
                gap: 0.5rem;
                background: #f8f8f8;
                border-radius: 0;
                box-shadow: inset 0 2px 10px rgba(0, 0, 0, 0.05);
                border: none;
            }
            
            .nav-dropdown.mobile-open .dropdown-menu {
                display: block;
            }
            
            .dropdown-section {
                padding: 0.75rem 0;
                border-bottom: 1px solid rgba(0, 0, 0, 0.05);
            }
            
            .dropdown-section:last-child {
                border-bottom: none;
            }
            
            .dropdown-title {
                font-size: 0.75rem;
                margin-bottom: 0.5rem;
                padding-bottom: 0.25rem;
                color: var(--fraise);
                font-weight: 700;
            }
            
            .dropdown-item {
                padding: 0.6rem 0.75rem;
                margin: 0.25rem 0;
                font-size: 0.95rem;
                display: block;
                background: white;
                border-radius: 8px;
            }
            
            .dropdown-item:hover,
            .dropdown-item:active {
                padding-left: 1rem;
                background: rgba(255, 107, 107, 0.1);
            }
            
            .nav-cta {
                width: 100%;
                text-align: center;
                padding: 1rem !important;
                margin: 0;
            }
        }
        
        /* Fix pour très petits écrans */
        @media (max-width: 380px) {
            header {
                padding: 0.5rem 0.75rem;
            }
            
            .logo-text {
                font-size: 1.2rem;
            }
            
            .logo-icon {
                width: 35px;
                height: 35px;
                font-size: 1rem;
            }
            
            .nav-links {
                top: 60px;
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
                <li class="nav-dropdown" data-dropdown="machines-glaces">
                    <a href="machines-glaces.html" class="dropdown-trigger">Machines Glaces <span class="dropdown-arrow">▼</span></a>
                    <div class="dropdown-menu">
                        <div class="dropdown-section">
                            <h4 class="dropdown-title">Verticales 3 Manettes</h4>
                            <a href="produits/tutto-gelato-3.html" class="dropdown-item">Tutto Gelato 3</a>
                            <a href="produits/tutto-gelato-3-plus.html" class="dropdown-item">Tutto Gelato 3+</a>
                            <a href="produits/tutto-gelato-4.html" class="dropdown-item">Tutto Gelato 4</a>
                        </div>
                        <div class="dropdown-section">
                            <h4 class="dropdown-title">Comptoir 3 Manettes</h4>
                            <a href="produits/tutto-gelato-2.html" class="dropdown-item">Tutto Gelato 2</a>
                            <a href="produits/tutto-gelato-2-plus.html" class="dropdown-item">Tutto Gelato 2+</a>
                            <a href="produits/kion-2-comptoir.html" class="dropdown-item">KION 2 Comptoir</a>
                        </div>
                        <div class="dropdown-section">
                            <h4 class="dropdown-title">Sundae / Yaourt</h4>
                            <a href="produits/tutto-gelato-1.html" class="dropdown-item">Tutto Gelato 1</a>
                            <a href="produits/tutto-gelato-1-plus.html" class="dropdown-item">Tutto Gelato 1+</a>
                            <a href="produits/tutto-gelato-auto.html" class="dropdown-item">Tutto Gelato Auto</a>
                        </div>
                        <div class="dropdown-section">
                            <h4 class="dropdown-title">Voir tout</h4>
                            <a href="machines-glaces.html" class="dropdown-item dropdown-highlight">→ Toutes les machines</a>
                        </div>
                    </div>
                </li>
                <li class="nav-dropdown" data-dropdown="machines-granites">
                    <a href="machines-granites.html" class="dropdown-trigger">Machines Granités <span class="dropdown-arrow">▼</span></a>
                    <div class="dropdown-menu">
                        <div class="dropdown-section">
                            <h4 class="dropdown-title">Machines Granités</h4>
                            <a href="produits/fc1.html" class="dropdown-item">FC1 (1 Bac)</a>
                            <a href="produits/fc2.html" class="dropdown-item">FC2 (2 Bacs)</a>
                            <a href="produits/fc3.html" class="dropdown-item">FC3 (3 Bacs)</a>
                        </div>
                        <div class="dropdown-section">
                            <h4 class="dropdown-title">Consommables</h4>
                            <a href="consommables-granites.html" class="dropdown-item">Sirops & Préparations</a>
                        </div>
                        <div class="dropdown-section">
                            <h4 class="dropdown-title">Voir tout</h4>
                            <a href="machines-granites.html" class="dropdown-item dropdown-highlight">→ Toutes les machines</a>
                        </div>
                    </div>
                </li>
                <li><a href="index.html#location">Location Machines</a></li>
                <li><a href="index.html#vitrines">Vitrines</a></li>
                <li><a href="machines-cuisson.html">Matériel Cuisson</a></li>
                <li class="nav-dropdown" data-dropdown="occasions">
                    <a href="occasions-glaciers.html" class="dropdown-trigger nav-promo">Occasions / Promotions <span class="dropdown-arrow">▼</span></a>
                    <div class="dropdown-menu">
                        <div class="dropdown-section">
                            <h4 class="dropdown-title">Occasions</h4>
                            <a href="occasions-glaciers.html" class="dropdown-item">Matériels Glaciers</a>
                            <a href="machines-cuisson.html" class="dropdown-item">Matériel Cuisson</a>
                        </div>
                    </div>
                </li>
                <li><a href="index.html#contact" class="nav-cta">Contact</a></li>
            </ul>
            <button class="mobile-toggle" id="mobileToggle" aria-label="Menu">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </nav>
    </header>
    `;

    function adjustLinks() {
        const currentPath = window.location.pathname;
        const isInProductsFolder = currentPath.includes('/produits/');
        
        if (isInProductsFolder) {
            const header = document.getElementById('header');
            if (header) {
                const links = header.querySelectorAll('a[href]');
                links.forEach(link => {
                    let href = link.getAttribute('href');
                    if (href && !href.startsWith('http') && !href.startsWith('#') && !href.startsWith('../')) {
                        if (href.startsWith('index.html')) {
                            link.setAttribute('href', '../' + href);
                        } else if (href.startsWith('machines-') || href.startsWith('occasions-') || href.startsWith('consommables-')) {
                            link.setAttribute('href', '../' + href);
                        } else if (href.startsWith('produits/')) {
                            link.setAttribute('href', href.replace('produits/', ''));
                        }
                    }
                });
            }
        }
    }

    function isMobile() {
        return window.innerWidth <= 768;
    }

    function initMobileDropdowns() {
        const dropdowns = document.querySelectorAll('.nav-dropdown');
        
        dropdowns.forEach(dropdown => {
            const trigger = dropdown.querySelector('.dropdown-trigger');
            
            if (trigger) {
                // Supprimer les anciens event listeners en clonant
                const newTrigger = trigger.cloneNode(true);
                trigger.parentNode.replaceChild(newTrigger, trigger);
                
                newTrigger.addEventListener('click', function(e) {
                    if (isMobile()) {
                        e.preventDefault();
                        e.stopPropagation();
                        
                        const wasOpen = dropdown.classList.contains('mobile-open');
                        
                        // Fermer tous les autres dropdowns
                        dropdowns.forEach(d => {
                            if (d !== dropdown) {
                                d.classList.remove('mobile-open');
                            }
                        });
                        
                        // Toggle celui-ci
                        if (wasOpen) {
                            dropdown.classList.remove('mobile-open');
                        } else {
                            dropdown.classList.add('mobile-open');
                        }
                    }
                });
            }
        });
    }

    function initMobileMenu() {
        const mobileToggle = document.getElementById('mobileToggle');
        const navLinks = document.getElementById('navLinks');
        
        if (mobileToggle && navLinks) {
            // Supprimer les anciens event listeners
            const newToggle = mobileToggle.cloneNode(true);
            mobileToggle.parentNode.replaceChild(newToggle, mobileToggle);
            
            newToggle.addEventListener('click', function() {
                const isActive = navLinks.classList.contains('active');
                
                if (isActive) {
                    navLinks.classList.remove('active');
                    newToggle.classList.remove('active');
                    document.body.style.overflow = '';
                    
                    // Fermer tous les dropdowns
                    document.querySelectorAll('.nav-dropdown').forEach(d => {
                        d.classList.remove('mobile-open');
                    });
                } else {
                    navLinks.classList.add('active');
                    newToggle.classList.add('active');
                    document.body.style.overflow = 'hidden';
                }
            });
        }
    }

    function initScrollEffect() {
        const header = document.getElementById('header');
        
        if (!header) {
            console.warn('Header not found for scroll effect');
            return;
        }
        
        function checkScroll() {
            if (window.pageYOffset > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }
        
        window.addEventListener('scroll', checkScroll, { passive: true });
        checkScroll(); // Vérifier au chargement
    }

    // Fermer le menu mobile lors du redimensionnement
    function handleResize() {
        if (!isMobile()) {
            const navLinks = document.getElementById('navLinks');
            const mobileToggle = document.getElementById('mobileToggle');
            
            if (navLinks) {
                navLinks.classList.remove('active');
            }
            if (mobileToggle) {
                mobileToggle.classList.remove('active');
            }
            document.body.style.overflow = '';
            
            // Fermer tous les dropdowns mobile
            document.querySelectorAll('.nav-dropdown').forEach(d => {
                d.classList.remove('mobile-open');
            });
        }
    }

    function init() {
        console.log('Initializing navbar...');
        
        // Injecter le CSS
        if (!document.getElementById('navbar-inline-css')) {
            document.head.insertAdjacentHTML('beforeend', navbarCSS);
        }
        
        // Insérer la navbar
        if (!document.getElementById('header')) {
            document.body.insertAdjacentHTML('afterbegin', navbarHTML);
        }
        
        // Initialiser après un court délai pour s'assurer que le DOM est prêt
        setTimeout(() => {
            adjustLinks();
            initMobileDropdowns();
            initMobileMenu();
            initScrollEffect();
            
            // Écouter les changements de taille d'écran
            window.addEventListener('resize', handleResize);
            
            console.log('Navbar initialized successfully');
        }, 50);
    }

    // Initialiser quand le DOM est prêt
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
