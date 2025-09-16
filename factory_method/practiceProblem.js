// Classes concretas
class DebitCard {
  pay(type, amount) {
    console.log(`Pagando com ${type} no valor de R$ ${amount}`);
  }
}

class CreditCard {
  pay(type, amount) {
    console.log(`Pagando com ${type} no valor de R$ ${amount}`);
  }
}

// Código do cliente
function main() {
  const type = "credit card";

  let expenses;
  if (type === "debit card") {
    expenses = new DebitCard();
  } else if (type === "credit card") {
    expenses = new CreditCard();
  }

  expenses.pay(`${type}`, "R$ 500,00");
}

main();
