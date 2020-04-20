function Client(name) {
    this.name = name;
    this.mediator = null;
  }
  
  Client.prototype.send = function(message, to) {
    if (!this.mediator) {
      throw ('you need to register to a mediator first')
    }
    this.mediator.send(message, this, to);
  }
  Client.prototype.receive = function(message, from) {
    console.log(from.name + " to " + this.name + ": " + message);
  }
  
  