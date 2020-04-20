var user1 = new Client("user1");
var user2 = new Client("user2");
var user3 = new Client("user3");
var user4 = new Client("user4");

var mediator = new Mediator();
mediator.register(user1);
mediator.register(user2);
mediator.register(user3);
mediator.register(user4);

user1.send("Hi all i'm user1");
user1.send("Hi user3");
user2.send("talk in private", user1);
user4.send("get a room!", user1);
user3.send("Hi, i'm here", user1);