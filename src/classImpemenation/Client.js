class Client{
    constructor (_name){
       this.Mediator = {};
       this.Name = _name;
    }

    Send(message) {
       this.Mediator.Send(message);
    }

    Recieved(from,message){
        Console.log(`The mesage: ${message} is recieved from ${from}`)
    }
}