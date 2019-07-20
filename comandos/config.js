const Discord = require("discord.js");
const database = require("../config/database.js"); 

exports.run = async (bot, args, message) => {
 
console.log(`Comando config ${message.guild.name} ${message.guild.id} ${message.author.tag}`)

database.Guilds.findOne({_id: message.guild.id}, function (erro, servidor) {

    let welcome = servidor.welcome
    let = welcome
    if(welcome === true) welcome = "<:Ativado:568527486712021033>";
    if(welcome === false) welcome = "<:Desativado:568527653162844203>";

    let saida = servidor.byebye
    let = saida
    if(saida === true) saida = "<:Ativado:568527486712021033>";
    if(saida === false) saida = "<:Desativado:568527653162844203>";

    let antInv = servidor.antinvite
    let = antInv
    if(antInv === true) antInv = "<:Ativado:568527486712021033>";
    if(antInv === false) antInv = "<:Desativado:568527653162844203>";

    let autorole = servidor.autorole
    let = autorole
    if(autorole === true) autorole = "<:Ativado:568527486712021033>";
    if(autorole === false) autorole = "<:Desativado:568527653162844203>";
                

    message.channel.startTyping()

    var embedConfig = new Discord.RichEmbed()

    .setTitle('<:Config:588728023273177105> > CONFIGURAÇÕES DISPONÍVEIS')
        .setThumbnail('https://images-ext-2.discordapp.net/external/yvsANoh4AKxWd6oRfvMmxz6V7HFl0aFMxB5ZA6TITFc/https/cdn.discordapp.com/attachments/507373669413027852/515758956962906113/PainelK.png?width=473&height=473')
            .setColor('#00b6ff')
             .setFooter(message.author.username, message.author.displayAvatarURL)
                .addField(`**Ant-Invite ${antInv}**`, `Use \`${prefixo}ant-invite\`, **módulo** gerado para aqueles que desejam bloquear convites de **servidores**`)
                    .addField(`**Welcome ${welcome}**`, `Use \`${prefixo}welcome\`, **módulo** gerado para configurar a mensagem de **bem-vindo**`)
                        .addField(`**Saída ${saida}**`, `Use \`${prefixo}saida\`, **módulo** gerado para configurar a mensagem de **saída**`)
                            .addField(`**Autorole ${autorole}**`, `Use \`${prefixo}autorole\`, **módulo** gerado para configurar o **cargo** que o membro ganhará ao entrar no **servidor**`)
                                .addField(`**Prefixo - Atual \`[${servidor.prefix}]\`**`, `Use \`${prefixo}prefixo\`, altera meu prefixo no **servidor**`)
                                    .setColor('#36393e')
                                    
    message.channel.stopTyping()
    message.channel.send(embedConfig)

    }).catch({})
}

exports.config = {
    name: "config",
    aliases: ['c', 'painel', 'configuração'],
    description: "configuração do Bot que liga com o servidor",
    category: 'bot'
}