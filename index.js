const prefix = process.env.PREFIX;
const fs = require("fs");
const { Collection, Client } = require("discord.js");

const client = new Client();//gPx#8919
client.commands = new Collection();//gPx#8919
client.queue = new Map()


//Loading Events
fs.readdir(__dirname + "/events/", (err, files) => {//gPx#8919
  if (err) return console.error(err);
  files.forEach((file) => {
    const event = require(__dirname + `/events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));//gPx#8919
    console.log("Event Yükleniyor: "+eventName)
  });
});

//Loading Commands
fs.readdir("./commands/", (err, files) => {//gPx#8919
  if (err) return console.error(err);
  files.forEach((file) => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    client.commands.set(commandName, props);//gPx#8919
    console.log("Komut Yükleniyor: "+commandName)
  });
});

//gPx#8919
client.login(process.env.TOKEN)
