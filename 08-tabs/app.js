const tabs = document.querySelector(".tabs");
const btns = document.querySelectorAll(".tab-btn");
const contents = document.querySelectorAll(".content");

tabs.addEventListener("click", function (e) {
  const id = e.target.dataset.id;

  if (id) {
    btns.forEach(function (btn) {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");

    contents.forEach(function (content) {
      content.classList.remove("active");
    });

    const element = document.getElementById(id);
    element.classList.add("active");
  }
});