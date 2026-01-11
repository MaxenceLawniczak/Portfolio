const projets = {
    'moteur2d': {
        fr: {
            titre: "Moteur de jeu 2D",
            description: "Conception intégrale d'un moteur de rendu 2D inspiré des jeux d'aventure classiques.",
            fonctions: ["Boucle de jeu 60 FPS", "Tilemapping", "Collisions AABB"],
            defis: "Optimiser le rendu via le double buffering.",
            statut: "En développement"
        },
        en: {
            titre: "2D Game Engine",
            description: "Full design of a 2D rendering engine inspired by classic adventure games.",
            fonctions: ["60 FPS Game Loop", "Tilemapping", "AABB Collisions"],
            defis: "Optimizing rendering using double buffering.",
            statut: "In Development"
        },
        techs: ["Java", "Swing", "AWT", "POO"],
        images: ["Images/Zelda1.PNG", "Images/Zelda2.PNG", "Images/Zelda3.PNG"],
        github: "https://github.com/..."
    },
    'portfolio': {
        fr: {
            titre: "Portfolio Minimaliste",
            description: "Création d'une identité numérique sobre et efficace.",
            fonctions: ["Architecture CSS", "Chargement dynamique", "SEO"],
            defis: "Garantir la lisibilité sur tous les écrans.",
            statut: "Terminé"
        },
        en: {
            titre: "Minimalist Portfolio",
            description: "Creation of a sober and efficient digital identity.",
            fonctions: ["CSS Architecture", "Dynamic loading", "SEO"],
            defis: "Ensuring readability across all screens.",
            statut: "Completed"
        },
        techs: ["HTML5", "CSS3", "JavaScript"],
        images: ["Images/Portfolio1.png"],
        github: "https://github.com/..."
    }
};
const params = new URLSearchParams(window.location.search);
const projetId = params.get('id');
let currentLang = params.get('lang') === 'en' ? 'en' : 'fr';

function renderProjet(lang) {
    const pBase = projets[projetId];
    if (!pBase) { window.location.href = 'index.html'; return; }
    
    const p = pBase[lang]; // On récupère la langue choisie

    // Remplissage des textes
    document.getElementById('titre-projet').innerText = p.titre;
    document.getElementById('description-projet').innerText = p.description;
    document.getElementById('defis-projet').innerText = p.defis;
    document.getElementById('statut-projet').innerText = p.statut;
    
    // Badge Statut
    const badge = document.getElementById('badge-statut');
    badge.innerText = p.statut;
    badge.style.background = (p.statut.toLowerCase().match(/terminé|completed/)) ? "#22c55e" : "#f59e0b";

    // Liste des fonctions (on vide avant de remplir)
    const listUl = document.getElementById('liste-fonctions');
    listUl.innerHTML = "";
    p.fonctions.forEach(f => {
        const li = document.createElement('li');
        li.innerText = f;
        listUl.appendChild(li);
    });

    // Éléments communs (Techs & Images - seulement au premier chargement)
    if (document.getElementById('tech-tags').children.length === 0) {
        pBase.techs.forEach(t => {
            const span = document.createElement('span');
            span.innerText = t;
            document.getElementById('tech-tags').appendChild(span);
        });
        
        pBase.images.forEach((imgSrc, index) => {
            const img = document.createElement('img');
            img.src = imgSrc;
            img.className = index === 0 ? "slide active" : "slide";
            document.getElementById('carousel-slides').appendChild(img);
        });
    }
}

let slideIndex = 0;

function changeSlide(direction) {
    const slides = document.querySelectorAll('.slide');
    if (slides.length === 0) return;

    // On retire la classe 'active' de l'image actuelle
    slides[slideIndex].classList.remove('active');

    // On calcule le nouvel index
    slideIndex += direction;

    // On gère les boucles (si on dépasse la fin ou le début)
    if (slideIndex >= slides.length) { slideIndex = 0; }
    if (slideIndex < 0) { slideIndex = slides.length - 1; }

    // On ajoute la classe 'active' à la nouvelle image
    slides[slideIndex].classList.add('active');
}

// Initialisation
renderProjet(currentLang);

// Écouteur pour le bouton de langue (dans ton HTML: <button id="btn-lang">EN</button>)
document.getElementById('btn-lang').addEventListener('click', function() {
    currentLang = currentLang === 'fr' ? 'en' : 'fr';
    this.innerText = currentLang === 'fr' ? 'EN' : 'FR';
    renderProjet(currentLang);
});