require('dotenv').config()
const { connect, Schema, model } = require('mongoose')
const discord = require('discord.js')

connect(process.env.DB, { // Aqui está o link do banco de dados que no caso seria a conexão do bot com o site da mongo.
    useNewUrlParser: true
}, (err) => {
  if (err) return console.log('[DataBase] > ERRO AO CONECTAR Á DATABASE\n', err)
  console.log('[DataBase] > CONECTADO COM SUCESSO')
})

var User = new Schema({
  _id: {
    type: String
  },
  dev: {
    type: Boolean,
    default: false
  },
  sup: {
    type: Boolean,
    default: false
  },
  dzn: {
    type: Boolean,
    default: false
  },
  owner: {
    type: Boolean,
    default: false
  },
  subowner: {
    type: Boolean,
    default: false
  }, 
  coins: { // Coins que o usuário possui.
      type: Number, // Número
      default: 0 // Padrão de coins que a pessoa terá queando for registrada pelo bot.
  },
  timedaily: { // Tempo definido para coletar os coins diários.
      type: String, // Texto
      default: '0000000000000' // Tempo
  }

})

var Guild = new Schema({
    _id: {
      type: String
    }
})

var Comando = new Schema({
    _id: {
      type: String
    }
})

var Bot = new Schema({
    _id: {
    type: String
    }
  })

  var Guilds = model('Guilds', Guild)
  var Users = model('Users', User)
  var Comandos = model('Comandos', Comando)
  var BotConfig = model('BotConfig', Bot)
  exports.Guilds = Guilds
  exports.Users = Users
  exports.Comandos = Comandos
  exports.BotConfig = BotConfig