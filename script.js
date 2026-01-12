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
            titre: "Moteur de jeu 2D (Top-Down)",
            equipe: "Développeur Solo",
            description: "Développement d'un moteur de jeu 2D en Java utilisant un système de chargement de données externe. Le moteur génère dynamiquement l'environnement à partir de fichiers texte, permettant une création de niveaux flexible et structurée.",
            fonctions: [
                "Boucle de jeu stable (60 FPS)",
                "Mouvements fluides avec gestion d'états (KeyStates)",
                "Parsing de fichiers .txt pour la génération de maps",
                "Système de Y-Sorting pour la gestion de la profondeur des sprites",
                "Collisions AABB (Box-to-Box) entre entités et décor"
            ],
            defis: "Interpréter efficacement les données brutes des fichiers texte pour reconstruire une grille de tuiles logique et visuelle.",
            statut: "En développement"
        },
        en: {
            titre: "2D Top-Down Game Engine",
            equipe: "Solo Developer",
            description: "Java-based 2D engine featuring an external data loading system. The engine dynamically generates the environment from text files, allowing for flexible and structured level design.",
            fonctions: [
                "Stable Game Loop (60 FPS)",
                "Lag-free smooth movement (KeyStates)",
                "Text file parsing for map generation",
                "Y-Sorting for dynamic sprite layering",
                "AABB Collision detection between entities and environment"
            ],
            defis: "Efficiently parsing raw data from text files to reconstruct a logical and visual tile grid.",
            statut: "In Development"
        },
        techs: ["Java", "Swing", "AWT", "File I/O", "POO"],
        images: ["Images/Zelda1.PNG", "Images/Zelda2.PNG", "Images/Zelda3.PNG"],
        github: "https://github.com/MaxenceLawniczak/Zelda2DEngine"
    },
    'portfolio': {
        fr: {
            titre: "Mon Portfolio",
            equipe: "Développeur Solo",
            description: "Développement d'une interface de présentation minimaliste et structurée pour regrouper mes projets techniques.",
            fonctions: [
                "Architecture modulaire en JavaScript",
                "Chargement dynamique du contenu via des objets JavaScript",
                "Mise en page optimisée avec CSS Flexbox/Grid",
                "Code source documenté et structuré"
            ],
            defis: "Organiser les données de manière à faciliter l'ajout de nouveaux projets sans modifier la structure HTML.",
            statut: "Terminé"
        },
        en: {
            titre: "My Portfolio",
            equipe: "Solo Developer",
            description: "Development of a minimalist and structured interface to showcase my technical projects.",
            fonctions: [
                "Modular JavaScript architecture",
                "Dynamic content loading via JavaScript objects",
                "Optimized layout using CSS Flexbox/Grid",
                "Documented and structured source code"
            ],
            defis: "Organizing data to easily add new projects without altering the HTML structure.",
            statut: "Completed"
        },
        techs: ["HTML5", "CSS3", "JavaScript"],
        images: ["Images/Portfolio1.png", "Images/Portfolio2.png", "Images/Portfolio3.png"],
        github: "https://github.com/MaxenceLawniczak/Portfolio"
    },
    'pacman': {
        fr: {
            titre: "Pacman JavaFX",
            equipe: "Projet Académique (4 personnes)",
            description: "Réarchitecture et développement d'un Pacman moderne sous JavaFX. Ce projet a servi de cas d'étude pour l'application concrète de patrons de conception logiciels.",
            fonctions: [
                "Implémentation de Design Patterns (Observateur, État, Fabrique)",
                "IA prédictive des fantômes selon leurs personnalités",
                "Moteur de rendu performant via JavaFX",
                "Système de progression et gestion d'états (Menu, Jeu, Pause)",
                "Architecture découplée (Modèle-Vue-Contrôleur)"
            ],
            defis: "Appliquer pour la première fois des patrons de conception pour gérer la complexité des comportements des fantômes et des interactions globales.",
            statut: "Terminé"
        },
        en: {
            titre: "JavaFX Pacman",
            equipe: "Academic Project (Team of 4)",
            description: "Re-architecture and development of a modern Pacman game using JavaFX. This project focused on the concrete application of software design patterns.",
            fonctions: [
                "Design Patterns implementation (Observer, State, Factory)",
                "Predictive Ghost AI based on unique personalities",
                "High-performance JavaFX rendering engine",
                "Progression system and state management (Menu, Game, Pause)",
                "Decoupled architecture (Model-View-Controller)"
            ],
            defis: "First-time application of design patterns to manage ghost behaviors and global interactions efficiently.",
            statut: "Completed"
        },
        techs: ["Java", "JavaFX", "Design Patterns", "MVC", "Gitlab CI"],
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