const { MessageEmbed } = require("discord.js");
const sendError = require("../util/error");

module.exports = {
  info: {
    name: "durdur",
    description: "Çalan mevcut müziği duraklatmak için",
    usage: "[durdur]",
    aliases: ["pause","durdur"],
  },

  run: async function (client, message, args) {
    const serverQueue = message.client.queue.get(message.guild.id);
    if (serverQueue && serverQueue.playing) {
      serverQueue.playing = false;
	    try{
      serverQueue.connection.dispatcher.pause()
	  } catch (error) {
        message.client.queue.delete(message.guild.id);
        return sendError(`:notes: Şarkı durdu ve sıra temizlendi.: ${error}`, message.channel);
      }	    
      let xd = new MessageEmbed()
      .setDescription("⏸ Müziği sizin için duraklattı!")
      .setColor("YELLOW")
      .setTitle("Müzik duraklatıldı!")
      return message.channel.send(xd);
    }
    return sendError("Şuanda hiçbir şey çalmıyor.", message.channel);
  },
};
