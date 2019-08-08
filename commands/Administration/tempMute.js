module.exports = class Tempmute {
    constructor() {
        this.name = 'tempMute'
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

            if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You dont have permission to use this command.");
            let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
            if (!tomute) return message.reply("Please mention a user.");
            if (tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("Can't mute them!");
            let reason = args.slice(2).join(" ");
            if (!reason) reason = "no reason provided"

            let muterole = message.guild.roles.find(`name`, "muted");
            //start of create role
            if (!muterole) {
                try {
                    muterole = await message.guild.createRole({
                        name: "muted",
                        color: "#000000",
                        permissions: []
                    })
                    message.guild.channels.forEach(async (channel, id) => {
                        await channel.overwritePermissions(muterole, {
                            SEND_MESSAGES: false,
                            ADD_REACTIONS: false
                        });
                    });
                } catch (e) {
                    console.log(e.stack);
                }
            }
            //end of create role
            let mutetime = args[1];
            if (!mutetime) return message.reply("You didn't specify a time!");

            message.delete().catch(O_o => {});

            try {
                await tomute.send(`Hi! You've been muted for ${mutetime}. Sorry!`)
            } catch (e) {
                message.channel.send(`A user has been muted... but their DMs are locked. They will be muted for ${mutetime}`)
            }

            let muteembed = new Discord.RichEmbed()
                .setDescription(`Mute executed by ${message.author}`)
                .setColor("#eb9b34")
                .addField("Muted User", tomute)
                .addField("Muted in", message.channel)
                .addField("Time", message.createdAt)
                .addField("Length", mutetime)
                .addField("Reason", reason);

            let channel = message.guild.channels.find(c => c.name === "logs");
            if (!channel) return message.reply("Please create a incidents channel first!");
            channel.send(muteembed);

            await (tomute.addRole(muterole.id));

            setTimeout(function () {
                tomute.removeRole(muterole.id);
            }, ms(mutetime));
    }
}