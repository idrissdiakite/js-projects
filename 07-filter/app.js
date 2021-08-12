const items = [
  {
    id: 1,
    category: "hiphop",
    artist: "Mobb Deep",
    album: "The infamous",
    date: 1995,
    img: "./assets/mobb-deep.jpeg",
  },
  {
    id: 2,
    category: "fr",
    artist: "La Rumeur",
    album: "Premier volet: le poison d'avril",
    date: 1997,
    img: "./assets/la-rumeur.jpg",
  },
  {
    id: 3,
    category: "electro",
    artist: "Jakobin & Domino",
    album: "Roshambo EP",
    date: 2016,
    img: "./assets/jakobin.jpeg",
  },
  {
    id: 4,
    category: "soul",
    artist: "Romare",
    album: "Love songs: part one",
    date: 2013,
    img: "./assets/romare.jpeg",
  },
  {
    id: 5,
    category: "hiphop",
    artist: "Stand High Patrol",
    album: "The shift",
    date: 2017,
    img: "./assets/stand-high.jpeg",
  },
  {
    id: 6,
    category: "fr",
    artist: "IAM",
    album: "Arts martiens",
    date: 2013,
    img: "./assets/iam.jpeg",
  },
  {
    id: 7,
    category: "disco",
    artist: "Ntombi Ndaba",
    album: "Tomorrow",
    date: 2018,
    img: "./assets/ntombi.jpeg",
  },
  {
    id: 8,
    category: "electro",
    artist: "Nice Guys",
    album: "Nice Guys compilation vol.1",
    date: 2019,
    img: "./assets/nice-guys.jpeg",
  },
  {
    id: 09,
    category: "hiphop",
    artist: "Dre'es",
    album: "Warm",
    date: 2017,
    img: "./assets/drees.jpg",
  },
  {
    id: 10,
    category: "electro",
    artist: "Nina Kraviz",
    album: "Ghetto Kraviz (Marvin & Guy mix)",
    date: 2013,
    img: "./assets/nina-ghetto.jpeg",
  },
  {
    id: 11,
    category: "soul",
    artist: "Rhi",
    album: "The pale queen",
    date: 2019,
    img: "./assets/rhi.jpeg",
  },
  {
    id: 12,
    category: "hiphop",
    artist: "Coryayo",
    album: "1995",
    date: 2014,
    img: "./assets/coryayo.jpeg",
  },
];

const itemSection = document.querySelector(".items");
const filterSection = document.querySelector(".filters");

window.addEventListener("DOMContentLoaded", function () {
  // lorsque la page charge, j'exécute les 2 fonctions
  displayMusicItems(items);
  displayFilterButtons();
});

function displayMusicItems(items) {
  let displayItems = items.map(function (item) {
    // console.log(item)

    return `<article class="item">
        <img src=${item.img} alt=${item.album} class="cover">
        <h3>${item.artist}</h3>
        <p>${item.album}</p> 
        <p>${item.date}</p> 
    </article>`;
  });

  displayItems = displayItems.join(""); // "" pour ne pas avoir de séparateur
  itemSection.innerHTML = displayItems;
}

function displayFilterButtons() {
  const categories = items.reduce( // je récupère les catégories "uniques"
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category); // et les place dans un tableau
      }
      return values;
    },
    ["all"] // sans oublier d'ajouter également all "manuellement" 
  );
  //   console.log(categories)
  const categoryBtns = categories
    .map(function (category) {
      return `<button type="button" class="filter-btn" data-id=${category}>${category}</button>`;
    })
    .join("");
  filterSection.innerHTML = categoryBtns;

  // je récupère les boutons une fois ces derniers créés
  const filterBtns = document.querySelectorAll(".filter-btn");

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      const category = e.currentTarget.dataset.id;
      const itemsCategory = items.filter(function (musicItems) {
        if (musicItems.category === category) {
          return musicItems;
        }
      });

      if (category === "all") {
        displayMusicItems(items);
      } else {
        displayMusicItems(itemsCategory);
      }
    });
  });
}
