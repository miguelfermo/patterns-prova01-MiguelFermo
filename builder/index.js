// Produto
class Computer {
  constructor() {
    this.cpu = null;
    this.gpu = null;
    this.ram = null;
    this.storage = null;
    this.powerSupply = null;
    this.caseType = null;
    this.os = null;
    this.wifiCard = false;
  }

  showConfig() {
    console.log(`
    Computador configurado:
    CPU: ${this.cpu}
    GPU: ${this.gpu !== null ? this.gpu : "GPU integrado"}
    RAM: ${this.ram !== null ? this.ram : "128MB"}
    Armazenamento: ${this.storage}
    Fonte: ${this.powerSupply}
    Gabinete: ${this.caseType}
    Sistema: ${this.os}
    Wi-Fi: ${this.wifiCard ? "Sim" : "Não"}
    `);
  }
}

// Builder
class ComputerBuilder {
  constructor() {
    this.computer = new Computer();
  }

  setProcessadorLogico(cpu) {
    this.computer.cpu = cpu;
    return this;
  }

  setGPU(gpu) {
    this.computer.gpu = gpu;
    return this;
  }

  setRAM(ram) {
    this.computer.ram = ram;
    return this;
  }

  setStorage(storage) {
    this.computer.storage = storage;
    return this;
  }

  setPowerSupply(power) {
    this.computer.powerSupply = power;
    return this;
  }

  setCase(caseType) {
    this.computer.caseType = caseType;
    return this;
  }

  setOS(os) {
    this.computer.os = os;
    return this;
  }

  addWifiCard() {
    this.computer.wifiCard = true;
    return this;
  }

  build() {
    return this.computer;
  }
}

// Director → monta configurações pré-definidas
class ComputerDirector {
  static buildGamingPC() {
    return new ComputerBuilder()
      .setProcessadorLogico("Intel i9")
      .setGPU("NVIDIA RTX 4090")
      .setRAM("64GB")
      .setStorage("2TB SSD")
      .setPowerSupply("1000W")
      .setCase("Full Tower")
      .setOS("Windows 11 Pro")
      .addWifiCard()
      .build();
  }

  static buildOfficePC() {
    return new ComputerBuilder()
      .setProcessadorLogico("Intel i5")
      .setGPU("Integrada Intel UHD")
      .setRAM("16GB")
      .setStorage("512GB SSD")
      .setPowerSupply("500W")
      .setCase("Mini Tower")
      .setOS("Windows 11 Home")
      .build();
  }

  static buildLinuxDevPC() {
    return new ComputerBuilder()
      .setProcessadorLogico("AMD Ryzen 7")
      .setGPU("AMD Radeon RX 7800XT")
      .setRAM("32GB")
      .setStorage("1TB SSD")
      .setPowerSupply("750W")
      .setCase("Mid Tower")
      .setOS("Ubuntu Linux")
      .addWifiCard()
      .build();
  }
}

// Uso
const gamer = ComputerDirector.buildGamingPC();
const office = ComputerDirector.buildOfficePC();
const dev = ComputerDirector.buildLinuxDevPC();
const satc = new ComputerBuilder().setProcessadorLogico("Celeron 400").build();

gamer.showConfig();
office.showConfig();
dev.showConfig();
satc.showConfig();
