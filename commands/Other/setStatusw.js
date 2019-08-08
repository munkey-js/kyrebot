module.exports = class setStatusW {
    constructor() {
        this.name = 'setStatusw'
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
                let input = args.join(' ');
                if (!input) return message.channel.send('please provide a message.'), message.react('❌')

                client.user.setActivity(input, {
                    type: 'WATCHING'
                });
                message.react('✅')
            }
    }
}