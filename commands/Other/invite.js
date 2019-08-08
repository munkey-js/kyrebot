module.exports = class Invite {
    constructor() {
        this.name = 'invite'
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

            let inviteembed = new Discord.RichEmbed()
            .setTitle(`Website Link Link 🤖`)
            .setColor("#eb9b34")
            .setDescription(`Check out the website for a better version of commands, click -> [🤖](https://discordapp.com/oauth2/authorize?client_id=608079518519001088&permissions=8&scope=bot)`)
            .setFooter("Kyre", client.user.avatarURL)

            message.channel.send(inviteembed)
    }
}