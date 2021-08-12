const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        console.log(e.currentTarget)
        const article = e.currentTarget.parentElement.parentElement;
        article.classList.toggle("show-text")
    })
})