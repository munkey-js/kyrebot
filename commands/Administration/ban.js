module.exports = class Ban {
    constructor() {
        this.name = 'ban'
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

            if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.react('❌'), message.channel.send('I don\'t have permissions to ban members. please contact a server admin')


            if (!message.member.hasPermission("BAN_MEMBERS")) return message.react('❌'), message.channel.send('Sorry, but you don\'t have permission to ban members.')



            let member = message.mentions.members.first()
            if (!member) return message.react('❌'), message.channel.send('Hey! you didn\'t mention a user.')


            if (!member.bannable)
                return message.react('❌'), message.channel.send('Sorry, but i cannot ban that user.')

            let reason = args.slice(1).join(' ');
            if (!reason) reason = "no reason provided."


            member.send(`Hey, mate you\'ve been banned in ${message.guild.name} by ${message.author.tag} because: "${reason}" 🇫`);
            await delay(100); // 100 msec = 0.1 seconds
            member.ban(reason)
            message.channel.send(`${member} was successfully banned by ${message.author.tag} for: "${reason}", can we get a f in the chat?`)
            message.react('🇫'), message.react('✅')

    }
}