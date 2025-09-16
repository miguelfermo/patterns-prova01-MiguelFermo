class Computer {
  constructor(cpu, gpu, ram, storage, powerSupply, caseType, os, wifiCard) {
    this.cpu = cpu;
    this.gpu = gpu;
    this.ram = ram;
    this.storage = storage;
    this.powerSupply = powerSupply;
    this.caseType = caseType;
    this.os = os;
    this.wifiCard = wifiCard;
  }

  showConfig() {
    console.log(`
    Computador configurado:
    CPU: ${this.cpu}
    GPU: ${this.gpu}
    RAM: ${this.ram}
    Armazenamento: ${this.storage}
    Fonte: ${this.powerSupply}
    Gabinete: ${this.caseType}
    Sistema: ${this.os}
    Wi-Fi: ${this.wifiCard ? "Sim" : "Não"}
    `);
  }
}

// Cliente precisa passar TUDO no construtor
const pc1 = new Computer(
  "Intel i9",
  "NVIDIA RTX 4090",
  "64GB",
  "2TB SSD",
  "850W",
  "Full Tower",
  "Windows 11 Pro",
  true
);

const pc2 = new Computer(
  "AMD Ryzen 7",
  "AMD Radeon RX 7800XT",
  "32GB",
  "1TB SSD",
  "750W",
  "Mid Tower",
  "Ubuntu Linux",
  false
);

pc1.showConfig();
pc2.showConfig();
