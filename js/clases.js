class Usuario {
  constructor(
    id,
    nombreUsuario,
    fechaNacimiento,
    edad,
    localidad,
    email,
    password,
  ) {
    this.id = id;
    this.name = nombreUsuario;
    this.password = password;
    this.fechaNacimiento = fechaNacimiento;
    this.edad = edad;
    this.email = email;
    this.localidad = localidad;
    this.estado = true;
  }

  login() {
    console.log(`Bienvenido/a ${this.name}`);
  }

  logout() {
    console.log(`Adios ${this.name}`);
  }
}

let bianca = new Usuario(
  1,
  "Biancatuturrita",
  "03/10/96",
  26,
  "Miami",
  "tutturi@gmail.com",
  "123456789",
);

console.log(bianca);
