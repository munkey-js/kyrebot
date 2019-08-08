module.exports = class Cat {
    constructor() {
        this.name = 'cat'
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

            let msg = await message.channel.send("Generating...")
        
            let {
              body
            } = await superagent
              .get(`http://aws.random.cat/meow`)
            //console.log(body.file)
            if (!{
                body
              }) return message.channel.send("I broke! Try again.")
        
            let cEmbed = new Discord.RichEmbed()
              .setColor("#eb9b34")
              .setAuthor(`Kyre CATS!`, client.user.displayAvatarURL)
              .setImage(body.file)
              .setTimestamp()
              .setFooter(`Kyre`, client.user.displayAvatarURL)
        
            message.channel.send({
              embed: cEmbed
            })
        
            msg.delete();
    }
}