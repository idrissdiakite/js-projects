const months = [
  "Janvier",
  "Février",
  "Mars",
  "Avril",
  "Mai",
  "Juin",
  "Juillet",
  "Aout",
  "Septembre",
  "Octobre",
  "Novembre",
  "Décembre",
];

const weekdays = [
  "Dimanche",
  "Lundi",
  "Mardi",
  "Mercredi",
  "Jeudi",
  "Vendredi",
  "Samedi",
];

const subtitle = document.querySelector(".subtitle");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h3");
const surprise = document.querySelector(".surprise");
const btn = document.querySelector(".btn");

let futureDate = new Date(2021, 11, 24, 00, 00, 00);
// console.log(futureDate)

//** Modification dynamique du subtitle **//
const year = futureDate.getFullYear();
const month = months[futureDate.getMonth()];
const day = weekdays[futureDate.getDay()];
const date = futureDate.getDate();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

subtitle.textContent = `${day} ${date} ${month} ${year} à 0${hours}:0${minutes}`;

//** Calcul du temps restant  **//
const futureTime = futureDate.getTime(); // Durée jusqu'à la future date en milliseconds
// console.log(futureTime)

function getRemainingTime() {
  const today = new Date().getTime();
  const t = futureTime - today; // Durée en ms entre l'instant T et la date souhaitée

  // Rappel
  // 1s = 1000ms
  // 1m = 60s
  // 1hr = 60min
  // 1day = 24hr

  // Valeurs en milliseconds
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  // Calcul des valeurs en milliseconds
  let days = t / oneDay;
  days = Math.floor(days); // J'arrondi à l'entier inférieur
  let hours = Math.floor((t % oneDay) / oneHour); // Nombre d'heures restantes (sans compter les jours)
  let minutes = Math.floor((t % oneHour) / oneMinute);
  let seconds = Math.floor((t % oneMinute) / 1000);
  // console.log(hours)

  // Je place les valeurs dans un tableau (dans le même ordre que mes items)
  const values = [days, hours, minutes, seconds];

  // Si la valeur est inférieure à 10 j'ajoute un 0 devant
  function format(item) {
    if (item < 10) {
      return (item = `0${item}`);
    }
    return item;
  }

  // Pour chaque item, je remplace l'HTML par
  items.forEach(function (item, index) {
    item.innerHTML = format(values[index]);
  });

  if (t < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<img src="./assets/gif.gif" alt="Joyeux Noel" class="surprise">`;
  }

  // Lorsque je clique sur le bouton, j'affiche la surprise
  btn.addEventListener('click', function () {
    deadline.innerHTML = `<h3>Wow c'est passé vite !</h3> <img src="./assets/gif.gif" alt="Joyeux Noel" class="surprise">`;
  })

}

//** Compte à rebour **//
let countdown = setInterval(getRemainingTime, 1000); // Toute les secondes (1000 ms)

getRemainingTime();
