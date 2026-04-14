document.addEventListener('DOMContentLoaded', () => {
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
