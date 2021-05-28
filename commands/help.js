const { MessageEmbed } = require('discord.js')

module.exports = {
    info: {
        name: "yardım",
        description: "Tüm komutların listesi",
        usage: "[komut]",
        aliases: ["commands", "yardım", "help"]
    },

    run: async function(client, message, args){
        var allcmds = "";

        client.commands.forEach(cmd => {
            let cmdinfo = cmd.info
            allcmds+="``"+process.env.PREFIX+cmdinfo.name+" "+cmdinfo.usage+"`` ~ "+cmdinfo.description+"\n"
        })

        let embed = new MessageEmbed()
        .setAuthor(client.user.username+" Bot Komutları ", "https://raw.githubusercontent.com/SudhanPlayz/Discord-MusicBot/master/assets/Music.gif")
        .setColor("BLUE")
        .setDescription(allcmds)
        .setFooter(`Yapabileceğiniz her komut hakkında bilgi almak için ${process.env.PREFIX}yardım [komut] | Developer by gPx#8919`)

        if(!args[0])return message.channel.send(embed)
        else {
            let cmd = args[0]
            let command = client.commands.get(cmd)
            if(!command)command = client.commands.find(x => x.info.aliases.includes(cmd))
            if(!command)return message.channel.send("Unknown Command")
            let commandinfo = new MessageEmbed()
            .setTitle("Command: "+command.info.name+" info")
            .setColor("YELLOW")
            .setDescription(`
Name: ${command.info.name}
Description: ${command.info.description}
Usage: \`\`${process.env.PREFIX}${command.info.name} ${command.info.usage}\`\`
Aliases: ${command.info.aliases.join(", ")}
`)
            message.channel.send(commandinfo)
        }
    }
}
