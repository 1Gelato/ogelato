// navbar-inline.js - Version robuste
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
        }
        
        .mobile-toggle span {
            width: 25px;
            height: 3px;
            background: var(--dark);
            border-radius: 2px;
            transition: all 0.3s ease;
        }
        
        .mobile-toggle.active span:nth-child(1) {
            transform: rotate(45deg) translate(8px, 8px);
        }
        
        .mobile-toggle.active span:nth-child(2) {
            opacity: 0;
        }
        
        .mobile-toggle.active span:nth-child(3) {
            transform: rotate(-45deg) translate(7px, -7px);
        }
        
        .nav-dropdown {
            position: relative;
        }
        
        .dropdown-trigger {
            display: flex;
            align-items: center;
            gap: 0.3rem;
        }
        
        .dropdown-arrow {
            font-size: 0.6rem;
            transition: transform 0.3s ease;
        }
        
        .nav-dropdown:hover .dropdown-arrow {
            transform: rotate(180deg);
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
            transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
            z-index: 1000;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
        }
        
        .dropdown-menu.active {
            opacity: 1;
            visibility: visible;
            transform: translateX(-50%) translateY(0);
        }
        
        .glass-dropdown {
            background: rgba(255, 255, 255, 0.85);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.5);
            border-radius: var(--radius-lg);
            box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15), 0 10px 20px rgba(0, 0, 0, 0.1);
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
        
        .nav-dropdown:first-child .dropdown-menu {
            min-width: 650px;
            grid-template-columns: repeat(4, 1fr);
        }
        
        .nav-promo {
            color: var(--fraise) !important;
        }
        
        @media (max-width: 768px) {
            header {
                padding: 0.75rem 1.5rem;
            }
            
            /* Désactiver le hover sur mobile */
            .nav-dropdown:hover .dropdown-menu {
                opacity: 0 !important;
                visibility: hidden !important;
                transform: translateX(-50%) translateY(10px) !important;
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
                padding-top: 90px;
                padding-left: 1.5rem;
                padding-right: 1.5rem;
                padding-bottom: 1.5rem;
                gap: 0;
                box-shadow: 0 15px 35px rgba(61, 44, 41, 0.15);
                overflow-y: auto;
                align-items: stretch;
                z-index: 999;
            }
            
            .nav-links > li {
                width: 100%;
                border-bottom: 1px solid rgba(0,0,0,0.05);
            }
            
            .nav-links > li:last-child {
                border-bottom: none;
                margin-top: 1rem;
            }
            
            .nav-links a {
                padding: 1rem 0;
                font-size: 1rem;
                display: block;
            }
            
            .nav-links.active {
                display: flex;
            }
            
            .mobile-toggle {
                display: flex;
                z-index: 1001;
            }
            
            .nav-dropdown {
                width: 100%;
            }
            
            .dropdown-trigger {
                width: 100%;
                justify-content: space-between;
            }
            
            .dropdown-arrow {
                transition: transform 0.3s ease;
            }
            
            .nav-dropdown.active .dropdown-arrow {
                transform: rotate(180deg);
            }
            
            .dropdown-menu {
                position: static !important;
                transform: none !important;
                width: 100% !important;
                max-width: 100% !important;
                min-width: 100% !important;
                opacity: 1 !important;
                visibility: visible !important;
                display: none;
                padding: 1rem;
                margin: 0.5rem 0 0 0;
                grid-template-columns: 1fr !important;
                gap: 0.75rem;
                background: rgba(232, 74, 95, 0.03);
                border-radius: 8px;
                box-sizing: border-box;
            }
            
            .dropdown-menu.active {
                display: grid !important;
            }
            
            .dropdown-section {
                padding: 0.5rem 0;
                width: 100%;
            }
            
            .dropdown-title {
                font-size: 0.75rem;
                margin-bottom: 0.5rem;
                padding-bottom: 0.25rem;
                color: var(--fraise);
                font-weight: 700;
            }
            
            .dropdown-item {
                padding: 0.75rem;
                margin: 0;
                font-size: 0.95rem;
                display: block;
                width: 100%;
                box-sizing: border-box;
                white-space: normal;
                word-wrap: break-word;
            }
            
            .dropdown-item:hover {
                padding-left: 1rem;
            }
            
            .nav-cta {
                width: 100%;
                text-align: center;
                padding: 1rem !important;
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
                            <h4 class="dropdown-title">Mix Glaces</h4>
                            <a href="produits/mix-ogelato.html" class="dropdown-item">Mix OGELATO</a>
                            <a href="produits/mix-sublimo.html" class="dropdown-item">Mix SUBLIMO</a>
                            <a href="produits/mix-ogelato-premium.html" class="dropdown-item">Mix OGELATO PREMIUM</a>
                        </div>
                        </div>
                        <div class="dropdown-section">
                            <h4 class="dropdown-title">Voir tout</h4>
                            <a href="machines-glaces.html" class="dropdown-item dropdown-highlight">→ Toutes les machines</a>
                            <a href="mix-glaces.html" class="dropdown-item dropdown-highlight">→ Tous nos mix</a>
                            <a href="cornets-glaces.html" class="dropdown-item dropdown-highlight">→ Tous nos cornets</a>
                        </div>
                    </div>
                </li>
                <li class="nav-dropdown">
                    <a href="machines-granites.html" class="dropdown-trigger">Machines Granités <span class="dropdown-arrow">▼</span></a>
                    <div class="dropdown-menu glass-dropdown">
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
                <li><a href="location-machines.html">Location Machines</a></li>
                <li class="nav-dropdown">
                    <a href="vitrines-glaces.html" class="dropdown-trigger">Vitrines <span class="dropdown-arrow">▼</span></a>
                    <div class="dropdown-menu glass-dropdown">
                        <div class="dropdown-section">
                            <h4 class="dropdown-title">Gamme Sublimo</h4>
                            <a href="produits/vitrine-sublimo-7-bacs.html" class="dropdown-item">Sublimo 7 Bacs</a>
                            <a href="produits/vitrine-sublimo-9-bacs.html" class="dropdown-item">Sublimo 9 Bacs</a>
                            <a href="produits/vitrine-sublimo-12-bacs.html" class="dropdown-item">Sublimo 12 Bacs</a>
                            <a href="produits/vitrine-sublimo-18-bacs.html" class="dropdown-item">Sublimo 18 Bacs</a>
                        </div>
                        <div class="dropdown-section">
                            <h4 class="dropdown-title">Voir tout</h4>
                            <a href="vitrines-glaces.html" class="dropdown-item dropdown-highlight">→ Toutes les vitrines</a>
                        </div>
                    </div>
                </li>
                <li><a href="machines-cuisson.html">Matériel Cuisson</a></li>
                <li class="nav-dropdown">
                    <a href="occasions-glaciers.html" class="dropdown-trigger nav-promo">Occasions / Promotions <span class="dropdown-arrow">▼</span></a>
                    <div class="dropdown-menu glass-dropdown">
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
                header.innerHTML = header.innerHTML.replace(/href="index\.html/g, 'href="../index.html');
                header.innerHTML = header.innerHTML.replace(/href="machines-glaces\.html"/g, 'href="../machines-glaces.html"');
                header.innerHTML = header.innerHTML.replace(/href="machines-granites\.html"/g, 'href="../machines-granites.html"');
                header.innerHTML = header.innerHTML.replace(/href="machines-cuisson\.html"/g, 'href="../machines-cuisson.html"');
                header.innerHTML = header.innerHTML.replace(/href="occasions-glaciers\.html"/g, 'href="../occasions-glaciers.html"');
                header.innerHTML = header.innerHTML.replace(/href="consommables-granites\.html"/g, 'href="../consommables-granites.html"');
                header.innerHTML = header.innerHTML.replace(/href="produits\//g, 'href="');
            }
        }
    }

    function initDropdowns() {
        const dropdownTriggers = document.querySelectorAll('.dropdown-trigger');
        
        dropdownTriggers.forEach(trigger => {
            const parentLi = trigger.closest('.nav-dropdown');
            if (!parentLi) return;
            
            const dropdownMenu = parentLi.querySelector('.dropdown-menu');
            if (!dropdownMenu) return;
            
            // Desktop uniquement: hover
            const handleMouseEnter = () => {
                if (window.innerWidth > 768) {
                    dropdownMenu.style.display = 'grid';
                    setTimeout(() => dropdownMenu.classList.add('active'), 10);
                }
            };
            
            const handleMouseLeave = () => {
                if (window.innerWidth > 768) {
                    dropdownMenu.classList.remove('active');
                    setTimeout(() => dropdownMenu.style.display = 'none', 300);
                }
            };
            
            parentLi.addEventListener('mouseenter', handleMouseEnter);
            parentLi.addEventListener('mouseleave', handleMouseLeave);
            
            // Mobile: click uniquement
            trigger.addEventListener('click', (e) => {
                if (window.innerWidth <= 768) {
                    e.preventDefault();
                    e.stopPropagation();
                    
                    // Toggle le parent
                    const wasActive = parentLi.classList.contains('active');
                    
                    // Fermer tous les autres dropdowns
                    document.querySelectorAll('.nav-dropdown').forEach(dropdown => {
                        dropdown.classList.remove('active');
                        const menu = dropdown.querySelector('.dropdown-menu');
                        if (menu) {
                            menu.classList.remove('active');
                            menu.style.display = 'none';
                        }
                    });
                    
                    // Toggle le dropdown actuel
                    if (!wasActive) {
                        parentLi.classList.add('active');
                        dropdownMenu.style.display = 'grid';
                        setTimeout(() => dropdownMenu.classList.add('active'), 10);
                    }
                }
            });
        });
    }

    function initMobileMenu() {
        const mobileToggle = document.getElementById('mobileToggle');
        const navLinks = document.getElementById('navLinks');
        
        if (mobileToggle && navLinks) {
            mobileToggle.addEventListener('click', () => {
                mobileToggle.classList.toggle('active');
                navLinks.classList.toggle('active');
                document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
                
                // Fermer tous les dropdowns quand on ouvre/ferme le menu
                if (navLinks.classList.contains('active')) {
                    // Menu qui s'ouvre : fermer tous les dropdowns
                    document.querySelectorAll('.nav-dropdown').forEach(dropdown => {
                        dropdown.classList.remove('active');
                        const menu = dropdown.querySelector('.dropdown-menu');
                        if (menu) {
                            menu.classList.remove('active');
                            menu.style.display = 'none';
                        }
                    });
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
        
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
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
        
        // Attendre que le DOM soit prêt
        requestAnimationFrame(() => {
            adjustLinks();
            initDropdowns();
            initMobileMenu();
            initScrollEffect();
            console.log('Navbar initialized successfully');
        });
    }

    // Initialiser quand le DOM est prêt
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
