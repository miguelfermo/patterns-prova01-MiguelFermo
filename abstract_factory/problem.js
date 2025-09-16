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

// Cliente
function main(type) {
  let smallVehicle;
  let largeVehicle;

  if (type === "car") {
    smallVehicle = new Motorcycle();
    largeVehicle = new Car();
  } else if (type === "truck") {
    smallVehicle = new Truck();
    largeVehicle = new Bus();
  } else {
    throw new Error("Tipo desconhecido");
  }

  console.log(smallVehicle.drive());
  console.log(largeVehicle.drive());
}

main("car");
main("truck");
