export const generarNumeroAleatorio = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};
