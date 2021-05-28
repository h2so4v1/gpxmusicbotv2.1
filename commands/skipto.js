const { MessageEmbed } = require("discord.js");
const sendError = require("../util/error");

module.exports = {
  info: {
    name: "atla",
    description: "Seçili sıra numarasına atlar",
    usage: "atla <number>",
    aliases: ["skipto","atla"],
  },

  run: async function (client, message, args) {
    if (!args.length || isNaN(args[0]))
      return message.channel.send({
                        embed: {
                            color: "GREEN",
                            description: `**Kullanım**: \`${client.config.prefix}atla <number>\``
                        }
   
                   }).catch(console.error);
        

    const queue = message.client.queue.get(message.guild.id);
    if (!queue) return sendError("Sıra yok.",message.channel).catch(console.error);
    if (args[0] > queue.songs.length)
      return sendError(`Sıra sadece ${queue.songs.length} uzun şarkılar!`,message.channel).catch(console.error);

    queue.playing = true;

    if (queue.loop) {
      for (let i = 0; i < args[0] - 2; i++) {
        queue.songs.push(queue.songs.shift());
      }
    } else {
      queue.songs = queue.songs.slice(args[0] - 2);
    }
     try{
    queue.connection.dispatcher.end();
      }catch (error) {
        queue.voiceChannel.leave()
        message.client.queue.delete(message.guild.id);
       return sendError(`:notes: Şarkı durdu ve sıra temizlendi.: ${error}`, message.channel);
      }
    
    queue.textChannel.send({
                        embed: {
                            color: "GREEN",
                            description: `${message.author}  ⏭ \`${args[0] - 1}\` Şarkı atlandı`
                        }
   
                   }).catch(console.error);
                   message.react("✅")

  },
};
