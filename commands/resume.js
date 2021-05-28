const { MessageEmbed } = require("discord.js");
const sendError = require("../util/error");

module.exports = {
  info: {
    name: "devamet",
    description: "Duraklatılan müziği devam ettirmek için",
    usage: "",
    aliases: ["resume","devamet"],
  },

  run: async function (client, message, args) {
    const serverQueue = message.client.queue.get(message.guild.id);
    if (serverQueue && !serverQueue.playing) {
      serverQueue.playing = true;
      serverQueue.connection.dispatcher.resume();
      let xd = new MessageEmbed()
      .setDescription("▶ Müziği sizin için devam ettirdi!")
      .setColor("YELLOW")
      .setAuthor("Müzik devam ettirildi", "https://raw.githubusercontent.com/SudhanPlayz/Discord-MusicBot/master/assets/Music.gif")
      return message.channel.send(xd);
    }
    return sendError("Şuanda hiçbir şey çalmıyor", message.channel);
  },
};
