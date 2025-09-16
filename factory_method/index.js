// Classes concretas
class EmailNotification {
  send(message) {
    console.log(`Enviando ${message}`);
  }
}

class SMSNotification {
  send(message) {
    console.log(`Enviando ${message}`);
  }
}

class PushNotification {
  send(message) {
    console.log(`Enviando ${message}`);
  }
}

class WhatsAppNotification {
  send(message) {
    console.log(`Enviando ${message}`);
  }
}

// Usando Factory Method
class NotificationFactory {
  static types = {
    email: EmailNotification,
    sms: SMSNotification,
    push: PushNotification,
    whatsapp: WhatsAppNotification,
  };

  static createNotification(type) {
    const NotificationClass = this.types[type];
    if (!NotificationClass) {
      throw new Error("Tipo de notificação ainda não suportado");
    }
    return new NotificationClass();
  }
}

// Código do cliente
function main() {
  const notifications = ["email", "sms", "push", "whatsapp"];
  try {
    notifications.forEach((type) => {
      const notification = NotificationFactory.createNotification(type);
      notification.send(
        `${type}... Pix recebido de Ugioni no valor de R$ 100,00`
      );
    });
  } catch (err) {
    console.error("Erro ao enviar...", err.message);
  }
}

main();
