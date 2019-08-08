module.exports = class unmute {
    constructor() {
        this.name = 'unmute'
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

            let unmutedembed3 = new Discord.RichEmbed()
            .setTitle(`**Unmuted**`)
            .setDescription(`you were unmuted by ${message.author}!`)
            .setFooter(`Made By Ryyan & Panete`)
            .setColor('#eb9b34')


        if (!message.member.hasPermission("MANAGE_ROLES") || !message.guild.owner) return message.channel.send("You dont have permission to use this command.");

        if (!message.guild.me.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"])) return message.channel.send("I don't have permission to add roles!")

        //define the reason and unmutee
        let mutee = message.mentions.members.first() || message.guild.members.get(args[0]);
        if (!mutee) return message.channel.send("Please supply a user to be muted!");

        let reason = args.slice(1).join(" ");
        if (!reason) reason = "No reason given"

        //define mute role and if the mute role doesnt exist then send a message
        let muterole = message.guild.roles.find(r => r.name === "muted")
        if (!muterole) return message.channel.send("That user is muted.")

        //remove role to the mentioned user and also send the user a dm explaing where and why they were unmuted
        mutee.removeRole(muterole.id).then(() => {
            message.delete()
            mutee.send(`Hello, you have been unmuted in ${message.guild.name} for: ${reason}`).catch(err => console.log(err))
            message.channel.send(`${mutee.user.username} was unmuted!`)
        })

        //send an embed to the modlogs channel
        let unmuteembed = new Discord.RichEmbed()
            .setColor("#eb9b34")
            .setAuthor(`${message.guild.name} Modlogs`, message.guild.iconURL)
            .addField("Moderation:", "unmute")
            .addField("Person who was moderated:", mutee.user.username)
            .addField("Moderator:", message.author.username)
            .addField("Reason:", reason)
            .addField("Date:", message.createdAt.toLocaleString())

        let sChannel = message.guild.channels.find(c => c.name === "logs")
        sChannel.send(unmuteembed)
        message.channel.send(unmutedembed3)
    }
}