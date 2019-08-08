module.exports = class Slots {
    constructor() {
        this.name = 'slots'
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

            let slots = ["🍎", "🍌", "🍒", "🍓", "🍈"];
            let result1 = Math.floor((Math.random() * slots.length));
            let result2 = Math.floor((Math.random() * slots.length));
            let result3 = Math.floor((Math.random() * slots.length));
            let name = message.author.displayName;
            let icon = message.author.displayAvatarURL;
        
            if (slots[result1] === slots[result2] && slots[result3]) {
              let wEmbed = new Discord.RichEmbed() // Remember to use MessageEmbed if you use master
                .setFooter('You won!', icon)
                .setTitle(':slot_machine: Slots :slot_machine:')
                .addField('Result:', slots[result1] + slots[result2] + slots[result3], true)
                .setColor(0xF4E842)
                .setTimestamp()
              message.channel.send(wEmbed);
        
            } else {
        
              let lEmbed = new Discord.RichEmbed()
                .setFooter('You lost!', icon)
                .setTitle(':slot_machine: Slots :slot_machine:')
                .addField('Result:', slots[result1] + slots[result2] + slots[result3], true)
                .setColor(0xF4E842)
                .setTimestamp()
              message.channel.send(lEmbed);
            }
    }
}