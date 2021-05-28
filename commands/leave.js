const { MessageEmbed } = require("discord.js");
const sendError = require("../util/error");

module.exports = {
    info: {
        name: "ayrıl",
        aliases: ["leave", "ayrıl"],
        description: "Bot ses kanalından çıkar",
        usage: "ayrıl",
    },

    run: async function (client, message, args) {
        let channel = message.member.voice.channel;
        if (!channel) return sendError("I'm sorry but you need to be in a voice channel!", message.channel);
        if (!message.guild.me.voice.channel) return sendError("I Am Not In Any Voice Channel!", message.channel);

        try {
            await message.guild.me.voice.channel.leave();
        } catch (error) {
            await message.guild.me.voice.kick(message.guild.me.id);
            return sendError("Trying To Leave The Voice Channel...", message.channel);
        }

        const Embed = new MessageEmbed()
            .setAuthor("Ses Kanalından Ayrıl", "https://raw.githubusercontent.com/SudhanPlayz/Discord-MusicBot/master/assets/Music.gif")
            .setColor("GREEN")
            .setTitle("Başarılı")
            .setDescription("🎶 Ses Kanalından Ayrıldı.")
            .setTimestamp();

        return message.channel.send(Embed).catch(() => message.channel.send("🎶 Left The Voice Channel :C"));
    },
};
