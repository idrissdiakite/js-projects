// GSAP
// Je selectionne tous les élements que je souhaite animer
const h1 = document.querySelectorAll("h1 span");
const h2 = document.querySelectorAll("h2 span");
const btns = document.querySelectorAll(".btn");
const logo = document.querySelector(".logo");
const medias = document.querySelectorAll(".social-icon");

// lorsque la page est chargée, je crée/lance ma timeline
window.addEventListener("load", () => {
  const TL = gsap.timeline({ paused: true }); // timeline sur pause de base

  // (élément, durée d'annimation, {d'où ça part, degré d'opacité, type d'animation}, durée entre chaques animations)
  TL.staggerFrom(h1, 1, { top: -50, opacity: 0, ease: "power2.out" }, 0.3) 
    .staggerFrom(h2, 1, { top: -50, opacity: 0, ease: "power2.out" }, 0.3)
    .staggerFrom(btns, 1, { opacity: 0, ease: "power2.out" }, 0.3, "-=1") // "-=1" -> boutons apparaissent 1s avant la fin de l'animation précédente
    .from(logo, 1, { transform: "scale(0)", ease: "power2.out" }, "-=2")
    .staggerFrom(medias, 1, { right: -200, ease: "power2.out" }, 0.3, "-=1");

  TL.play();
});