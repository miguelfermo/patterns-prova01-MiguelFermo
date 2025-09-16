// Classes concretas
class Car {
  drive() {
    return "Dirigindo um carro";
  }
}

class Motorcycle {
  drive() {
    return "Pilotando uma moto";
  }
}

class Truck {
  drive() {
    return "Conduzindo um caminhão";
  }
}

class Bus {
  drive() {
    return "Dirigindo um ônibus";
  }
}

// Abstract Factory
class VehicleFactory {
  createSmallVehicle() {
    throw new Error("Método abstrato deve ser implementado");
  }
  createLargeVehicle() {
    throw new Error("Método abstrato deve ser implementado");
  }
}

// Concrete Factories
class CarFactory extends VehicleFactory {
  createSmallVehicle() {
    return new Car();
  }
  createLargeVehicle() {
    return new Motorcycle();
  }
}

class TruckFactory extends VehicleFactory {
  createSmallVehicle() {
    return new Truck();
  }
  createLargeVehicle() {
    return new Bus();
  }
}

// Cliente
const factories = {
  car: new CarFactory(),
  truck: new TruckFactory(),
};

class TransportApp {
  constructor(factory) {
    this.smallVehicle = factory.createSmallVehicle();
    this.largeVehicle = factory.createLargeVehicle();
  }

  startTrip() {
    console.log(this.smallVehicle.drive());
    console.log(this.largeVehicle.drive());
  }
}

// Uso
function main() {
  const types = ["car", "truck"];

  types.forEach((type) => {
    console.log(`\n>> Fábrica selecionada: ${type} <<`);
    const factory = factories[type];
    if (!factory) throw new Error("Tipo de fábrica desconhecido");

    const app = new TransportApp(factory);
    app.startTrip();
  });
}

main();
