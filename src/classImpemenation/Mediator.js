class Mediator{
    constructor(){
      this.Clients = [];
    }

    Sbscribe(_client){
        this.Clients.push(_client);
        _client.Mediator = this;
    }

    SendToAllClinets(_from,_message){
        this.Clients.map(c=>c.Recieved(_from,_message))
    }

    Unsubscribe(){

    }
}