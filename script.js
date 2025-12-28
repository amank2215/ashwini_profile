const fades = document.querySelectorAll('.fade');
window.addEventListener('scroll', () => {
  fades.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add('show');
    }
  });
});
