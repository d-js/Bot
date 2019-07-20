console.log('[OPEN] > LIGANDO O BOT...')

const Discord = require("discord.js");
const bot = new Discord.Client({
  disableEveryone: true
})
const mongoose = require("mongoose");
const config = require("./config/config.json")
const database = require('./config/database.js');
cooldown = new Set();
let cdseconds = 5;

const Enmap = require("enmap")
const fs = require("fs")
bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();

//chat_console
let y = process.openStdin()
y.addListener("data", res => {
  let x = res.toString().trim().split(/ +/g)
  bot.channels.get("589930402722873349").send(x.join(" "));
});

fs.readdir("./eventos/", (err, files) => {
  if (err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if (jsfile.length <= 0) {
    console.log("[EVENTOS] > NÃO FOI ENCONTRADO NENHUM EVENTO.")
    return;
  }
  console.log(`[EVENTOS] > FORAM CARREGADOS UM TOTAL DE ${jsfile.length} EVENTOS.`)
  jsfile.forEach(f => {
    const eventName = f.split('.')[0]
    const event = require(`./eventos/${f}`)
    bot.on(eventName, event.bind(null, bot))

  });

  bot.on('error', (err) => {
    console.log('error', err)
  });
});

fs.readdir('./comandos/', function (err, f) {

  try {
      let file = f.filter(f => f.split('.').pop() === 'js')
      if (file.length < 0) {
          return console.log('[COMANDOS] > NÃO FOI POSSÍVEL ENCONTRAR COMANDOS')
      }
      console.log(`[COMANDOS] > FORAM CARREGADOS UM TOTAL DE ${file.length} COMANDOS.`)
      file.forEach(function (f, i) {
          let local = require(`./comandos/${f}`)
          bot.commands.set(local.config.name, local)
          local.config.aliases.forEach(function (alias) {
              bot.aliases.set(alias, local.config.name)
          })
      })
  } catch (err) {
      console.error(err)
  }
})

bot.on("message", (message) => {

if (message.content.startsWith("b.program")) {
  if (!message.guild.members.get(message.author.id).roles.find("name", '💻 PROGRAMADOR(a) 💻')) {
    message.reply("**Categoria liberada.**");
    message.guild.members.get(message.author.id).addRole("599666250032873512");
  } else {
    message.reply("**Categoria removida.**");
    message.guild.members.get(message.author.id).removeRole("599666250032873512");
}}
});


bot.login(process.env.TOKEN)
