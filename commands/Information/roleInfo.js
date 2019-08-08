module.exports = class RoleInfo {
    constructor() {
        this.name = 'roleInfo'
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

            let inline = true

            let role = args.join(` `)
            if (!role) return message.reply("Specify a role!");
            let gRole = message.guild.roles.find(`name`, role);
            if (!gRole) return message.reply("Couldn't find that role.");

            const status = {
                false: "No",
                true: "Yes"
            }

            let roleemebed = new Discord.RichEmbed()
                .setColor("#00ff00")
                .addField("ID", gRole.id, inline)
                .addField("Name", gRole.name, inline)
                .addField("Mention", `\`<@${gRole.id}>\``, inline)
                .addField("Hex", gRole.hexColor, inline)
                .addField("Members", gRole.members.size, inline)
                .addField("Position", gRole.position, inline)
                .addField("Hoisted", status[gRole.hoist], inline)
                .addField("Mentionable", status[gRole.mentionable], inline)
                .addField("Managed", status[gRole.managed], inline)

            message.channel.send(roleemebed);
    }
}