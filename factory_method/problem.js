// Classes concretas
class EmailNotification {
  send(message) {
    console.log(`Enviando Email: ${message}`);
  }
}

class SMSNotification {
  send(message) {
    console.log(`Enviando SMS: ${message}`);
  }
}

// Código do cliente
function main() {
  const type = "sms";

  let notification;
  if (type === "email") {
    notification = new EmailNotification();
  } else if (type === "sms") {
    notification = new SMSNotification();
  }

  notification.send(
    `${type.toUpperCase()} Pix recebido de Ugioni no valor de R$ 100,00`
  );
}

main();
