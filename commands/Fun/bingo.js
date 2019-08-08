module.exports = class Bingo {
    constructor() {
        this.name = 'bingo'
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

            let y = Math.floor(Math.random() * (Math.floor(75) - Math.ceil(1) + 1)) + Math.ceil(1);
            let x = null;
        
            if (y < 15) {
              x = "B";
            } else if (y < 30) {
              x = "I";
            } else if (y < 45) {
              x = "N";
            } else if (y < 60) {
              x = "G";
            } else {
              x = "O";
            }
        
            message.channel.send(x + y);
          };
              

    }
