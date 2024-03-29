module.exports = class lockdown {
    constructor() {
        this.name = 'lockdown'
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

            if (!message.member.permissions.has("MANAGE_CHANNELS")) return message.channel.send("Sorry, you do not have permission to perform the antiraid command.");
            if (!message.guild.member(client.user).hasPermission('MANAGE_CHANNELS')) return message.reply('Sorry, i dont have the perms to do this cmd i need MANAGE_CHANNELS. :x:')
            const ms = require('ms');
            if (!client.lockit) client.lockit = [];
            const time = args.join(' ');
            const validUnlocks = ['release', 'unlock', 'stop', 'off'];
            if (!time) return message.reply('You must set a duration for the lockdown in either hours, minutes or seconds');

            if (validUnlocks.includes(time)) {
                message.channel.overwritePermissions(message.guild.id, {
                    SEND_MESSAGES: true
                }).then(() => {
                    message.channel.send('Lockdown lifted.');
                    clearTimeout(client.lockit[message.channel.id]);
                    delete client.lockit[message.channel.id];
                }).catch(error => {
                    console.log(error);
                });
            } else {
                message.channel.overwritePermissions(message.guild.id, {
                    SEND_MESSAGES: false
                }).then(() => {
                    message.channel.send(`Channel locked down for ${ms(ms(time), { long:true })}`).then(() => {

                        client.lockit[message.channel.id] = setTimeout(() => {
                            message.channel.overwritePermissions(message.guild.id, {
                                SEND_MESSAGES: true
                            }).then(message.channel.send('Lockdown lifted.'))
                            delete client.lockit[message.channel.id];
                        }, ms(time));
                    }).catch(error => {
                        console.log(error);
                    });
                });
            }
    }
}