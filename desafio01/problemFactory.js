class Bicicleta {
  move() {
    return "Pedalando a bicicleta no pátio da UNISATC";
  }
}

class Patinete {
  move() {
    return "Andando de patinete pelo estacionamento da UNISATC";
  }
}

class Onibus {
  move() {
    return "Andando de ônibus e chegando na UNISATC";
  }
}

const tipo = "onibus";
let transporte;

if (tipo === "bicicleta") {
  transporte = new Bicicleta();
} else if (tipo === "patinete") {
  transporte = new Patinete();
} else if (tipo === "onibus") {
  transporte = new Onibus();
}

console.log(transporte.move());
