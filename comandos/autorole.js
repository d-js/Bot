const database = require("../config/database.js"); 
const Discord = require("discord.js");

exports.run = async (bot, args, message) => {

console.log(`Comando autorole ${message.guild.name} ${message.guild.id} ${message.author.tag}`)

let razaou = args.slice(0).join(' ')
let razaod = args.slice(1).join(' ')

database.Users.findOne({_id: message.author.id}, function (erro, usuario) {
  
if(usuario.owner || message.member.hasPermission("ADMINISTRATOR")) {

database.Guilds.findOne({_id: message.guild.id}, function (servro, servidor) {

          if(servidor) {
            if(!razaou.length < 1) {
                if(args[0] == "set") {

                if(!razaod.length < 1) {

                if (message.mentions.roles.size > 0) {
                  if (message.guild.roles.get(message.mentions.roles.first().id).position < message.guild.members.get(bot.user.id).highestRole.position) {
                      servidor.autorole = true
                      servidor.autoroleid = message.mentions.roles.first().id
                      servidor.save()
                      var embeda = new Discord.RichEmbed()

    .setColor("#36393e")
      .setDescription(`📤 | **Autorole setado para:** ${message.mentions.roles.first().name}`)
  
  message.channel.send(embeda)
                    } else {
                      var embedb = new Discord.RichEmbed()

    .setColor("#36393e")
      .setDescription(`<:314240199406387201:539455328178143232> | ${message.author}, **o cargo deve estar abaixo do meu**`)
  
  message.channel.send(embedb)
                    }
                  } else {
                    var embedc = new Discord.RichEmbed()

    .setColor("#36393e")
      .setDescription(`<:314240199406387201:539455328178143232> | ${message.author}, **por favor, mencione o cargo que deseja setar**`)
  
  message.channel.send(embedc)
                  }
                } else {
                  var embedd = new Discord.RichEmbed()

    .setColor("#36393e")
      .setDescription(`<:314240199406387201:539455328178143232> | ${message.author}, use: **\`${prefixo}autorole set [role]\`**`)
  
  message.channel.send(embedd)
                }
              } else if(args[0] == "remove"){ 
                if (servidor.autorole) {
                  servidor.autorole = false
                  servidor.autoroleid = 'Nenhum'
                  servidor.save()
                  var embede = new Discord.RichEmbed()

    .setColor("#36393e")
      .setDescription(`<:313905428121780225:538823497267412992> | ${message.author}, **\`Autorole\`** desativado neste **servidor**`)
  
  message.channel.send(embede)
                } else {
                  var embedf = new Discord.RichEmbed()

    .setColor("#36393e")
      .setDescription(`<:314240199406387201:539455328178143232> | ${message.author}, não há nenhum **\`Autorole\`** setado neste **servidor**`)
  
  message.channel.send(embedf)
                }
              } else if(args[0] == "ajuda") {
                message.channel.send({
                  'embed': {
                    'title': '📤 Autorole: 📤',
                    'description': `**Cargo setado:** <@&${servidor.autoroleid}>`,
                    'color': 0x36393e,
                    'timestamp': new Date(),
                    'footer': {
                      'icon_url': message.author.displayAvatarURL,
                      'text': message.author.username
                    },
                    'thumbnail': {
                      'url': bot.user.displayAvatarURL
                    }
                  }
                })
              } else {
                var embedg = new Discord.RichEmbed()

                .setColor("#36393e")
                  .setDescription(`<:314240199406387201:539455328178143232> | ${message.author}, argumento **inválido**`)
              
              message.channel.send(embedg)
              }
            } else {
              message.channel.send({
                'embed': {
                  'title': '<:313905428121780225:538823497267412992> Autorole:',
                  'description': `\`\`\`\n${prefixo}autorole set <menção do cargo>\n${prefixo}autorole remove\n${prefixo}autorole ajuda\`\`\``,
                  'color': 0x36393e,
                  'timestamp': new Date(),
                  'footer': {
                    'icon_url': message.author.displayAvatarURL,
                    'text': message.author.username
                  },
                  'thumbnail': {
                    'url': bot.user.displayAvatarURL
                  }
                }
              })
            }
          } else {
            var save = new database.Guilds({_id: message.guild.id})
            save.save()
          }
        }).catch({})
        
      } else {
        var yEmbed = new Discord.RichEmbed()
    
        .setColor("#36393e")
        .setDescription(`<:314240199406387201:539455328178143232> | ${message.author}, você precisa da permissão **ADMINISTRATOR** para executar esse **comando**`)
        message.channel.send(yEmbed)
    } 
  }).catch({})
}

exports.config = {
  name: "autorole",
  aliases: []
}