// Classe Logger
class Logger {
  constructor() {
    this.logs = [];
  }

  log(message) {
    this.logs.push(message);
    console.log(`LOG: ${message}`);
  }

  printHistory() {
    console.log("Histórico de logs:", this.logs);
  }
}

// Cliente cria várias instâncias
const logger1 = new Logger();
logger1.log("Primeira mensagem");

const logger2 = new Logger();
logger2.log("Segunda mensagem");

logger1.printHistory();
logger2.printHistory();
