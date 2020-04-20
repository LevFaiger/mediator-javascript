function Mediator() {
    this.clients = {};
  }
  
Mediator.prototype.register = function(client) {
    this.clients[client.name] = client;
    client.mediator = this;
  }
  
  Mediator.prototype.send = function(message, from, to) {
    if (to) {
      to.receive(message, from);
    } else {
      for (const key in this.clients) {
        if (this.clients[key] !== from) {
          this.clients[key].receive(message, from);
        }
      }
    }
  }