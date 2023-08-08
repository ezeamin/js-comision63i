import { Libro } from './Libro.js';

export class Comic extends Libro {
  constructor(autor, titulo, precio, stock, ilustradores, volumen) {
    super(autor, titulo, precio, stock);
    this.ilustradores = ilustradores;
    this.volumen = volumen;
  }

  verInfo() {
    console.log(
      this.autor,
      this.titulo,
      this.precio,
      this.stock,
      this.id,
      this.ilustradores,
      this.volumen
    );
  }
}
