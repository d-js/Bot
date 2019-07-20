const database = require("../config/database.js"); 
const Discord = require("discord.js");

exports.run = async (bot, args, message) => {
  
  console.log(`Comando welcome ${message.guild.name} ${message.guild.id} ${message.author.tag}`)
    
  let razaou = args.slice(0).join(' ')
  let razaod = args.slice(1).join(' ')
  
database.Users.findOne({_id: message.author.id}, function (erro, usuario) {
  
    if(usuario.owner || message.member.hasPermission("ADMINISTRATOR")) {

database.Guilds.findOne({_id: message.guild.id}, function (servro, servidor) {
            
  let server = servidor.welcome
  let = server;
  
  if(server === true) server = "<:Ativado:568527486712021033> Ativado";
  if(server === false) server = "<:Desativado:568527653162844203> Desativado";
              
                if(servidor) {
                if(!razaou.length < 1) {

                  if(args[0] == "msg") { 

                    if(!razaod.length < 1) {
                      servidor.welcome = true
                      servidor.welcomemsg = args.slice(1).join(' ')
                      servidor.save()
                      let sEmbed = new Discord.RichEmbed()

                  .setColor("36393e")
                    .setFooter(message.author.username, message.author.displayAvatarURL)
                      .setDescription(`<:313905428121780225:538823497267412992> Welcome Setado Para: **\`${args.slice(1).join(' ')}\`**`)
                  
                 message.channel.send(sEmbed)

                    } else {
                      var embeda = new Discord.RichEmbed()

                      .setColor("#36393e")
                        .setDescription(`<:314240199406387201:539455328178143232> | ${message.author}, **por favor, cite a mensagem de entrada que deseja setar**`)
                    
                    message.channel.send(embeda)
                    }
                  } else if(args[0] == "remove") { 

                    if(servidor.welcome) {
                      servidor.welcome = false
                      servidor.welcomechannel = 'Nenhum'
                      servidor.welcomemsg = 'Nenhuma'
                      servidor.save()
                      var embedb = new Discord.RichEmbed()

    .setColor("#36393e")
      .setDescription(`<:313905428121780225:538823497267412992> | ${message.author}, **welcome desativado neste servidor**`)
  
  message.channel.send(embedb)
  
                    } else {
                      var embedc = new Discord.RichEmbed()

    .setColor("#36393e")
      .setDescription(`<:314240199406387201:539455328178143232> | ${message.author}, não há um **welcome** ativado neste **servidor**`)
  
  message.channel.send(embedc)
                    }
                  } else if(args[0] == "ajuda") { 

                    message.channel.send({
                      'embed': {
                        'title': '<:313905428121780225:538823497267412992> Welcome',
                        'description': `**Mensagem Setada:** ${servidor.welcomemsg}\n\n**Como usar:**\`\`\`\n{member} menciona o usuário\n{name} nome do usuário\n{users} quantidade de users ao entrar\n{guild} nome do servidor\`\`\`\nStatus: ${server}\nCanal: <#${servidor.welcomechannel}>`,
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
                    
                  } else if(args[0] == "canal"){
                  
                  let guild  = bot.guilds.get(message.guild.id)
                  let canal = guild.channels.get(args[1]) || guild.channels.find(a=> a.name == args[1]) || message.mentions.channels.first()
                  
                  if(!args[1]){

      var embedd = new Discord.RichEmbed()

    .setColor("#36393e")
      .setDescription(`<:314240199406387201:539455328178143232> | ${message.author}, **argumento inválido**`)
  
  message.channel.send(embedd)
                   }

                  if(!canal){
                    var embede = new Discord.RichEmbed()

    .setColor("#36393e")
      .setDescription(`<:314240199406387201:539455328178143232> | ${message.author}, **canal inválido**`)
  
  message.channel.send(embede)
                  }
                  servidor.welcomechannel = canal.id
                  servidor.save()

                  var embedf = new Discord.RichEmbed()

    .setColor("#36393e")
      .setDescription(`<:313905428121780225:538823497267412992> | ${message.author}, **canal definido:** ${canal}`)
  
  message.channel.send(embedf)
                  
                  } else {
                    var embedg = new Discord.RichEmbed()

    .setColor("#36393e")
      .setDescription(`<:314240199406387201:539455328178143232> | ${message.author}, **argumento inválido**`)
  
  message.channel.send(embedg)
                  }

                } else {
  
                  message.channel.send({
                    'embed': {
                      'title': '<:313905428121780225:538823497267412992> Welcome',
                      'description': `Status: ${server}\n\`\`\`\n${prefixo}welcome msg <mensagem de entrada>\n${prefixo}welcome remove\n${prefixo}welcome ajuda\n${prefixo}welcome canal <canal>\`\`\``,
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
  name: "welcome",
      aliases: ['sejabemvindo']
}