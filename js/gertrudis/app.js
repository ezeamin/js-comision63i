import { Comic } from './Comic.js';
import { Libro } from './Libro.js';

const hp = new Libro('J.K.Rowling', 'Harry Potter', 1500, 50);

hp.verInfo();

const maus = new Comic('Art Spiegelman', 'Maus', 2500, 60, 'Pantheon Books', 1);

// console.log(maus);
maus.verInfo()