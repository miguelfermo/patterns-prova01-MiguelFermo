// Classe Config com Singleton
class Config {
  constructor() {
    if (Config.instance) {
      return Config.instance;
    }
    this.settings = {};
    Config.instance = this;
  }

  setConfig(key, value) {
    this.settings[key] = value;
  }

  getConfig(key) {
    return this.settings[key];
  }
}

// Cliente
const c1 = new Config();
c1.setConfig("lang", "pt-BR");

const c2 = new Config();
c2.setConfig("theme", "dark");

const c3 = new Config();
console.log("Lang:", c3.getConfig("lang")); // Deve mostrar pt-BR
console.log("Theme:", c3.getConfig("theme")); // Deve mostrar dark

// Verificar se são a mesma instância
console.log("Mesma instância?", c1 === c2 && c2 === c3);
