module.exports = class catFact {
    constructor() {
        this.name = 'catFact'
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

            const request = require('superagent');
            request.get('https://catfact.ninja/fact').end((err, res) => {
              if (!err && res.status === 200) {
                message.channel.send(res.body.fact)
              } else {
                console.log(`REST call failed: ${err}`);
              }
            });
    }
}