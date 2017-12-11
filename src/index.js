import component from "./component";

class App {
  constructor() {}

  render() {
    return document.body.appendChild(component());
  }
}

let app = new App();

app.render();

