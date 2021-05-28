const { MessageEmbed } = require("discord.js");
const sendError = require("../util/error");

module.exports = {
  info: {
    name: "döngü",
    description: "Müzik döngüsünü aç/kapat ",
    usage: "döngü",
    aliases: ["loop","döngü"],
  },

  run: async function (client, message, args) {
    const serverQueue = message.client.queue.get(message.guild.id);
       if (serverQueue) {
            serverQueue.loop = !serverQueue.loop;
            return message.channel.send({
                embed: {
                    color: "GREEN",
                    description: `🔁  **|**  Döngü **\`${serverQueue.loop === true ? "Açık" : "Kapalı"}\`**`
                }
            });
        };
    return sendError("Bu Botta Hiçbir Şey Oynatılmıyor.", message.channel);
  },
};
