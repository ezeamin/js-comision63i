'use strict';

const h1 = document.querySelector('h1');
console.log(h1);

console.log(h1.innerText);

h1.innerText = 'Ahora ya no es un título feliz 😫';
h1.style.color = 'red';
h1.style.fontFamily = 'Courier';
// font-family -> fontFamily

// const texto = document.querySelector('#texto');
const texto = document.getElementById('texto');
texto.innerText = 'Chau';

const links = document.getElementsByClassName('links');
console.log(links);

for (let i = 0; i < links.length; i += 1) {
  links[i].style.backgroundColor = 'blue';
}

// Array(links).forEach((item)=>{
//     item.style.backgroundColor = 'blue';
// })

let suma = 0;
suma += 5;

const nav = document.querySelector('nav');
nav.innerHTML += '<h2>Holaaaaa</h2>';

// Proceso de 3 pasos
// 1 - Crear el nodo
const img = document.createElement('img');

// 2 - Darle las propiedades
img.src =
  'https://elcomercio.pe/resizer/ogmrm_zqIO6bNsdb3sjIyao1Un0=/1200x800/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/3HHLTK3N3NDSVGVDJTL7H7Y6KQ.jpg';
img.alt = 'Mario de grande y bizarro';
img.style.width = '200px';
img.className = 'rounded';
img.classList.add('border');
img.classList.remove('rounded');

// 3 - Agregarlo al documento (como hijo de algun elemento)
const footer = document.querySelector('footer');
footer.appendChild(img);

texto.remove();
