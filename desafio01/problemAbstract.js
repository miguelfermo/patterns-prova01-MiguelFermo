class LightButton {
  render() {
    return "Botão branco criado";
  }
}
class DarkButton {
  render() {
    return "Botão preto criado";
  }
}

class LightWindow {
  render() {
    return "Janela clara aberta";
  }
}
class DarkWindow {
  render() {
    return "Janela escura aberta";
  }
}

const theme = "dark";
let button, windowUI;

if (theme === "light") {
  button = new LightButton();
  windowUI = new LightWindow();
} else {
  button = new DarkButton();
  windowUI = new DarkWindow();
}

console.log(button.render());
console.log(windowUI.render());
