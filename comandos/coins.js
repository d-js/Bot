const Discord = require('discord.js'); // Api do Discord
const database = require('../config/database.js'); // Banco de Dados.

module.exports.run = (bot, message) => { // Exportação do Comando.
    database.Users.findOne({ // Aqui pedimos para que o banco de dados encontre o usuário que digitou o comando
        _id: message.author.id // _id que definimos la na database. Aqui definimos que para cada usuário terá coins separados.
    }, function (error, usuario) { // Função
        if (usuario) { // Se o usuário estiver registrado o bot retorna uma mensagem com as informações obtidas.
            message.channel.send(`Seu total de coins é: **${usuario.coins}**`) // Coins que a pessoa tem.
        } else { // Se o usuário não estiver registrada no banco de dados, o bot enviara uma mensagem no canal dizendo que o registro foi concluido.
            let saveUser =  database.Users({
                _id: message.author.id, // Aqui o bot pega o ID da Pessoa que será registrada.
                coins: 0, // Define que está pessoa terá 0 coins quando for registrada.
                timedaily: '0000000000000' // Aqui ficara o tempo que o usuário terá depois que coletar os coins diários.
            });
            saveUser.save() //Salvamos aqui no Banco de Dados as informações obtidas.
            message.channel.send('**REGISTRO FEITO** => Use o comando novamente.') // Bot envia no canal a mensagem.
        }
    });
}
// É obrigatoriamente ter em todo comando estas configurações, o name do comando e os aliases. SE NÃO TER ISSO CAUSARÁ ERRO NO COMANDO.
module.exports.config = { // Exportação do comando configurações
    name: 'coins', // Nome do comando.
    aliases: ['moedas', 'money'] // Aliases do comando. Vamos chamar de palavras claves.
}