//** Menu burger **//

const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  // calcul dynamique de la height souhaitée grâce à la fonction "getBoundingClientRect"
  const containerHeight = linksContainer.getBoundingClientRect().height; // = 0
  const linksHeight = links.getBoundingClientRect().height; // = 204

  if (containerHeight === 0) {
    // lorsque les liens ne sont pas affichés
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
});

//** Fixed navbar **//

const navbar = document.getElementById("nav");
const btnTop = document.querySelector(".btn-scroll");

window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset;
  // console.log(scrollHeight)

  // j'ajoute une classe lorsque la height de la navbar est dépassée
  if (scrollHeight > navbar.getBoundingClientRect().height) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }

  // j'affiche le bouton lorsque le scroll dépasse 1000px
  if (scrollHeight > 1000) {
    btnTop.classList.add("show-btn-scroll");
  } else {
    btnTop.classList.remove("show-btn-scroll");
  }
});

//** Smooth scroll **//

const scrollLinks = document.querySelectorAll('.scroll-link');

scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    // preventDefault permet de bloquer le comportement par défaut
    e.preventDefault();
    // je récupère l'id (ex: #music) pour chaque link
    // "slice(1)" permet de commencer à l'index 1 (et donc de ne pas récupérer le #)
    const id = e.currentTarget.getAttribute("href").slice(1);
    const section = document.getElementById(id);

    // je récupère la height en fonction des 3 situations possibles 
    const navHeight = navbar.getBoundingClientRect().height;
    console.log(navHeight)
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const fixedNav = navbar.classList.contains('fixed-nav');

    // lorsque la navbar est en position fixed, je déduis la hauteur de la nav
    let position = section.offsetTop - navHeight;

    // si la navbar n'est pas en position fixed
    if (!fixedNav && navHeight < 101) {
      position = position - navHeight;
    }

    if (navHeight > 150) {
      position = position + containerHeight;
    }

    // scrollTo permet de faire défiler le document jusqu'à une position précise
    window.scrollTo({
      left:0,
      top: position,
    });
    // (sur mobile) lorsqu'un lien est cliqué je ferme le container
    linksContainer.style.height = 0;
  });
});