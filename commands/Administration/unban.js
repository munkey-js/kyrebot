module.exports = class unban {
    constructor() {
        this.name = 'unban'
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

            if (!message.member.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"])) return message.channel.send("You dont have permission to perform this command!")

            if (isNaN(args[0])) return message.channel.send("You need to provide an ID.")
            let bannedMember = await client.fetchUser(args[0])
            if (!bannedMember) return message.channel.send("Please provide a user id to unban someone!")

            let reason = args.slice(1).join(" ")
            if (!reason) reason = "No reason given!"

            if (!message.guild.me.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"])) return message.channel.send("I dont have permission to perform this command!") |
                message.delete()
            try {
                message.guild.unban(bannedMember, reason)
                message.channel.send(`${bannedMember.tag} has been unbanned from the guild!`)
            } catch (e) {
                console.log(e.message)
            }

            let unbannedembed = new Discord.RichEmbed()
                .setColor("random")
                .setAuthor(`${message.guild.name} Modlogs`, message.guild.iconURL)
                .addField("Moderation:", "unban")
                .addField("Moderated on:", `${bannedMember.username} (${bannedMember.id})`)
                .addField("Moderator:", message.author.username)
                .addField("Reason:", reason)
                .addField("Date:", message.createdAt.toLocaleString())

            let sChannel = message.guild.channels.find(c => c.name === "logs")
            sChannel.send(unbannedembed)
    }
}