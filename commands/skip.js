const { Util, MessageEmbed } = require("discord.js");
const sendError = require("../util/error");

module.exports = {
  info: {
    name: "geç",
    description: "Mevcut müziği atlamak için",
    usage: "geç",
    aliases: ["skip","geç"],
  },

  run: async function (client, message, args) {
    const channel = message.member.voice.channel
    if (!channel)return sendError("Üzgünüm ama müzik çalmak için bir ses kanalında olmanız gerekiyor!", message.channel);
    const serverQueue = message.client.queue.get(message.guild.id);
    if (!serverQueue)return sendError("Senin için atlayabilceğim hiçbir şey yok.", message.channel);
        if(!serverQueue.connection)return
if(!serverQueue.connection.dispatcher)return
     if (serverQueue && !serverQueue.playing) {
      serverQueue.playing = true;
      serverQueue.connection.dispatcher.resume();
      let xd = new MessageEmbed()
      .setDescription("▶ Müziği sizin için devam ettirdi!")
      .setColor("YELLOW")
      .setTitle("Müzik devam ettirildi!")
       
   return message.channel.send(xd).catch(err => console.log(err));
      
    }


       try{
      serverQueue.connection.dispatcher.end()
      } catch (error) {
        serverQueue.voiceChannel.leave()
        message.client.queue.delete(message.guild.id);
        return sendError(`:notes: Şarkı durdu ve sıra temizlendi.: ${error}`, message.channel);
      }
    message.react("✅")
  },
};
