// let dasturchi = {
//     ism :"Nurillo",
//     yosh : 19,
//     salomlashish:function() {
//       console.log("Salom mening ismim " + this.ism);
//     }
// }
// console.log(dasturchi.ism);

// let dasturchi = {
//     ism : "Nurillo",
//     yosh : 19
// }
// console.log(Object.keys(dasturchi.ism));

// const ul = document.querySelector('ul');
// const fruits = ['Apple', 'Orange', 'Banana', 'Melon'];

// const fragment = new DocumentFragment();

// for (const fruit of fruits) {
//   const li = document.createElement('li');
//   li.textContent = fruit;
//   fragment.appendChild(li);
// }

// ul.append(fragment);


// let cars = ['bmw', 'audi', 'porsche', 'ferrari']
// let elList = document.querySelector(".list")

let elList = document.querySelector(".list");
let fragment = new DocumentFragment();

let eltemplate = document.querySelector(".pokemons-template").content;

for (var pokemon of pokemons) {
    let cloneTemplate = eltemplate.cloneNode(true);
    cloneTemplate.querySelector(".item");
    cloneTemplate.querySelector(".item__img").src = pokemon.img;
    cloneTemplate.querySelector(".item__title").textContent = pokemon.name;
    cloneTemplate.querySelector(".item__type").textContent = pokemon.type;
    cloneTemplate.querySelector(".item__time").textContent = pokemon.spawn_time;

    fragment.appendChild(cloneTemplate);

};
elList.appendChild(fragment);
