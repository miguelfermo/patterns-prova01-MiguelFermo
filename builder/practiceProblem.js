class Car {
  constructor(brand, model, year, engine, color, gps) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.engine = engine;
    this.color = color;
    this.gps = gps;
  }

  showDetails() {
    console.log(
      `${this.year} 
      ${this.brand} 
      ${this.model} 
      - Motor: ${this.engine}, 
      Cor: ${this.color}, 
      GPS: ${this.gps ? "Sim" : "Não"}`
    );
  }
}

// Cliente precisa lembrar a ordem e todos os parâmetros
const car1 = new Car("Toyota", "Corolla", 2024, "2.0", "Preto", true);
const car2 = new Car("Honda", "Civic", 2023, "1.5 Turbo", "Prata", false);

car1.showDetails();
car2.showDetails();
