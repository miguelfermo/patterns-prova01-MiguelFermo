class Lanche {
  constructor(pao, carne, queijo, salada, molho) {
    this.pao = pao;
    this.carne = carne;
    this.queijo = queijo;
    this.salada = salada;
    this.molho = molho;
  }

  show() {
    console.log("Lanche:", {
      pao: this.pao,
      carne: this.carne,
      queijo: this.queijo,
      salada: this.salada,
      molho: this.molho,
    });
  }
}

const lancheSimples = new Lanche(true, true, false, false, false);
const lancheCompleto = new Lanche(true, true, true, true, true);

lancheSimples.show();
lancheCompleto.show();
