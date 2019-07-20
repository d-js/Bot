const Discord = require('discord.js');

exports.run = async (bot, args, message) => {

    const embed = new Discord.RichEmbed()
    .setColor('#4286f4')
    .setTimestamp()
    .setThumbnail(bot.user.displayAvatarURL)
    .addField('🚬 Fumar 🚬', `${message.author.username} Fumou Cigarro por R$35,00 Reais`)
    .setFooter(`${bot.user.username}, ${bot.user.id}`)

    message.reply(embed)

}

exports.config = {
    name: "fumar",
    aliases: ['cigarro'],
    category: 'trafico',
    usage: 'b.fumar comprar 5 cigarro 🚬',
    group: 'Trafico'
}
