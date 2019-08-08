module.exports = class botInfo {
    constructor() {
        this.name = 'botInfo'
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
            let bicon = client.user.displayAvatarURL;
            let usersize = client.users.size
            let chansize = client.channels.size
            let uptimxd = client.uptime
            let servsize = client.guilds.size
            let botembed = new Discord.RichEmbed()
                .setColor("#eb9b34")
                .setThumbnail(bicon)
                .addField("Bot Name", `${client.user.username}`, inline)
                .addField("Bot Owner", "<@262420716152946688>", inline)
                .addField("Servers", `🛡 ${servsize}`, inline)
                .addField("Channels", `📁 ${chansize}`, inline)
                .addField("Users", `${usersize}`, inline)
                .addField("Bot Library", "Discord.js", inline)
                .addField("Created On", client.user.createdAt)
                .setTimestamp()

            message.channel.send(botembed);
    }
}