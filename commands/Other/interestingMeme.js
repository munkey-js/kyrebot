module.exports = class interestingMeme {
    constructor() {
        this.name = 'interestingMeme'
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

            got('https://www.reddit.com/r/interestingasfuck/random.json').then(response => {
                let content = JSON.parse(response.body);
                var title = content[0].data.children[0].data.title;
                var amazeme = content[0].data.children[0].data.url;
                message.channel.send('**' + title + '**');
                message.channel.send(amazeme)
                    .then(sent => console.log(`command used by: ${message.author.tag} it most likely mw `))
            }).catch(console.error);
    }
}