const nav = document.querySelector("#nav__responsive");
const open = document.querySelector("#open");
const close = document.querySelector("#close");

open.addEventListener("click", ()=> {
    nav.classList.add("nav__visible");
})

close.addEventListener("click", ()=> {
    nav.classList.remove("nav__visible");
})
