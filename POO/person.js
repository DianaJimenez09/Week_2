class Person {
  constructor(colorPelo, colorOjos, altura, peso) {
    this.colorPelo = colorPelo;
    this.colorOjos = colorOjos;
    this.height = altura;
    this.width = peso;
    this.genero;
    this.edad;
    this.nacionalidad;
  }

  calcIMC() {
    return (this.height * this.width) / 100;
  }
}

const persona1 = new Person("rojo", "Marrones", 174, 67);

console.log(persona1.calcIMC());
