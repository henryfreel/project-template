document.addEventListener('DOMContentLoaded', () => {

  // Theme toggle
  const toggle = document.getElementById('theme-toggle');
  const label = toggle.querySelector('.toggle-label');
  const stored = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initial = stored || (prefersDark ? 'dark' : 'light');

  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    label.textContent = theme === 'dark' ? 'Dark' : 'Light';
    localStorage.setItem('theme', theme);
  }

  setTheme(initial);

  toggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    setTheme(current === 'dark' ? 'light' : 'dark');
  });

  // Accordion
  document.querySelectorAll('.accordion-item').forEach(item => {
    item.addEventListener('click', () => {
      const wasOpen = item.classList.contains('open');
      item.closest('.ds-accordion')
        .querySelectorAll('.accordion-item')
        .forEach(i => i.classList.remove('open'));
      if (!wasOpen) item.classList.add('open');
    });
  });
});
