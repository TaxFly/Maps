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
  try { localStorage.setItem('theme-choice', choice); } catch(e) {}
  applyThemeChoice(choice);
}
function openSettingsDrawer() {
  document.getElementById('settingsDrawer').classList.add('open');
  document.getElementById('settingsOverlay').classList.add('open');
}
function closeSettingsDrawer() {
  document.getElementById('settingsDrawer').classList.remove('open');
  document.getElementById('settingsOverlay').classList.remove('open');
}
(function initTheme() {
  let choice = 'auto';
  try { choice = localStorage.getItem('theme-choice') || 'auto'; } catch(e) {}
  applyThemeChoice(choice);
})();
