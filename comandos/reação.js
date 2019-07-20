const Discord = require('discord.js')

exports.run = async (bot, args, message) => {

  const role = msg.mentions.roles.first() || msg.guild.roles.get(args.join(' '))

    msg.channel.send('Essa mensagem será reagida!').then(msg => {
      msg.react('👍')
      msg.react('😏')
    })

}

exports.config = {
    name: 'reacao',
    aliases: ['reaçao', 'reação'],
}