const desplegarMenu = document.querySelector(".desplegarMenu");
const menuList = document.querySelector(".menuList")
const bodyCerrarMenu = document.querySelector("body")

desplegarMenu.addEventListener('click', () => {
    menuList.classList.toggle("menuToggle");
});

bodyCerrarMenu.addEventListener('click', (e) => {
    if(menuList.classList.contains("menuToggle") && e.target.className != "imagenPulsar" ){
    menuList.classList.remove("menuToggle");
}
});


const btnIdioma = document.querySelector(".btn-idioma");
const languageList = document.querySelector(".language-list");

btnIdioma.addEventListener('click', () => {
    languageList.classList.toggle('desplegarListaIdiomas');
});

languageList.addEventListener('click', (e) => {
    btnIdioma.innerHTML = e.target.innerText
    languageList.classList.toggle('desplegarListaIdiomas');
});

