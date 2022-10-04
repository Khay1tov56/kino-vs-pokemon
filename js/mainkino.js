
let elList = document.querySelector(".list")
let fragment = new DocumentFragment();

let a = kinolar.splice(0,100);
let count = 1;
let eltemplate = document.querySelector(".pokemons-template").content;

for (let kino of a) {
        let cloneTemplate = eltemplate.cloneNode(true);
    cloneTemplate.querySelector(".item")
    cloneTemplate.querySelector(".item__count").textContent = count++,
    cloneTemplate.querySelector(".item__text").textContent = kino.title,
        cloneTemplate.querySelector(".item__title").textContent = kino.genres,
        cloneTemplate.querySelector(".item__type").textContent = kino.cast,
        cloneTemplate.querySelector(".item__time").textContent = kino.year,

        fragment.appendChild(cloneTemplate);



}
elList.appendChild(fragment);