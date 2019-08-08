module.exports = class New {
    constructor() {
        this.name = 'new'
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

            if (!message.guild.me.hasPermission("MANAGE_CHANNELS")) return message.channel.send('Sorry Mate, I dont have permissions to manage channels, contact a server admin.')

            let category = message.guild.channels.find(c => c.name == "tickets" && c.type == "category")
            if (!category) category = await message.guild.createChannel("tickets", {
                type: "category"
            })

            let randomnumber = message.author.tag.replace(/[^a-zA-z0-9 ]/g, "").trim().toLowerCase()
            if (message.guild.channels.find(c => c.name.replace(/-/g, " ") == category)) return message.channel.send('You already have a ticket.')


            let everyone = message.guild.roles.find(r => r.name == "@everyone")
            let support_ticket = message.guild.roles.find(r => r.name == "support team")
            if (!support_ticket) return message.channel.send("There are no members with the role: **support team**, to fix this issue contact a server admin.")

            message.guild.createChannel(randomnumber, {
                type: "text",
                permissionOverwrites: [{
                        id: everyone.id,
                        deny: ["VIEW_CHANNEL"]
                    },
                    {
                        id: support_ticket.id,
                        allow: ["VIEW_CHANNEL", "SEND_MESSAGES"]
                    },
                    {
                        id: message.author.id,
                        allow: ["VIEW_CHANNEL", "SEND_MESSAGES"]
                    }
                ],
                parent: category.id
            }).then(randomnumber => message.channel.send(`the ticket was created. ${randomnumber}`)).catch(error => message.channel.send(`ERROR. ${error}`))
            message.delete()
    }
}