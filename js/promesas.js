// const datos = [{}];

// console.log(datos)
// Event Loop de JS !!!
// Manejo de errores con obj Error()

// const getDatos = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (datos.length === 0) {
//         const err = new Error('No hay datos');
//         reject(err);
//       }
//       resolve(datos);
//     }, 1000);
//   });
// };

// console.log();
// getDatos()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.error('ERROR', err);
//   });

//   Async/Await

// const fetchDatos = async () => {
//   try {
//     const data = await getDatos();
//     console.log(data);
//   } catch (err) {
//     console.error(err);
//   }
// };

// fetchDatos();

// Fetch API

const url = 'https://thesimpsonsquoteapi.glitch.me/quotes';
// res = response
try {
  const res = await fetch(url);
  const data = await res.json();

  console.log(data)

  const img = document.createElement("img");
  img.src = data[0].image;

  document.body.appendChild(img)

  console.log(data);
} catch (err) {
  console.error(err);
}
