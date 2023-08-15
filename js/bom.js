// setTimeout y setInterval

// setTimeout(() => {
//   console.log('holaaaa');
// }, 3000);

// const h1 = document.querySelector('h1');

// let i = 0;
// const intervalo = setInterval(() => {
//   if (i % 2 === 0) h1.style.color = 'red';
//   else h1.style.color = 'blue';
//   i += 1;
// }, 220);

// clearInterval(intervalo);

const range = document.createElement('input');

range.type = 'range';
range.min = 0;
range.max = 60;
range.value = 0;
range.style.transition = 'all 1s ease';

document.body.appendChild(range);

// let valor = 0;
const progress = setInterval(() => {
  console.log(range.value);
  range.value = Number(range.value) + 1;
}, 1000);

clearInterval(progress);
