module.exports = class Help {
    constructor() {
        this.name = 'help'
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

            let helpembed = new Discord.RichEmbed()
            .setTitle(`Moderation Commands`)
            .addField(`${prefix}ban`, `bans the mentioned user.`)
            .addField(`${prefix}kick`, `kicks the mentioned user.`)
            .addField(`${prefix}tempmute`, `mutes the mentioned user for a certain amount of time.`)
            .addField(`${prefix}unmute`, `un mutes the mentioned user.`)
            .addField(`${prefix}unban`, `unbans a user by their id.`)
            .addField(`${prefix}lockdown`, `locks down the channel the command was said in.`)
            .addField(`${prefix}purge`, `deletes the specifed amount of messages.`)
            .addField(`${prefix}ticket`, `makes a ticket.`)
            .addField(`${prefix}delticket`, `deletes the ticket.`)
            .addField(`${prefix}removerole`, `remove the mentioned role from the mentioned user.`)
            .addField(`${prefix}addrole`, `add the specifed role to the mentioned user.`)
            .addField(`${prefix}warn`, `warns the mentioned user`)
            .addField(`${prefix}serverinfo`, `tells you how many users there are in your server and more`)
            .addField(`${prefix}userinfo`, `tells you more about the mentioned user`)
            .setTimestamp()
            .setFooter('Made By Panete#0900')
            .setColor("#eb9b34")

        let helpembed2 = new Discord.RichEmbed()
            .setTitle(`Fun Commands`)
            .addField(`${prefix}8ball`, `8ball, say a message and it will respond to it.`)
            .addField(`${prefix}quiz`, `a fun little quiz.`)
            .addField(`${prefix}flip`, `flip the text you tell it to flip`)
            .addField(`${prefix}bingo`, `play bingo!`)
            .addField(`${prefix}catfact`, `facts about cats.`)
            .addField(`${prefix}say`, `says what you tell it to say.`)
            .addField(`${prefix}interestingmeme`, `as the title says, interesting memes.`)
            .addField(`${prefix}rps`, `rock paper scissors.`)
            .addField(`${prefix}avatar`, `the user you mentiond's avatar.`)
            .addField(`${prefix}dog`, `photos of dogs.`)
            .addField(`${prefix}cat`, `photos of cats.`)
            .addField(`${prefix}slots`, `slot, but on discord.`)
            .setTimestamp()
            .setFooter('Made By Panete#0900')
            .setColor("#eb9b34")
        
        let helpembed3 = new Discord.RichEmbed()
            .setTitle(`Extra Commands`)
            .addField(`${prefix}support`, `support server.`)
            .addField(`${prefix}report`, `report bugs and issues to bot owner.`)
            .addField(`${prefix}say`, `says what you tell it to say.`)
            .addField(`${prefix}invite`, `invite link for bot.`)
            .addField(`${prefix}weather`, `tells you the weather for the certain location you say.`)
            .addField(`There Are More Commands, But That Are Only Made For Bot Owner`, `Which Can Be Found In The Website`)
            .setFooter('Made By Panete#0900')
            .setTimestamp()
            .setColor("#eb9b34")
        let webembed = new Discord.RichEmbed()
        .setTitle(`Website Link Link 🤖`)
        .setColor("#eb9b34")
        .setDescription(`Check out the website for a better version of commands, click -> [🤖](https://kyre-bot.mobirisesite.com/)`)
        .setFooter("Kyre", client.user.avatarURL)
        .setColor("#2660bd")

          message.author.send({embed: helpembed}) 
          message.author.send({embed: helpembed2}) 
          message.author.send({embed: helpembed3}) 
          message.author.send({embed: webembed})
    }
}