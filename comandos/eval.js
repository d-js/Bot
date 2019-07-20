const Discord = require("discord.js");
const database = require("../config/database.js"); 

function clean(text) {
    if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
    else
    return text;
} 

exports.run =  async (bot, args, message) => {

console.log(`comando eval ${message.guild.name} ${message.guild.id} ${message.author.tag}`)
      
database.Users.findOne({_id: message.author.id}, function (erro, usuario) {

    if(usuario) {
      if(usuario.owner) {

    try {

        var code = args.join(" ");
        var evaled = eval(code);
        
    if(!code) {

            var hhEmbed = new Discord.RichEmbed()
            
                .setColor("#36393e")
                .setDescription(`<:codigofonte:597645030601261057> | ${message.author}, insira o **código** para prosseguir com o **comando**`)

            message.channel.send(hhEmbed)
        } else {

    if(typeof evaled !== "string")
    evaled = require("util").inspect(evaled);

    var embed = new Discord.RichEmbed()

            .setColor("#36393e")
            .setThumbnail(bot.user.displayAvatarURL)
            .setFooter(`</Bot>™ | VERIFICADO`, bot.user.displayAvatarURL)
            .addField("📥 Entrada: Código:", "```"+code+"```")
            .addField("📤 Resultado: Resultado:","```"+evaled+"```")
            
    message.channel.send(embed).then(msg=> {
        })
    }
} catch (err) {
    const code = args.join(" ");
    const embed = new Discord.RichEmbed()
    .setColor("#36393e")
    .setFooter(`</Bot>™ | VERIFICADO`, bot.user.displayAvatarURL)
    .setThumbnail(bot.user.displayAvatarURL)
    .addField("<:codigofonte:597645030601261057> Código:","```"+code+"```")
    .addField("<:Erro:579452454832308245> Erro:", "```"+`xl\n${clean(err)}`+"```")
  message.channel.send(embed).then(msg=> {
              })
          }
} else {
        var yEmbed = new Discord.RichEmbed()
    
        .setColor("#36393e")
        .setDescription(`<:Erro:579452454832308245> | ${message.author}, você não tem **permissão** para executar esse **comando**`)
        message.channel.send(yEmbed)
    }
} else {
    console.log('Comando Eval - confused')
        }
    })
}

exports.config = {
    name: 'eval',
    aliases: ['e'],
    category: 'owner'
}