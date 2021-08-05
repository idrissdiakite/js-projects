/* Les couleurs Hex sont composées de 6 chiffres (allant de 0 à 9) 
et de lettres (allant de A à F) */

const color = document.querySelector('.color');
const btn = document.querySelector('.btn');
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

console.log(color)

btn.addEventListener('click', function() {
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()];
    }

    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;

});

// Fonction permettant de récupérer aléatoirement un chiffre compris entre 0 et 15
function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}