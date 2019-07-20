module.exports.run = (bot, args, message) => { // Exportação do Comando.
    message.channel.send(`Poing! \`${parseInt(bot.ping)}ms\`.`) // Ping do bot.
}

// É obrigatoriamente ter em todo comando estas configurações, o name do comando e os aliases. SE NÃO TER ISSO CAUSARÁ ERRO NO COMANDO.
module.exports.config = { // Exportação do comando configurações
    name: 'ping', // Nome do comando.
    aliases: ['poing', 'latencia'] // Aliases do comando. Vamos chamar de palavras claves.
}