/**
 * Dispara as animações [data-reveal] quando o elemento entra na tela.
 * O CSS (global.css) deixa a animação pausada; aqui só marcamos data-revealed.
 */
const targets = document.querySelectorAll<HTMLElement>('[data-reveal]');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        (entry.target as HTMLElement).dataset.revealed = '';
        observer.unobserve(entry.target);
      }
    },
    { threshold: 0.2 },
  );
  targets.forEach((el) => observer.observe(el));
} else {
  targets.forEach((el) => (el.dataset.revealed = ''));
}
