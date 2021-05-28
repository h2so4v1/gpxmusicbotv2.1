const { MessageEmbed } = require("discord.js");
const sendError = require("../util/error")

module.exports = {
  info: {
    name: "muzik",
    description: "Bu sunucuda şu anda çalan müziği göstermek için",
    usage: "muzik",
    aliases: ["müzik","song"],
  },

  run: async function (client, message, args) {
    const serverQueue = message.client.queue.get(message.guild.id);
    if (!serverQueue) return sendError("Şuanda çalan hiçbir şey yok.", message.channel);
    let song = serverQueue.songs[0]
    let thing = new MessageEmbed()
      .setAuthor("Şuanda Çalıyor", "https://raw.githubusercontent.com/SudhanPlayz/Discord-MusicBot/master/assets/Music.gif")
      .setThumbnail(song.img)
      .setColor("BLUE")
      .addField("Adı", song.title, true)
      .addField("Süresi", song.duration, true)
      .addField("Tarafından talep edildi", song.req.tag, true)
      .setFooter(`Görüntülenme: ${song.views} | ${song.ago}`)
    return message.channel.send(thing)
  },
};
