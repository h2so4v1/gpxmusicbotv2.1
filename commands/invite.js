const { MessageEmbed } = require("discord.js");

module.exports = {
  info: {
    name: "davet",
    description: "Botun'un davet linkini chate atar",
    usage: "[davet]",
    aliases: ["inv", "davet"],
  },

  run: async function (client, message, args) {
    
    let invite = new MessageEmbed()
    .setTitle(`Invite ${client.user.username}`)
    .setDescription(`Beni sunucuya çağırmak için alttaki "Davet Link" e Tıklayın \n\n [Davet Link](https://discord.com/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot)`)
    .setColor("BLUE")
    return message.channel.send(invite);
  },
};
