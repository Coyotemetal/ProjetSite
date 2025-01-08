// Récupérer les éléments nécessaires
const themeLink = document.getElementById('theme_link');
const themeButton = document.getElementById('button'); // Correctement lié à l'ID de l'input

// Charger le thème actuel depuis localStorage ou définir le thème par défaut
let currentTheme = localStorage.getItem('theme') || 'style1';
updateTheme(currentTheme);

// Appliquer le bon état au bouton au chargement
themeButton.checked = currentTheme === 'style2';

// Ajouter un événement pour détecter le changement d'état du bouton
themeButton.addEventListener('change', () => {
    if (themeButton.checked) {
        currentTheme = 'style2';
    } else {
        currentTheme = 'style1';
    }
    updateTheme(currentTheme);

    // Sauvegarder le thème dans localStorage
    localStorage.setItem('theme', currentTheme);
});

// Fonction pour mettre à jour le thème
function updateTheme(theme) {
    themeLink.href = `../css/${theme}.css`;
}