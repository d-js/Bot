const Discord = require('discord.js')
const config = require("../config/config.json")
const prefix = config.prefix

module.exports = (bot) => {

try {

  console.log(`[Ready] > ESTOU ATIVADO`)

  setTimeout(function () {
    
    console.log(`==================================\n\n[ BOT ] > ${bot.user.username} Iniciado Completo\n\n[ OWNER ] > ${bot.users.get('396298242025062400').tag}\n[ PREFIX ] > ${prefix}\n\n`)
    console.log(`==================================\n\n[Limite] > BOT | OPERANDO PARA:\n\nGuilds: ${bot.guilds.size}\nUsuários: ${bot.users.size}\nCanais: ${bot.channels.size}\n\n[Console] > BOT ONLINE/ATIVADO\n\n`)
    console.log(bot.guilds.map(g => `${g.name} - ${g.memberCount}`))
    
    }, 1000)
    
    ///////
    
    /*
        //  0 = Jogando
        //  1 = Transmitindo
        //  2 = Ouvindo
        //  3 = Assistindo
    */
      
    let presence = [{
    
        name: `Discord.js`,
        type: 3,
        url: "https://www.twitch.tv/alissongames112"
        }, {
        name: `Twitter | Em breve`, 
        type: 0, 
        url: "https://www.twitch.tv/alissongames112"
        }, {
        name: `Desenvolvimento`,
        type: 2,
        url: "https://www.twitch.tv/alissongames112"
        }, {
        name: `Ajudante, Moderação, Diversão, Eventos`,
        type: 1,
        url: "https://www.twitch.tv/alissongames112"
        }, {
        name: `Usuários: ${bot.users.size} Guilds: ${bot.guilds.size}`,
        type: 1,
        url: "https://www.twitch.tv/alissongames112"
        }, {
        name: `Site: | Em breve`,
        type: 1,
        url: "https://www.twitch.tv/alissongames112"
        }, {
        name: `Desenvolvido por: ${bot.users.get('396298242025062400').tag}`,
        type: 2,
        url: "https://www.twitch.tv/alissongames112"
        }, {
        name: `Quer Ajuda ou Acessa Meus Comandos use ${prefix}ajuda ou ${prefix}help`,
        type: 1,
        url: "https://www.twitch.tv/alissongames112"
    }]
                
    function setStatus() {
            let randomStatus = presence[Math.floor(Math.random() * presence.length)];
              bot.user.setPresence({game: randomStatus});
              bot.user.setStatus('online')
          }
    
      setStatus();
        setInterval(() => setStatus(), 10000); //{1000/1s}\{10000/10s}\{100000/1m}
          
    } catch (err) {
        console.log(`[Ready] > ERRO NO MEU EVENTO DE READY - ERRO:\n${err}`)
      }
    }


