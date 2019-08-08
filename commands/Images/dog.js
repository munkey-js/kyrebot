module.exports = class Dog {
    constructor() {
        this.name = 'dog'
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
              .get(`https://dog.ceo/api/breeds/image/random`)
            //console.log(body.file)
            if (!{
                body
              }) return message.channel.send("I broke! Try again.")
        
            let dEmbed = new Discord.RichEmbed()
              .setColor("#eb9b34")
              .setAuthor(`Kyre DOGS!`, client.user.displayAvatarURL)
              .setImage(body.message)
              .setTimestamp()
              .setFooter(`Kyre`, client.user.displayAvatarURL)
        
            message.channel.send({
              embed: dEmbed
            })
        
            msg.delete();
    }
}