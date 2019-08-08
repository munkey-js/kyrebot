module.exports = class ServerInfo {
    constructor() {
        this.name = 'serverInfo'
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

            const verlvl = {
                0: "None",
                1: "Low",
                2: "Medium",
                3: "(╯°□°）╯︵ ┻━┻",
                4: "(ノಠ益ಠ)ノ彡┻━┻"
            }

            let inline = true
            let sicon = message.guild.iconURL;
            let serverembed = new Discord.RichEmbed()
                .setColor("#eb9b34")
                .setThumbnail(sicon)
                .setAuthor(message.guild.name)
                .addField("**Name**", message.guild.name, inline)
                .addField("**ID**", message.guild.id, inline)
                .addField("**Owner**", message.guild.owner, inline)
                .addField("**Region**", message.guild.region, inline)
                .addField("**Verification Level**", verlvl[message.guild.verificationLevel], inline)
                .addField("**Members**", `${message.guild.memberCount}`, inline)
                .addField("**Roles**", message.guild.roles.size, inline)
                .addField("**You Joined**", message.member.joinedAt, inline)

            message.channel.send(serverembed);

            message.delete();
    }
}