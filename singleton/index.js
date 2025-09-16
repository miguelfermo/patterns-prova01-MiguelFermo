// Classe Logger
class Logger {
  constructor() {
    if (Logger.instance) {
      return Logger.instance;
    }
    this.logs = [];
    Logger.instance = this;
  }

  log(message) {
    this.logs.push(message);
    console.log(`LOG: ${message}`);
  }

  printHistory() {
    console.log("Histórico de logs:", this.logs);
  }
}

// Cliente
const logger1 = new Logger();
logger1.log("Primeira mensagem");

const logger2 = new Logger();
logger2.log("Segunda mensagem");

const logger3 = new Logger();
logger3.log("Terceira mensagem");

// Agora ambos compartilham o mesmo histórico
logger1.printHistory();
