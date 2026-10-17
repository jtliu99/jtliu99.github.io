(() => {
  const storageKey = 'junting-liu-theme';
  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)');
  let preference = null;

  try {
    const stored = localStorage.getItem(storageKey);
    if (stored === 'light' || stored === 'dark') preference = stored;
  } catch {
    // Theme switching still works when browser storage is unavailable.
  }

  function applyTheme(theme) {
    document.documentElement.dataset.theme = theme;
    const toggle = document.querySelector('.theme-toggle');
    if (toggle) {
      toggle.setAttribute('aria-pressed', String(theme === 'dark'));
      toggle.title = theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';
    }
  }

  // Run in the head so the chosen theme is applied before the first paint.
  applyTheme(preference || (systemTheme.matches ? 'dark' : 'light'));

  document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.querySelector('.theme-toggle');
    if (!toggle) return;
    toggle.hidden = false;
    applyTheme(document.documentElement.dataset.theme);
    toggle.addEventListener('click', () => {
      preference = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
      applyTheme(preference);
      try {
        localStorage.setItem(storageKey, preference);
      } catch {
        // Keep the selected theme for this page even if it cannot be saved.
      }
    });
  });

  systemTheme.addEventListener('change', () => {
    if (!preference) applyTheme(systemTheme.matches ? 'dark' : 'light');
  });

  window.addEventListener('storage', (event) => {
    if (event.key !== storageKey && event.key !== null) return;
    preference = event.newValue === 'light' || event.newValue === 'dark' ? event.newValue : null;
    applyTheme(preference || (systemTheme.matches ? 'dark' : 'light'));
  });
})();
