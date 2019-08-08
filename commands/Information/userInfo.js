module.exports = class info {
    constructor() {
        this.name = 'info'
        this.alias = []
        this.usage = ''
    }
    async run(client, message, args, member) {
        const express = require('express'),
            keepalive = require('express-glitch-keepalive'),
            app = express(),
            Discord = require("discord.js"),
            client = new Discord.Client(),
            config = require("../../config.json"),
            weather = require("weather-js"),
            ms = require("ms"),
            yoMamma = require('yo-mamma').default,
            got = require('got');

            let inline = true
            let resence = true
            const status = {
              online: "<:online:> Online",
              idle: "<:idle:> Idle",
              dnd: "<:dnd:> Do Not Disturb",
              offline: "<:offline:> Offline/Invisible"
            }
        
            const member = message.mentions.members.first() || message.guild.members.get(args[0]) || message.member;
            let target = message.mentions.users.first() || message.author
        
            if (member.user.bot === true) {
              let bot = "<:bottag:425631858265423883> Yes";
            } else {
               let bot2 = "<:user:424958082691629057> No";
            }
        
            let embed = new Discord.RichEmbed()
              //.setAuthor(member.user.username)
              .setThumbnail((target.displayAvatarURL))
              .setColor("#00ff00")
              .addField("Full Username", `${member.user.tag}`, inline)
              .addField("ID", member.user.id, inline)
              .addField("Nickname", `${member.nickname !== null ? ` Nickname: ${member.nickname}` : "None"}`, true)
              .addField("Status", `${status[member.user.presence.status]}`, inline, true)
              .addField("Roles", `${member.roles.filter(r => r.id !== message.guild.id).map(roles => `\`${roles.name}\``).join(" **|** ") || "<:no:425632070036094986> No Roles"}`, true)
              .addField("Joined Discord At", member.user.createdAt)
              .setFooter(`Information about ${member.user.username}`)
              .setTimestamp()
        
            message.channel.send(embed);
        
            message.delete();
    }
}