module.exports = class Kick {
    constructor() {
        this.name = 'kick'
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

            if (!message.guild.me.hasPermission("KICK_MEMBERS")) return message.react('❌'), message.channel.send('I don\'t have permissions to kick members. please contact a server admin')

            if (!message.member.hasPermission("KICK_MEMBERS")) return message.react('❌'), message.channel.send('Sorry, but you don\'t have permission to kick members.')


            let member = message.mentions.members.first()
            if (!member) return message.react('❌'), message.channel.send('please provide a user to kick.')

            if (!member.kickable)
                return message.react('❌'), message.channel.send('I cannot ban that user. they could be a admin, be higher than me, etc.')

            let reason = args.slice(1).join(' ');
            if (!reason) reason = "no reason provided."



            member.send(`Hey, mate you\'ve been kicked in ${message.guild.name} by ${message.author.tag} because: "${reason}" 🇫`);
            await delay(500); // 100 msec = 0.1 seconds
            member.kick(reason)
            message.channel.send(`${member} was successfully kicked by ${message.author.tag} for: "${reason}", can we get a f in the chat?`)
            message.react('🇫'), message.react('✅')

    }
}