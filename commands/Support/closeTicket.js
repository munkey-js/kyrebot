module.exports = class Close {
    constructor() {
        this.name = 'close'
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

            if (!message.guild.me.hasPermission("MANAGE_CHANNELS")) return message.channel.send('Sorry Mate, I dont have permissions to manage channels, contact a server admin.'), message.react('❌')
            let category = message.guild.channels.find(c => c.name == "tickets" && c.type == "category")
            let general = message.guild.channels.find(c => c.name == "general")
            if (!category) return message.channel.send("There are currently no tickets."), message.react('❌')

            let support_ticket = message.guild.roles.find(r => r.name == "support team")
            if (!support_ticket) return message.channel.send("Whoops! it seems there is not an role named **support team** thats pretty weird dude"), message.react('❌')
            if (!message.member.roles.has(support_ticket.id)) return message.channel.send('Sorry mate but only the support team (or people with the role) can close tickets.'), message.react('❌')
            if (!message.channel.parent || message.channel.parent.id != category.id) return message.channel.send("This channel does not belong to any ticket"), message.react('❌')
            return message.channel.delete().catch(error => message.channel.send(`An error occurred: ${error.message}`)), general.send(`Successfully deleted the ticket.`)
    }
}