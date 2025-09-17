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

// Usando Factory Method
class TransportFactory {
  static types = {
    bicicleta: Bicicleta,
    patinete: Patinete,
    onibus: Onibus,
  };

  static createTransport(type) {
    const TransportClass = this.types[type];
    if (!TransportClass) {
      throw new Error("Tipo de transporte não suportado");
    }
    return new TransportClass();
  }
}

// Código do cliente
function main() {
  const tipos = ["bicicleta", "patinete", "onibus"];
  try {
    tipos.forEach((tipo) => {
      const transporte = TransportFactory.createTransport(tipo);
      console.log(transporte.move());
    });
  } catch (err) {
    console.error("Erro ao criar transporte...", err.message);
  }
}

main();
