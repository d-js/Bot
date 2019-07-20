const Discord = require("discord.js");

exports.run = async (bot, args, message) => {

    if (message.author.id !== "396298242025062400") return message.channel.send("⛔ **ACCESSO NEGADO**");

    try {
        delete require.cache[require.resolve(`./${args[0]}.js`)];
    } catch (e) {

        return message.channel.send(`Não foi possivel reiniciar o seguinte comando: ${args[0]}.js`);
    }

    message.channel.send(`<a:8104LoadingEmote:570701318390546452> ${args[0]}.js **Foi recarregado com sucesso!**`);


}

exports.config = {
    name: "reload",
    aliases: []
}