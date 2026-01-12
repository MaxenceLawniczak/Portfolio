const uiTranslations = {
    fr: {
        retour: "← Retour au portfolio",
        presentation: "Présentation",
        fonctions: "Fonctionnalités clés",
        defis: "Défis techniques",
        infos: "Informations",
        role: "Rôle :",
        statutLabel: "Statut :",
        source: "Code Source",
        pageTitle: "Détails du Projet | Maxence"
    },
    en: {
        retour: "← Back to portfolio",
        presentation: "Overview",
        fonctions: "Key Features",
        defis: "Technical Challenges",
        infos: "Information",
        role: "Role:",
        statutLabel: "Status:",
        source: "Source Code",
        pageTitle: "Project Details | Maxence"
    }
};

const projets = {
    'moteur2d': {
        fr: {
            titre: "Moteur de jeu 2D",
            equipe: "Développeur Solo",
            description: "Conception intégrale d'un moteur de rendu 2D inspiré des jeux d'aventure classiques.",
            fonctions: ["Boucle de jeu 60 FPS", "Tilemapping", "Collisions AABB"],
            defis: "Optimiser le rendu via le double buffering.",
            statut: "En développement"
        },
        en: {
            titre: "2D Game Engine",
            equipe: "Solo Developer",
            description: "Full design of a 2D rendering engine inspired by classic adventure games.",
            fonctions: ["60 FPS Game Loop", "Tilemapping", "AABB Collisions"],
            defis: "Optimizing rendering using double buffering.",
            statut: "In Development"
        },
        techs: ["Java", "Swing", "AWT", "POO"],
        images: ["Images/Zelda1.PNG", "Images/Zelda2.PNG", "Images/Zelda3.PNG"],
        github: "https://github.com/MaxenceLawniczak/Zelda2DEngine"
    },
    'portfolio': {
        fr: {
            titre: "Portfolio",
            equipe: "Développeur Solo",
            description: "Création d'une identité numérique sobre et efficace.",
            fonctions: ["Architecture CSS", "Chargement dynamique", "SEO"],
            defis: "Garantir la lisibilité sur tous les écrans.",
            statut: "Terminé"
        },
        en: {
            titre: "Portfolio",
            equipe: "Solo Developer",
            description: "Creation of a sober and efficient digital identity.",
            fonctions: ["CSS Architecture", "Dynamic loading", "SEO"],
            defis: "Ensuring readability across all screens.",
            statut: "Completed"
        },
        techs: ["HTML5", "CSS3", "JavaScript"],
        images: ["Images/Portfolio1.png" , "Images/Portfolio2.png"  ],
        github: "https://github.com/MaxenceLawniczak/Portfolio"
    },
    'pacman': {
        fr: {
            titre: "Pacman JavaFX",
            equipe: "Equipe de 4",
            description: "Développement d'un jeu Pacman en JavaFX dans le cadre d'un projet universitaire.",
            fonctions: ["IA des fantômes", "Gestion des collisions", "Système de score"],
            defis: "Implémenter une IA basique pour les fantômes.",
            statut: "Terminé"
        },
        en: {
            titre: "JavaFX Pacman",
            equipe: "Team of 4",
            description: "Development of a Pacman game in JavaFX as part of a university project.",
            fonctions: ["Ghost AI", "Collision Management", "Scoring System"],
            defis: "Implementing basic AI for the ghosts.",
            statut: "Completed"
        },
        techs: ["Java", "JavaFX", "POO"],
        images: ["Images/Pacman1.png", "Images/Pacman2.png", "Images/Pacman3.png", "Images/Pacman4.png"],
        github: "https://gitlab.univ-artois.fr/nahel_delille/projet-2025-2026-groupe-a-4"
    }
};
const params = new URLSearchParams(window.location.search);
const projetId = params.get('id');
let currentLang = params.get('lang') === 'en' ? 'en' : 'fr';

function renderProjet(lang) {
    
    const pBase = projets[projetId];
    if (!pBase) { window.location.href = 'index.html'; return; }
    
    const p = pBase[lang];
    const ui = uiTranslations[lang];

    document.title = ui.pageTitle;
    document.querySelector('.logo').innerText = ui.retour;
    document.querySelector('.details-main section:nth-child(1) h3').innerHTML = `<i class="fas fa-info-circle"></i> ${ui.presentation}`;
    document.querySelector('.details-main section:nth-child(2) h3').innerHTML = `<i class="fas fa-tasks"></i> ${ui.fonctions}`;
    document.querySelector('.details-main section:nth-child(3) h3').innerHTML = `<i class="fas fa-exclamation-triangle"></i> ${ui.defis}`;
    document.querySelector('.side-card h4').innerText = ui.infos;
    document.querySelector('#link-github').innerHTML = `<i class="fab fa-github"></i> ${ui.source}`;
    
    // Remplace tes anciennes lignes sideTexts[0] et sideTexts[1] par ceci :
    const sideCard = document.querySelector('.side-card');
    sideCard.innerHTML = `
        <h4>${ui.infos}</h4>
        <p><strong>${ui.role}</strong> <span id="equipe-projet">${p.equipe}</span></p>
        <p><strong>${ui.statutLabel}</strong> <span id="statut-projet">${p.statut}</span></p>
        <p><strong>Date :</strong> 2025 - 2026</p>
        <a href="${pBase.github}" id="link-github" class="btn-primary" target="_blank">
            <i class="fab fa-github"></i> ${ui.source}
        </a>
    `;

    document.getElementById('titre-projet').innerText = p.titre;
    document.getElementById('equipe-projet').innerText = p.equipe;
    document.getElementById('description-projet').innerText = p.description;
    document.getElementById('defis-projet').innerText = p.defis;
    document.getElementById('statut-projet').innerText = p.statut;
    document.getElementById('link-github').href = pBase.github;

    const badge = document.getElementById('badge-statut');
    badge.innerText = p.statut;
    badge.style.background = (p.statut.toLowerCase().match(/terminé|completed/)) ? "#22c55e" : "#f59e0b";

    const listUl = document.getElementById('liste-fonctions');
    listUl.innerHTML = "";
    p.fonctions.forEach(f => {
        const li = document.createElement('li');
        li.innerText = f;
        listUl.appendChild(li);
    });

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

    slides[slideIndex].classList.remove('active');

    slideIndex += direction;

    if (slideIndex >= slides.length) { slideIndex = 0; }
    if (slideIndex < 0) { slideIndex = slides.length - 1; }

    slides[slideIndex].classList.add('active');
}

renderProjet(currentLang);

document.getElementById('btn-lang').addEventListener('click', function() {
    currentLang = currentLang === 'fr' ? 'en' : 'fr';
    this.innerText = currentLang === 'fr' ? 'EN' : 'FR';
    renderProjet(currentLang);
});