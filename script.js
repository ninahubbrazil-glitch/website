/*
 * CONFIGURAÇÃO DA NINA
 * Troque os links abaixo pelos destinos reais antes de publicar.
 * Ex.: quizUrl: "https://seu-quiz.pages.dev"
 */
const NINA_CONFIG = {
  quizUrl: "#",       // Link do quiz/onboarding ou checkout
  privacyUrl: "#",    // Link da política de privacidade
  termsUrl: "#"       // Link dos termos de uso
};

document.querySelectorAll("[data-cta]").forEach((button) => {
  button.href = NINA_CONFIG.quizUrl;
  if (NINA_CONFIG.quizUrl === "#") {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      alert("Configure o link do quiz da Nina no arquivo script.js antes de publicar.");
    });
  }
});

document.querySelectorAll("[data-privacy]").forEach((link) => link.href = NINA_CONFIG.privacyUrl);
document.querySelectorAll("[data-terms]").forEach((link) => link.href = NINA_CONFIG.termsUrl);
document.getElementById("year").textContent = new Date().getFullYear();

// Smooth anchor navigation for browsers with reduced motion respected by CSS.
document.querySelectorAll('a[href^="#"]:not([data-cta]):not([data-privacy]):not([data-terms])').forEach((link) => {
  link.addEventListener("click", (event) => {
    const id = link.getAttribute("href");
    if (!id || id === "#") return;
    const target = document.querySelector(id);
    if (target) {
      event.preventDefault();
      target.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
    }
  });
});
