const database = require("../config/database.js"); 

module.exports = (bot, guild) => {

try {

database.Guilds.findOne({_id: guild.id}, function(servro, servidor) {

if(!servidor) {
  var saveG = new database.Guilds({_id: guild.id})
    saveG.save()
  }
}).catch(e => {
  console.log('Mongoose Duplicada')
})

bot.user.setPresence({game: { name: `Netflix`, type: 3, url: "https://www.twitch.tv/dean"} });
console.log(`Entrei na Guild:\nInformações da Guild\nNome: ${guild.name}\nID: ${guild.id}\nMembros: ${guild.memberCount}`);

} catch (err) {

console.log(`Erro no meu evendo de GuildCreate - Erro:\n${err}`)
    }

}