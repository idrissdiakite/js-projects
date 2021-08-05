// On initialise le compteur à 0
let count = 0;

const total = document.querySelector('.total');
const btns = document.querySelectorAll('.btn');
console.log(total)

// On boucle sur tous les boutons grace au forEach et on écoute au clic chaque bouton
btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        const classes = e.currentTarget.classList;
        console.log(classes)
        // Si le bouton cliqué contient la classe "btn-down" le total est réduit de 1
        if (classes.contains("btn-down")) {
            count--;
        }
        // Si le bouton cliqué contient la classe "btn-up" le total est augmenté de 1
        else if (classes.contains("btn-up")) {
            count++;
        }
        // Sinon on réinitialise le total à 0
        else {
            count = 0;
        }
        // On modifie la couleur en fonction du total (supérieur ou inférieur à 0)
        if (count < 0) {
            total.style = "color: var(--red)"
        }
        else if (count > 0) {
            total.style = "color: var(--green)"
        }
        else {
            total.style = "color: var(--black)"
        }
        total.textContent = count;
    });
})