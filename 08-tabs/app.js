const tabs = document.querySelector(".tabs");
const btns = document.querySelectorAll(".tab-btn");
const contents = document.querySelectorAll(".content");

tabs.addEventListener("click", function (e) {
  const id = e.target.dataset.id;
  console.log(id)

  if (id) {
    btns.forEach(function (btn) {
      // je retire la classe "active" sur tous les boutons
      btn.classList.remove("active");
    });
    // j'ajoute la classe "active" uniquement au bouton cliqué
    e.target.classList.add("active");

    contents.forEach(function (content) {
      content.classList.remove("active");
    });

    const element = document.getElementById(id);
    element.classList.add("active");
  }
});