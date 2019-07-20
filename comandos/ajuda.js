const Discord = require('discord.js');
const config = require("../config/config.json")
const prefix = config.prefix

exports.run = async (bot, args, message) => {

    if(args[0] == "ajuda") return message.channel.send(`Apenas faça ${prefix}ajudar em vez disso.`)

if(args[0]) {
    let command = args[0];
    if(bot.commands.has(command)) {
        command = bot.commands.get(command);
        var Shembed = new Discord.RichEmbed()
        .setColor('#4286f4')
        .setAuthor('Bot_Ajuda', message.guild.iconURL)
        .setDescription(`O meu prefixo é: ${prefix}\n\n **Comandos:** ${command.config.name}\n**Descrição:** ${command.config.description || "Não tem Descrição"}\n **Uso:** ${command.config.usage || "Não Usa"}\n**Accessable by:** ${command.config.acessableby || "Membros"}\n**Aliases:** ${command.config.noalias || command.config.aliases}\n**Categoria:** ${command.config.category}\n **Grupo:** ${command.config.group}`)
        message.channel.send(Shembed)
    }}

if(!args[0]) {
    message.delete();
    let embed = new Discord.RichEmbed()
    .setAuthor('Comando Ajuda!', message.guild.iconURL)
    .setColor('#4286f4')
    .setDescription(`${message.author.username}, verifique o seu privado, a ajuda está lá :wink:!`)

    let Sembed = new Discord.RichEmbed()
    .setColor('#4286f4')
    .setAuthor('Bot Ajuda', message.guild.iconURL)
    .setThumbnail(bot.user.displayAvatarURL)
    .setDescription(`Olá aq estão os meus comandos disponivel\n O meu prefixo é: ${prefix}`)
    .addField('Comando Util ➥ <:administrador:593248113129553920>', `\`${bot.commands.filter(c => c.config.category === 'util').map(c => c.config.name).join(",  ")}\``)
    .addField('Comando Owner ➥ 👑', `\`${bot.commands.filter(c => c.config.category === 'owner').map(c => c.config.name).join(",  ")}\``)
    .addField('Comando Bot ➥ <:botTag:593247819461165144>', `\`${bot.commands.filter(c => c.config.category === 'bot').map(c => c.config.name).join(",  ")}\``)
    .addField('Comando Config ➥ <:Config:589932675448569867>', `\`${bot.commands.filter(c => c.config.category === 'config').map(c => c.config.name).join(",  ")}\``)
    .addField('Comando Trafico ➥ 🚬', `\`${bot.commands.filter(c => c.config.category === 'trafico').map(c => c.config.name).join(",  ")}\``)
    .addField('Comando RolePlay ➥ <:Roleplay:595469614717337620>', `\`${bot.commands.filter(c => c.config.category === 'rp').map(c => c.config.name).join(",  ")}\``)
    .addField('Comando Diversão ➥ 🎉', `\`${bot.commands.filter(c => c.config.category === 'diversão').map(c => c.config.name).join(",  ")}\``)
    .addField('Comando Economia ➥ 💰', `\`${bot.commands.filter(c => c.config.category === 'economia').map(c => c.config.name).join(",  ")}\``)
    .addField('Comando Musica ➥ 🎵', `\`${bot.commands.filter(c => c.config.category === 'musica').map(c => c.config.name).join(",  ")}\``)
    .setFooter("Bot Ajuda 2k19", bot.user.displayAvatarURL)
    message.channel.send(embed).then(m => m.delete(10000));
    message.author.send(Sembed)
}}



exports.config = {
    name: "ajuda",
    aliases: ['a','h','help', 'commands', 'comandos'],
    description: "Onde os Membros usam meus comandos",
    noaliases: "lock",
    category: 'util',
    accessableby: "Membros",
    usage: "b.ajuda <comando>",
    group: 'util'
}
