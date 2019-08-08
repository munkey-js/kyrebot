module.exports = class Flip {
    constructor() {
        this.name = 'flip'
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

            const mapping = '¡"#$%⅋,)(*+\'-˙/0ƖᄅƐㄣϛ9ㄥ86:;<=>?@∀qƆpƎℲפHIſʞ˥WNOԀQɹS┴∩ΛMX⅄Z[/]^_`ɐqɔpǝɟƃɥᴉɾʞlɯuodbɹsʇnʌʍxʎz{|}~';

            const OFFSET = '!'.charCodeAt(0);
        
            if (args.length < 1) return message.channel.send("You must provide text to flip!");
        
            message.channel.send(
              args.join(' ').split('')
              .map(c => c.charCodeAt(0) - OFFSET)
              .map(c => mapping[c] || ' ')
              .reverse().join('')
            );
        
          }
              
    }
