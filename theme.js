// Key 'theme' compartida con TaxUSA/Taxfly (mismo dominio): cuando el
// usuario elige "Auto" acá, borramos la key en vez de guardar el string
// 'auto', porque Taxfly interpreta "sin key" como auto y cualquier otro
// valor lo toma literal para el atributo data-theme (guardar 'auto' ahí
// rompería el tema en Taxfly).
const THEME_KEY = 'theme';
function applyThemeChoice(choice) {
  if (choice === 'dark') document.documentElement.setAttribute('data-theme', 'dark');
  else if (choice === 'light') document.documentElement.setAttribute('data-theme', 'light');
  else {
    document.documentElement.removeAttribute('data-theme');
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) document.documentElement.setAttribute('data-theme', 'dark');
  }
  document.querySelectorAll('.theme-opt').forEach(b => b.classList.toggle('active', b.dataset.themeChoice === choice));
}
function setThemeChoice(choice) {
  try {
    if (choice === 'auto') localStorage.removeItem(THEME_KEY);
    else localStorage.setItem(THEME_KEY, choice);
  } catch(e) {}
  applyThemeChoice(choice);
}
function openSettingsDrawer() {
  document.getElementById('settingsDrawer').classList.add('open');
  document.getElementById('settingsOverlay').classList.add('open');
  window.renderBudgetBox && window.renderBudgetBox();
}
function closeSettingsDrawer() {
  document.getElementById('settingsDrawer').classList.remove('open');
  document.getElementById('settingsOverlay').classList.remove('open');
}
(function initTheme() {
  let choice = 'auto';
  try { choice = localStorage.getItem(THEME_KEY) || 'auto'; } catch(e) {}
  applyThemeChoice(choice);
})();
