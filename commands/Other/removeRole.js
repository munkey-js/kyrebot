module.exports = class removeRole {
    constructor() {
        this.name = 'removeRole'
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

            if (command === "removerole") {
                if (!message.member.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"])) return message.channel.send("You dont have permission to perform this command!")
    
                let rMember = message.mentions.members.first() || message.guild.members.find(m => m.user.tag === args[0]) || message.guild.members.get(args[0])
                if (!rMember) return message.channel.send("Please provide a user to remove a role too.")
                let role = message.guild.roles.find(r => r.name == args[1]) || message.guild.roles.find(r => r.id == args[1]) || message.mentions.roles.first()
                if (!role) return message.channel.send("Please provide a role to remove from said user.")
                let reason = args.slice(2).join(" ")
                if (!reason) return message.channel.send("Please provide a reason")
    
                if (!message.guild.me.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"])) return message.channel.send("I don't have permission to perform this command.")
    
                if (!rMember.roles.has(role.id)) {
                    return message.channel.send(`${rMember.displayName}, doesnt have the role!`)
                } else {
                    await rMember.removeRole(role.id).catch(e => console.log(e.message))
                    message.channel.send(`The role, ${role.name}, has been removed from ${rMember.displayName}.`)

                }
            }
        }
    }
