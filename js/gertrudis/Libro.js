export class Libro {
  constructor(autor, titulo, precio, stock) {
    this.autor = autor;
    this.titulo = titulo;
    this.precio = precio;
    this.stock = stock;
    this.id = window.crypto.randomUUID();
  }

  verInfo() {
    console.log(this.autor, this.titulo, this.precio, this.stock, this.id);
  }
}
