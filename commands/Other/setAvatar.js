module.exports = class setAvatar {
    constructor() {
        this.name = 'setAvatar'
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

            if (message.author.id === '262420716152946688') {
                let avatarurl = args.join(" ");
                if (!avatarurl) return message.channel.send('please provide a url.'), message.react('❌')
        }
    }
}