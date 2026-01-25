// footer.js - Footer O'Gelato réutilisable
(function() {
    'use strict';
    
    // HTML du footer pour la page d'accueil
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
                    <a href="https://facebook.com/ogelato" aria-label="Suivez O'Gelato sur Facebook" title="O'Gelato sur Facebook">📘</a>
                    <a href="https://instagram.com/ogelato" aria-label="Suivez O'Gelato sur Instagram" title="O'Gelato sur Instagram">📷</a>
                    <a href="https://linkedin.com/company/ogelato" aria-label="Suivez O'Gelato sur LinkedIn" title="O'Gelato sur LinkedIn">💼</a>
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

    // HTML du footer pour les autres pages
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
                    <a href="https://facebook.com/ogelato" aria-label="Suivez O'Gelato sur Facebook" title="O'Gelato sur Facebook">📘</a>
                    <a href="https://instagram.com/ogelato" aria-label="Suivez O'Gelato sur Instagram" title="O'Gelato sur Instagram">📷</a>
                    <a href="https://linkedin.com/company/ogelato" aria-label="Suivez O'Gelato sur LinkedIn" title="O'Gelato sur LinkedIn">💼</a>
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

    // Fonction pour ajuster les liens selon la page actuelle
    function getFooterHTML() {
        const currentPath = window.location.pathname;
        const isIndexPage = currentPath.endsWith('index.html') || currentPath.endsWith('/');
        const isInProductsFolder = currentPath.includes('/produits/');
        
        if (isIndexPage) {
            return indexFooterHTML;
        } else if (isInProductsFolder) {
            // Si on est dans le dossier produits, ajuster les liens
            return otherPagesFooterHTML.replace(/href="([^h#][^"]*\.html)/g, 'href="../$1');
        } else {
            return otherPagesFooterHTML;
        }
    }

    // Initialisation au chargement du DOM
    document.addEventListener('DOMContentLoaded', function() {
        // Insérer le footer à la fin du body
        document.body.insertAdjacentHTML('beforeend', getFooterHTML());
    });
})();
