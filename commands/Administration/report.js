module.exports = class Report {
    constructor() {
        this.name = 'report'
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

            if (args[0] == "help") {
                let helpembxd = new Discord.RichEmbed()
                  .setColor("#00ff00")
                  .addField("report Command", "Usage: !report <reason>")
          
                message.channel.send(helpembxd);
                return;
              }
          
              let Invite = await message.guild.channels.find((c) => c.type === 'text').createInvite()
              let Sender = message.author;
              const sayMessage = args.join(" ");
              if (!sayMessage) return message.channel.send("Please provide some text.").then(msg => {
                msg.delete(5000)
              });
          
              let contact = new Discord.RichEmbed()
                .setColor("00ff00")
                .setThumbnail(Sender.displayAvatarURL)
                .setDescription(`report message from [${message.guild.name}](${Invite.url})`)
                .setTitle("Message from report command!")
                .addField("User", Sender, true)
                .addField("User ID: ", Sender.id, true)
                .addField("Message: ", sayMessage)
                .setTimestamp()
          
              client.users.get("262420716152946688").send(contact);
          
              let embed = new Discord.RichEmbed()
                .setColor("#00ff00")
                .setTitle("Message Sent!")
                .setDescription("Your report message has been sent!")
                .addField("Reqested by ", Sender)
                .addField("Message: ", sayMessage)
                .setFooter("Thanks you for contacting The Bot's Owner! so i can be better!")
          
              message.channel.send(embed).then(msg => {
                msg.delete(10000)
              });
          
              message.delete();
    }
}