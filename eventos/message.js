const Discord = require('discord.js')
const config = require("../config/config.json")

module.exports = async (bot, message) => {

    if(message.author.bot) return;

    if(message.content === `<@${bot.user.id}>` || message.content === `<@!${bot.user.id}`) {
        let embed = new Discord.RichEmbed()
        .setColor('#4286f4')
        .setDescription(`Meu prefixo é: \`${config.prefix}\`, Para usar meus comando use ${config.prefix}ajuda`)
        .setFooter(`Fui criado por ${bot.users.get('396298242025062400').tag}!`)

        message.channel.send(embed);
    }

    if(message.author.bot || message.channel.type === "dm")return;

  let prefix = config.prefix;
  let messageArray = message.content.split(" ")
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  if(!message.content.startsWith(prefix)) return
  let commandfile = bot.commands.get(cmd.slice(prefix.length)) || bot.commands.get(bot.aliases.get(cmd.slice(prefix.length)))
  if(commandfile) commandfile.run(bot, args, message)
}
