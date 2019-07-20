const database = require("../config/database.js"); 

module.exports = (bot, guild) => {

try {

  database.Guilds.deleteOne({_id: guild.id})

    console.log(`Removido da Guild:\nInformações da Guild\nNome: ${guild.name}\nID: ${guild.id}\nMembros: ${guild.memberCount}`);
    dean.user.setPresence({game: { name: `Bot | b.ajuda`, type: 1, url: "https://www.twitch.tv/dean"} });
    
} catch (err) {
    console.log(`Erro no meu evendo de GuildDelete - Erro:\n${err}`)
  }
}
