const toggle = document.querySelector('#toggle');
const light = document.querySelector('#light');

toggleDarkMode();
saveTheme();

function toggleDarkMode() {
  if (localStorage.getItem('dark-mode')) {
    light.dispatchEvent(new Event('click'));
    toggle.checked = true;
  }
}

function saveTheme() {
  toggle.addEventListener('input', () => {
    if (toggle.checked === true) localStorage.setItem('dark-mode', 'true');
    else localStorage.clear();
  });
}