const Discord = require("discord.js");
const dateformat = require('dateformat');
var now = new Date();
var random = require('random-int');
const PREFIX = "b."

// This is the brackets in which the command goes in
module.exports.run = async (bot, args, message) => {
    if (!message.content.startsWith(PREFIX)) return;
    let staff = message.member.roles.find("name", "𝑀𝑜𝒹 ✊") || message.member.roles.find("name", "𝒜𝒹𝓂𝒾𝓃 ✊") || message.member.roles.find("name", "𝓞𝔀𝓷𝓮𝓻 💪");
    if(!message.member.roles.has(staff.id)) {
        return message.channel.send('You are not a staff member.');
        }
        if(args[0] == "help"){
            message.reply("Usage: >addnsfw <user>");
            return;
        };

        if(message.mentions.users.size === 0) {
               return message.channel.send("Please mention a user to add to the nsfw channel");
        }
        const memberzssz = message.mentions.members.first();
        let nsfwMember = message.guild.member(message.mentions.users.first());
        if(!nsfwMember) {``
             return message.channel.send("That user does not seem valid");
        }
        if (!message.guild.member(bot.user).hasPermission("MANAGE_ROLES")) {
            return message.channel.send("I don't have permission to perform this command");
        }
        nsfwMember.addRole(nsfwMember.guild.roles.find("name", "NSFW")).then(member => {
        message.delete()
        message.channel.send(`${member.user.username} was successfully added to the nsfw chat! `)});
        message.mentions.users.first().send("Hello! You've been added to the ``nsfw`` chat within Strand's Public Discord guild!")
        console.log("[StrandBot Log] " + memberzssz.user.username + ' was added to the nsfw text channel on Strands Public Discord')
        var nsfwembed = new Discord.RichEmbed()
        .setColor("#005ca3")
        .setAuthor(`Public Discord Modlogs`, message.guild.iconURL)
        .addField(" **User:**", `${memberzssz.user.tag}`)
        .addField(" **Action:** ", "NSFW Chat Add")
        .addField(" **Action By:** ", `${message.author.username}`)
        .addField(" **Date:**", `${dateformat(now, "dddd, mmmm dS, yyyy, h:MM:ss TT")}`)
        .addField("**Case ID:**", `#${random(1000, 10000)}`)
        memberzssz.guild.channels.find("name", "modlogs").send({ embed: nsfwembed })
}

module.exports.config = {
    name: 'addnsfw',
    aliases: ['ansfw']
};

// ADD DESCRIPTION AND SUCH
module.exports.help = {
    name: "addnsfw"

}