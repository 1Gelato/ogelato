// navbar.js - Navbar O'Gelato réutilisable
(function() {
    'use strict';
    
    // HTML de la navbar
    const navbarHTML = `
    <header id="header">
        <nav>
            <a href="index.html" class="logo">
                <div class="logo-icon">🍦</div>
                <span class="logo-text">O'Gelato</span>
            </a>
            <ul class="nav-links" id="navLinks">
                <li class="nav-dropdown">
                    <a href="produits/machines-glaces.html" class="dropdown-trigger">Machines Glaces <span class="dropdown-arrow">▼</span></a>
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
                            <h4 class="dropdown-title">Voir tout</h4>
                            <a href="produits/machines-glaces.html" class="dropdown-item dropdown-highlight">→ Toutes les machines</a>
                        </div>
                    </div>
                </li>
                <li class="nav-dropdown">
                    <a href="produits/machines-granites.html" class="dropdown-trigger">Machines Granités <span class="dropdown-arrow">▼</span></a>
                    <div class="dropdown-menu glass-dropdown">
                        <div class="dropdown-section">
                            <h4 class="dropdown-title">Machines Granités</h4>
                            <a href="produits/fc1.html" class="dropdown-item">FC1 (1 Bac)</a>
                            <a href="produits/fc2.html" class="dropdown-item">FC2 (2 Bacs)</a>
                            <a href="produits/fc3.html" class="dropdown-item">FC3 (3 Bacs)</a>
                        </div>
                        <div class="dropdown-section">
                            <h4 class="dropdown-title">Consommables</h4>
                            <a href="produits/consommables-granites.html" class="dropdown-item">Sirops & Préparations</a>
                        </div>
                        <div class="dropdown-section">
                            <h4 class="dropdown-title">Voir tout</h4>
                            <a href="produits/machines-granites.html" class="dropdown-item dropdown-highlight">→ Toutes les machines</a>
                        </div>
                    </div>
                </li>
                <li><a href="index.html#location">Location Machines</a></li>
                <li><a href="index.html#vitrines">Vitrines</a></li>
                <li><a href="produits/machines-cuisson.html">Matériel Cuisson</a></li>
                <li class="nav-dropdown">
                    <a href="produits/occasions-glaciers.html" class="dropdown-trigger nav-promo">Occasions / Promotions <span class="dropdown-arrow">▼</span></a>
                    <div class="dropdown-menu glass-dropdown">
                        <div class="dropdown-section">
                            <h4 class="dropdown-title">Occasions</h4>
                            <a href="produits/occasions-glaciers.html" class="dropdown-item">Matériels Glaciers</a>
                            <a href="produits/machines-cuisson.html" class="dropdown-item">Matériel Cuisson</a>
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

    // Fonction pour ajuster les liens selon la page actuelle
    function adjustLinks() {
        const currentPath = window.location.pathname;
        const isInProductsFolder = currentPath.includes('/produits/');
        
        // Si on est dans le dossier produits, ajuster les liens
        if (isInProductsFolder) {
            const header = document.getElementById('header');
            if (header) {
                // Remplacer tous les liens vers index.html par ../index.html
                header.innerHTML = header.innerHTML.replace(/href="index\.html/g, 'href="../index.html');
                // Les liens vers produits/ deviennent juste le nom du fichier
                header.innerHTML = header.innerHTML.replace(/href="produits\//g, 'href="');
            }
        }
    }

    // Fonction pour initialiser les dropdowns
    function initDropdowns() {
        const dropdownTriggers = document.querySelectorAll('.dropdown-trigger');
        
        dropdownTriggers.forEach(trigger => {
            const parentLi = trigger.closest('.nav-dropdown');
            const dropdownMenu = parentLi.querySelector('.dropdown-menu');
            
            // Desktop hover
            parentLi.addEventListener('mouseenter', () => {
                dropdownMenu.style.display = 'grid';
                setTimeout(() => dropdownMenu.classList.add('active'), 10);
            });
            
            parentLi.addEventListener('mouseleave', () => {
                dropdownMenu.classList.remove('active');
                setTimeout(() => dropdownMenu.style.display = 'none', 300);
            });
            
            // Mobile click
            trigger.addEventListener('click', (e) => {
                if (window.innerWidth <= 992) {
                    e.preventDefault();
                    const isActive = dropdownMenu.classList.contains('active');
                    
                    // Fermer tous les autres dropdowns
                    document.querySelectorAll('.dropdown-menu').forEach(menu => {
                        menu.classList.remove('active');
                        menu.style.display = 'none';
                    });
                    
                    if (!isActive) {
                        dropdownMenu.style.display = 'grid';
                        setTimeout(() => dropdownMenu.classList.add('active'), 10);
                    }
                }
            });
        });
    }

    // Fonction pour le menu mobile
    function initMobileMenu() {
        const mobileToggle = document.getElementById('mobileToggle');
        const navLinks = document.getElementById('navLinks');
        
        if (mobileToggle && navLinks) {
            mobileToggle.addEventListener('click', () => {
                mobileToggle.classList.toggle('active');
                navLinks.classList.toggle('active');
                document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
            });
        }
    }

    // Fonction pour le scroll effect
    function initScrollEffect() {
        const header = document.getElementById('header');
        let lastScroll = 0;
        
        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;
            
            if (currentScroll > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
            
            lastScroll = currentScroll;
        });
    }

    // Initialisation au chargement du DOM
    document.addEventListener('DOMContentLoaded', function() {
        // Insérer la navbar au début du body
        document.body.insertAdjacentHTML('afterbegin', navbarHTML);
        
        // Ajuster les liens selon la page
        adjustLinks();
        
        // Initialiser les fonctionnalités
        initDropdowns();
        initMobileMenu();
        initScrollEffect();
    });
})();
