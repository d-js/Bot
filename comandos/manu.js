const database = require("../config/database.js"); 
const Discord = require("discord.js");

exports.run = (bot, args, message) => {

console.log(`comando Manu ${message.guild.name} ${message.guild.id} ${message.author.tag}`)

database.Users.findOne({_id: message.author.id}, function (erro, usuario) {
if(usuario) {
      if(usuario.owner) {

  var razaou = args.slice(0).join(' ')
  var moti = args.slice(1).join(' ')

        if (!razaou.length < 1) {

database.Comandos.findOne({_id: args[0].toLowerCase()}, function (cerro, comando) {

            if (comando) {
              if (comando.manutenção) {
                comando.manutenção = false
                comando.manuMotivo = 'Não Especificado'
                comando.save()

                var embeda = new Discord.RichEmbed()

    .setColor("#36393e")
      .setDescription(`<:313905428121780225:538823497267412992> | ${message.author}, o comando **\`${args[0]}\`** foi retirado da **Manutenção**`)
  
  message.channel.send(embeda)

              } else {
                
                let motivo;
                if(!moti) motivo = 'Não Especificado';
                if(moti) motivo = moti;
                
                comando.manutenção = true
                comando.manuMotivo = motivo
                comando.save()

                var embedb = new Discord.RichEmbed()

    .setColor("#36393e")
      .setDescription(`<:313905428121780225:538823497267412992> | ${message.author}, o comando **\`${args[0]}\`** foi colocado em **Manutenção**\nMotivo: ${motivo}`)
  
  message.channel.send(embedb)
              }
            } else {
              var embedc = new Discord.RichEmbed()

    .setColor("#36393e")
      .setDescription(`<:314240199406387201:539455328178143232> | ${message.author}, o comando \`${razaou}\` não foi **achado**`)
  
  message.channel.send(embedc)
            }
          })
        } else {
          var embedd = new Discord.RichEmbed()

    .setColor("#36393e")
      .setDescription(`<:314240199406387201:539455328178143232> | ${message.author}, diga qual \`comando\` deseja colocar em **Manutenção**`)
  
  message.channel.send(embedd)
        }
} else {
  var yEmbed = new Discord.RichEmbed()
    
        .setColor("#36393e")
        .setDescription(`<:314240199406387201:539455328178143232> | ${message.author}, você não tem **permissão** para executar esse **comando**`)
        message.channel.send(yEmbed)
}
} else {
  console.log('Comando manu - confused')
    }
  })
}

exports.config = {
    name: 'manu',
    aliases: ['manutenção']
}