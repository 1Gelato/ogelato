// footer-inline.js - Footer O'Gelato avec CSS intégré
(function() {
    'use strict';
    
    // Injecter le CSS dans le head
    const footerCSS = `
        <style id="footer-inline-css">
        footer {
            background: #1a1f21;
            color: white;
            padding: 4rem 2rem 2rem;
        }
        
        .footer-content {
            max-width: 1200px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: 2fr 1fr 1fr 1fr;
            gap: 3rem;
            margin-bottom: 3rem;
        }
        
        .footer-brand .logo {
            color: white;
            margin-bottom: 1rem;
        }
        
        .footer-brand p {
            color: rgba(255,255,255,0.6);
            font-size: 0.95rem;
            line-height: 1.8;
        }
        
        .footer-social {
            display: flex;
            gap: 1rem;
            margin-top: 1.5rem;
        }
        
        .footer-social a {
            width: 40px;
            height: 40px;
            background: rgba(255,255,255,0.1);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            text-decoration: none;
            font-size: 1.1rem;
            transition: all 0.3s ease;
        }
        
        .footer-social a:hover {
            background: #E84A5F;
            transform: translateY(-3px);
        }
        
        .footer-col h4 {
            font-size: 1rem;
            font-weight: 600;
            margin-bottom: 1.5rem;
            color: white;
        }
        
        .footer-col ul {
            list-style: none;
        }
        
        .footer-col ul li {
            margin-bottom: 0.75rem;
        }
        
        .footer-col ul a {
            color: rgba(255,255,255,0.6);
            text-decoration: none;
            transition: color 0.3s ease;
            font-size: 0.95rem;
        }
        
        .footer-col ul a:hover {
            color: #E84A5F;
        }
        
        .footer-bottom {
            max-width: 1200px;
            margin: 0 auto;
            padding-top: 2rem;
            border-top: 1px solid rgba(255,255,255,0.1);
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 0.9rem;
            color: rgba(255,255,255,0.5);
        }
        
        @media (max-width: 992px) {
            .footer-content {
                grid-template-columns: 1fr 1fr;
                gap: 2rem;
            }
        }
        
        @media (max-width: 768px) {
            .footer-content {
                grid-template-columns: 1fr;
                text-align: center;
            }
            
            .footer-social {
                justify-content: center;
            }
            
            .footer-bottom {
                flex-direction: column;
                gap: 1rem;
                text-align: center;
            }
        }
        </style>
    `;
    
    const indexFooterHTML = `
    <footer>
        <div class="footer-content">
            <div class="footer-brand">
                <a href="#" class="logo">
                    <div class="logo-icon">🍦</div>
                    <span class="logo-text">O'Gelato</span>
                </a>
                <p>
                    Votre partenaire matériels glaciers et cuissons depuis 2010. 
                    Ventes, locations et maintenance sur le Grand Ouest et toute la France.
                </p>
                <div class="footer-social">
                    <a href="https://facebook.com/ogelato" aria-label="Suivez O'Gelato sur Facebook">📘</a>
                    <a href="https://instagram.com/ogelato" aria-label="Suivez O'Gelato sur Instagram">📷</a>
                    <a href="https://linkedin.com/company/ogelato" aria-label="Suivez O'Gelato sur LinkedIn">💼</a>
                </div>
            </div>
            <div class="footer-col">
                <h4>Produits</h4>
                <ul>
                    <li><a href="#machines-glaces">Machines Glaces</a></li>
                    <li><a href="#machines-granites">Machines Granités</a></li>
                    <li><a href="#vitrines">Vitrines</a></li>
                    <li><a href="#machines-cuisson">Matériel Cuisson</a></li>
                    <li><a href="#consommables">Consommables</a></li>
                </ul>
            </div>
            <div class="footer-col">
                <h4>Services</h4>
                <ul>
                    <li><a href="#location">Location Machines</a></li>
                    <li><a href="#financement">Financement</a></li>
                    <li><a href="#formation">Formation</a></li>
                    <li><a href="#sav">SAV & Maintenance</a></li>
                    <li><a href="#occasions">Occasions</a></li>
                </ul>
            </div>
            <div class="footer-col">
                <h4>Contact</h4>
                <ul>
                    <li><a href="tel:0954934990">09 54 93 49 90</a></li>
                    <li><a href="tel:0698722040">06 98 72 20 40</a></li>
                    <li><a href="#blog">Notre blog</a></li>
                    <li><a href="#contact">Nous contacter</a></li>
                </ul>
            </div>
        </div>
        <div class="footer-bottom">
            <p>© 2025 O'Gelato - Tous droits réservés</p>
            <p>Mentions légales | CGV | Politique de confidentialité</p>
        </div>
    </footer>
    `;

    const otherPagesFooterHTML = `
    <footer>
        <div class="footer-content">
            <div class="footer-brand">
                <a href="index.html" class="logo">
                    <div class="logo-icon">🍦</div>
                    <span class="logo-text">O'Gelato</span>
                </a>
                <p>
                    Votre partenaire matériels glaciers et cuissons depuis 2010. 
                    Ventes, locations et maintenance sur le Grand Ouest et toute la France.
                </p>
                <div class="footer-social">
                    <a href="https://facebook.com/ogelato" aria-label="Suivez O'Gelato sur Facebook">📘</a>
                    <a href="https://instagram.com/ogelato" aria-label="Suivez O'Gelato sur Instagram">📷</a>
                    <a href="https://linkedin.com/company/ogelato" aria-label="Suivez O'Gelato sur LinkedIn">💼</a>
                </div>
            </div>
            <div class="footer-col">
                <h4>Produits</h4>
                <ul>
                    <li><a href="machines-glaces.html">Machines Glaces</a></li>
                    <li><a href="machines-granites.html">Machines Granités</a></li>
                    <li><a href="index.html#vitrines">Vitrines</a></li>
                    <li><a href="machines-cuisson.html">Matériel Cuisson</a></li>
                    <li><a href="consommables-granites.html">Consommables</a></li>
                </ul>
            </div>
            <div class="footer-col">
                <h4>Services</h4>
                <ul>
                    <li><a href="index.html#location">Location Machines</a></li>
                    <li><a href="index.html#financement">Financement</a></li>
                    <li><a href="index.html#formation">Formation</a></li>
                    <li><a href="index.html#sav">SAV & Maintenance</a></li>
                    <li><a href="occasions-glaciers.html">Occasions</a></li>
                </ul>
            </div>
            <div class="footer-col">
                <h4>Contact</h4>
                <ul>
                    <li><a href="tel:0954934990">09 54 93 49 90</a></li>
                    <li><a href="tel:0698722040">06 98 72 20 40</a></li>
                    <li><a href="index.html#blog">Notre blog</a></li>
                    <li><a href="index.html#contact">Nous contacter</a></li>
                </ul>
            </div>
        </div>
        <div class="footer-bottom">
            <p>© 2025 O'Gelato - Tous droits réservés</p>
            <p>Mentions légales | CGV | Politique de confidentialité</p>
        </div>
    </footer>
    `;

    function getFooterHTML() {
        const currentPath = window.location.pathname;
        const isIndexPage = currentPath.endsWith('index.html') || currentPath.endsWith('/');
        const isInProductsFolder = currentPath.includes('/produits/');
        
        if (isIndexPage) {
            return indexFooterHTML;
        } else if (isInProductsFolder) {
            return otherPagesFooterHTML.replace(/href="([^h#][^"]*\.html)/g, 'href="../$1');
        } else {
            return otherPagesFooterHTML;
        }
    }

    document.addEventListener('DOMContentLoaded', function() {
        // Injecter le CSS
        document.head.insertAdjacentHTML('beforeend', footerCSS);
        
        // Insérer le footer
        document.body.insertAdjacentHTML('beforeend', getFooterHTML());
    });
})();
