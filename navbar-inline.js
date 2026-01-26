// Navbar HTML and functionality
document.addEventListener('DOMContentLoaded', function() {
    // Détection automatique du chemin relatif
    const currentPath = window.location.pathname;
    const isInSubfolder = currentPath.includes('/produits/');
    const pathPrefix = isInSubfolder ? '../' : '';
    
    // Insert navbar HTML at the start of body
    const navbarHTML = `
    <style>
        /* Header */
        header {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            z-index: 1000;
            padding: 1rem 2rem;
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(20px);
            box-shadow: 0 10px 40px rgba(61, 44, 41, 0.08);
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
            background: linear-gradient(135deg, #E84A5F 0%, #FF6B7A 100%);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5rem;
        }

        .logo-text {
            font-family: 'Playfair Display', serif;
            font-size: 1.8rem;
            font-weight: 700;
            background: linear-gradient(135deg, #E84A5F 0%, #FF6B7A 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
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
            transition: color 0.3s;
            display: flex;
            align-items: center;
        }

        .nav-links a:hover { color: #E84A5F; }

        .nav-cta {
            background: linear-gradient(135deg, #E84A5F 0%, #FF6B7A 100%);
            color: white !important;
            padding: 0.75rem 1.5rem;
            border-radius: 48px;
            font-weight: 600;
            white-space: nowrap;
        }

        /* Dropdown Menu */
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

        .glass-dropdown {
            background: rgba(255, 255, 255, 0.85);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.5);
            border-radius: 32px;
            box-shadow: 
                0 25px 50px rgba(0, 0, 0, 0.15),
                0 10px 20px rgba(0, 0, 0, 0.1);
        }

        .nav-dropdown:hover .dropdown-menu {
            opacity: 1;
            visibility: visible;
            transform: translateX(-50%) translateY(0);
        }

        .dropdown-section {
            padding: 0.5rem 0;
        }

        .dropdown-title {
            font-size: 0.7rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            color: #E84A5F;
            margin-bottom: 0.75rem;
            padding-bottom: 0.5rem;
            border-bottom: 2px solid rgba(232, 74, 95, 0.2);
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
        }

        .dropdown-item:hover {
            color: #E84A5F;
            background: rgba(232, 74, 95, 0.1);
            padding-left: 1rem;
        }

        .nav-dropdown:first-child .dropdown-menu {
            min-width: 500px;
            grid-template-columns: repeat(3, 1fr);
        }

        .mobile-toggle {
            display: none;
            flex-direction: column;
            gap: 0.25rem;
            cursor: pointer;
            padding: 0.5rem;
        }

        .mobile-toggle span {
            width: 25px;
            height: 3px;
            background: var(--dark);
            border-radius: 3px;
            transition: all 0.3s ease;
        }

        @media (max-width: 768px) {
            .nav-links {
                display: none;
                position: absolute;
                top: 100%;
                left: 0;
                right: 0;
                background: white;
                flex-direction: column;
                padding: 2rem;
                gap: 1.5rem;
                box-shadow: 0 20px 60px rgba(61, 44, 41, 0.15);
            }

            .nav-links.active {
                display: flex;
            }

            .mobile-toggle {
                display: flex;
            }

            .nav-dropdown {
                width: 100%;
            }

            .dropdown-menu {
                position: static;
                transform: none;
                min-width: 100% !important;
                opacity: 1;
                visibility: visible;
                display: none;
                padding: 1rem;
                margin-top: 0.5rem;
                grid-template-columns: 1fr !important;
            }

            .nav-dropdown.active .dropdown-menu {
                display: grid;
            }

            .nav-dropdown:hover .dropdown-menu {
                opacity: 0;
                visibility: hidden;
            }

            .nav-dropdown.active .dropdown-menu {
                opacity: 1;
                visibility: visible;
            }

            .glass-dropdown {
                background: rgba(255, 255, 255, 0.95);
                border-radius: 20px;
            }
        }
    </style>

    <header>
        <nav>
            <a href="${pathPrefix}index.html" class="logo">
                <div class="logo-icon">🍦</div>
                <span class="logo-text">O'Gelato</span>
            </a>
            
            <ul class="nav-links">
                <li class="nav-dropdown">
                    <a href="#" class="dropdown-trigger">
                        Machines Glaces
                        <span class="dropdown-arrow">▼</span>
                    </a>
                    <div class="dropdown-menu glass-dropdown">
                        <div class="dropdown-section">
                            <div class="dropdown-title">Verticales 3 Manettes</div>
                            <a href="${pathPrefix}produits/tutto-gelato-3.html" class="dropdown-item">Tutto Gelato 3</a>
                            <a href="${pathPrefix}produits/tutto-gelato-3-plus.html" class="dropdown-item">Tutto Gelato 3+</a>
                            <a href="${pathPrefix}produits/tutto-gelato-4.html" class="dropdown-item">Tutto Gelato 4</a>
                        </div>
                        <div class="dropdown-section">
                            <div class="dropdown-title">Comptoir 3 Manettes</div>
                            <a href="${pathPrefix}produits/tutto-gelato-2.html" class="dropdown-item">Tutto Gelato 2</a>
                            <a href="${pathPrefix}produits/tutto-gelato-2-plus.html" class="dropdown-item">Tutto Gelato 2+</a>
                            <a href="${pathPrefix}produits/kion-2-comptoir.html" class="dropdown-item">KION 2 Comptoir</a>
                        </div>
                        <div class="dropdown-section">
                            <div class="dropdown-title">Sundae / Yaourt</div>
                            <a href="${pathPrefix}produits/tutto-gelato-1.html" class="dropdown-item">Tutto Gelato 1</a>
                            <a href="${pathPrefix}produits/tutto-gelato-1-plus.html" class="dropdown-item">Tutto Gelato 1+</a>
                            <a href="${pathPrefix}produits/tutto-gelato-auto.html" class="dropdown-item">Tutto Gelato Auto</a>
                        </div>
                        <div class="dropdown-section" style="grid-column: 1 / -1; border-top: 2px solid rgba(232, 74, 95, 0.1); padding-top: 1rem; margin-top: 0.5rem;">
                            <div class="dropdown-title">Voir Tout</div>
                            <a href="${pathPrefix}produits/machines-glaces.html" class="dropdown-item" style="color: #E84A5F; font-weight: 600;">→ Toutes les machines</a>
                        </div>
                    </div>
                </li>
                <li class="nav-dropdown">
                    <a href="#" class="dropdown-trigger">
                        Machines Granités
                        <span class="dropdown-arrow">▼</span>
                    </a>
                    <div class="dropdown-menu glass-dropdown">
                        <div class="dropdown-section">
                            <div class="dropdown-title">Gamme FC</div>
                            <a href="${pathPrefix}produits/fc1.html" class="dropdown-item">FC1 - 1 Bac</a>
                            <a href="${pathPrefix}produits/fc2.html" class="dropdown-item">FC2 - 2 Bacs</a>
                            <a href="${pathPrefix}produits/fc3.html" class="dropdown-item">FC3 - 3 Bacs</a>
                        </div>
                        <div class="dropdown-section">
                            <div class="dropdown-title">Voir Tout</div>
                            <a href="${pathPrefix}produits/machines-granites.html" class="dropdown-item" style="color: #E84A5F; font-weight: 600;">→ Toutes les machines</a>
                        </div>
                    </div>
                </li>
                <li><a href="${pathPrefix}produits/location.html">Location Machines</a></li>
                <li><a href="${pathPrefix}produits/vitrines.html">Vitrines</a></li>
                <li><a href="${pathPrefix}produits/materiel-cuisson.html">Matériel Cuisson</a></li>
                <li><a href="${pathPrefix}produits/occasions-promotions.html">Occasions / Promotions</a></li>
                <li><a href="${pathPrefix}index.html#contact" class="nav-cta">Contact</a></li>
            </ul>

            <div class="mobile-toggle">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>
    </header>
    `;

    // Insert navbar
    document.body.insertAdjacentHTML('afterbegin', navbarHTML);

    // Mobile menu toggle
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navLinks = document.querySelector('.nav-links');
    const dropdownTriggers = document.querySelectorAll('.dropdown-trigger');

    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Mobile dropdown toggle
    dropdownTriggers.forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                const dropdown = trigger.closest('.nav-dropdown');
                dropdown.classList.toggle('active');
            }
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('nav') && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
        }
    });
});

    <style>
        /* Header */
        header {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            z-index: 1000;
            padding: 1rem 2rem;
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(20px);
            box-shadow: 0 10px 40px rgba(61, 44, 41, 0.08);
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
            background: linear-gradient(135deg, #E84A5F 0%, #FF6B7A 100%);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5rem;
        }

        .logo-text {
            font-family: 'Playfair Display', serif;
            font-size: 1.8rem;
            font-weight: 700;
            background: linear-gradient(135deg, #E84A5F 0%, #FF6B7A 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
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
            transition: color 0.3s;
            display: flex;
            align-items: center;
        }

        .nav-links a:hover { color: #E84A5F; }

        .nav-cta {
            background: linear-gradient(135deg, #E84A5F 0%, #FF6B7A 100%);
            color: white !important;
            padding: 0.75rem 1.5rem;
            border-radius: 48px;
            font-weight: 600;
            white-space: nowrap;
        }

        /* Dropdown Menu */
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

        .glass-dropdown {
            background: rgba(255, 255, 255, 0.85);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.5);
            border-radius: 32px;
            box-shadow: 
                0 25px 50px rgba(0, 0, 0, 0.15),
                0 10px 20px rgba(0, 0, 0, 0.1);
        }

        .nav-dropdown:hover .dropdown-menu {
            opacity: 1;
            visibility: visible;
            transform: translateX(-50%) translateY(0);
        }

        .dropdown-section {
            padding: 0.5rem 0;
        }

        .dropdown-title {
            font-size: 0.7rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            color: #E84A5F;
            margin-bottom: 0.75rem;
            padding-bottom: 0.5rem;
            border-bottom: 2px solid rgba(232, 74, 95, 0.2);
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
        }

        .dropdown-item:hover {
            color: #E84A5F;
            background: rgba(232, 74, 95, 0.1);
            padding-left: 1rem;
        }

        .nav-dropdown:first-child .dropdown-menu {
            min-width: 500px;
            grid-template-columns: repeat(3, 1fr);
        }

        .mobile-toggle {
            display: none;
            flex-direction: column;
            gap: 0.25rem;
            cursor: pointer;
            padding: 0.5rem;
        }

        .mobile-toggle span {
            width: 25px;
            height: 3px;
            background: var(--dark);
            border-radius: 3px;
            transition: all 0.3s ease;
        }

        @media (max-width: 768px) {
            .nav-links {
                display: none;
                position: absolute;
                top: 100%;
                left: 0;
                right: 0;
                background: white;
                flex-direction: column;
                padding: 2rem;
                gap: 1.5rem;
                box-shadow: 0 20px 60px rgba(61, 44, 41, 0.15);
            }

            .nav-links.active {
                display: flex;
            }

            .mobile-toggle {
                display: flex;
            }

            .nav-dropdown {
                width: 100%;
            }

            .dropdown-menu {
                position: static;
                transform: none;
                min-width: 100% !important;
                opacity: 1;
                visibility: visible;
                display: none;
                padding: 1rem;
                margin-top: 0.5rem;
                grid-template-columns: 1fr !important;
            }

            .nav-dropdown.active .dropdown-menu {
                display: grid;
            }

            .nav-dropdown:hover .dropdown-menu {
                opacity: 0;
                visibility: hidden;
            }

            .nav-dropdown.active .dropdown-menu {
                opacity: 1;
                visibility: visible;
            }

            .glass-dropdown {
                background: rgba(255, 255, 255, 0.95);
                border-radius: 20px;
            }
        }
    </style>

    <header>
        <nav>
            <a href="index.html" class="logo">
                <div class="logo-icon">🍦</div>
                <span class="logo-text">O'Gelato</span>
            </a>
            
            <ul class="nav-links">
                <li class="nav-dropdown">
                    <a href="#" class="dropdown-trigger">
                        Machines Glaces
                        <span class="dropdown-arrow">▼</span>
                    </a>
                    <div class="dropdown-menu glass-dropdown">
                        <div class="dropdown-section">
                            <div class="dropdown-title">Verticales 3 Manettes</div>
                            <a href="produits/tutto-gelato-3.html" class="dropdown-item">Tutto Gelato 3</a>
                            <a href="produits/tutto-gelato-3-plus.html" class="dropdown-item">Tutto Gelato 3+</a>
                            <a href="produits/tutto-gelato-4.html" class="dropdown-item">Tutto Gelato 4</a>
                        </div>
                        <div class="dropdown-section">
                            <div class="dropdown-title">Comptoir 3 Manettes</div>
                            <a href="produits/tutto-gelato-2.html" class="dropdown-item">Tutto Gelato 2</a>
                            <a href="produits/tutto-gelato-2-plus.html" class="dropdown-item">Tutto Gelato 2+</a>
                            <a href="produits/kion-2-comptoir.html" class="dropdown-item">KION 2 Comptoir</a>
                        </div>
                        <div class="dropdown-section">
                            <div class="dropdown-title">Sundae / Yaourt</div>
                            <a href="produits/tutto-gelato-1.html" class="dropdown-item">Tutto Gelato 1</a>
                            <a href="produits/tutto-gelato-1-plus.html" class="dropdown-item">Tutto Gelato 1+</a>
                            <a href="produits/tutto-gelato-auto.html" class="dropdown-item">Tutto Gelato Auto</a>
                        </div>
                        <div class="dropdown-section" style="grid-column: 1 / -1; border-top: 2px solid rgba(232, 74, 95, 0.1); padding-top: 1rem; margin-top: 0.5rem;">
                            <div class="dropdown-title">Voir Tout</div>
                            <a href="produits/machines-glaces.html" class="dropdown-item" style="color: #E84A5F; font-weight: 600;">→ Toutes les machines</a>
                        </div>
                    </div>
                </li>
                <li class="nav-dropdown">
                    <a href="#" class="dropdown-trigger">
                        Machines Granités
                        <span class="dropdown-arrow">▼</span>
                    </a>
                    <div class="dropdown-menu glass-dropdown">
                        <div class="dropdown-section">
                            <div class="dropdown-title">Gamme FC</div>
                            <a href="produits/fc1.html" class="dropdown-item">FC1 - 1 Bac</a>
                            <a href="produits/fc2.html" class="dropdown-item">FC2 - 2 Bacs</a>
                            <a href="produits/fc3.html" class="dropdown-item">FC3 - 3 Bacs</a>
                        </div>
                        <div class="dropdown-section">
                            <div class="dropdown-title">Voir Tout</div>
                            <a href="produits/machines-granites.html" class="dropdown-item" style="color: #E84A5F; font-weight: 600;">→ Toutes les machines</a>
                        </div>
                    </div>
                </li>
                <li><a href="produits/location.html">Location Machines</a></li>
                <li><a href="produits/vitrines.html">Vitrines</a></li>
                <li><a href="produits/materiel-cuisson.html">Matériel Cuisson</a></li>
                <li><a href="produits/occasions-promotions.html">Occasions / Promotions</a></li>
                <li><a href="#contact" class="nav-cta">Contact</a></li>
            </ul>

            <div class="mobile-toggle">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>
    </header>
    `;

    // Insert navbar
    document.body.insertAdjacentHTML('afterbegin', navbarHTML);

    // Mobile menu toggle
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navLinks = document.querySelector('.nav-links');
    const dropdownTriggers = document.querySelectorAll('.dropdown-trigger');

    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Mobile dropdown toggle
    dropdownTriggers.forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                const dropdown = trigger.closest('.nav-dropdown');
                dropdown.classList.toggle('active');
            }
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('nav') && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
        }
    });
});
