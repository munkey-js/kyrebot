module.exports = class Quiz {
    constructor() {
        this.name = 'quiz'
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

            let quiz = [
                //Is there such a thing as a "moonquake"?
                {
                    q: 'What color is the sky?',
                    a: ['no color', 'invisible']
                },
                {
                    q: 'How many Moons would fit inside the Earth?',
                    a: ['49']
                },
                {
                    q: 'Who was the last person to walk on the Moon?',
                    a: ['Apollo 17 astronaut Eugene Cernan.']
                },
                {
                    q: 'Is there such a thing as a "moonquake"',
                    a: ['yes']
                },
                {
                    q: 'Name a soft drink brand.',
                    a: ['pepsi', 'coke', 'rc', '7up', 'sprite', 'mountain dew']
                },
                {
                    q: '“The attorney is my brother,” testified the accountant. But the attorney testified he did not have a brother. Who is lying?',
                    a: ['Neither one', 'Neither', 'no one', 'none']
                },
                {
                    q: 'Name a programming language.',
                    a: ['actionscript', 'coffescript', 'c', 'c++', 'c#', 'visual basic', 'perl', 'javascript', 'dotnet', 'crystal', 'lua', 'go', 'python', 'rust', 'ruby', 'java']
                },
            ];
            let options = {
                max: 1,
                time: 30050, // 30050 = 30 seconds and a half ms
                errors: ['time'],
            };

            let item = quiz[Math.floor(Math.random() * quiz.length)];
            await message.channel.send(item.q);
            try {
                let collected = await message.channel.awaitMessages(answer => item.a.includes(answer.content.toLowerCase()), options);
                let winnerMessage = collected.first();
                return message.channel.send({
                    embed: new Discord.RichEmbed()
                        .setAuthor(`Winner: ${winnerMessage.author.tag}`, winnerMessage.author.displayAvatarURL)
                        .setTitle(`Correct Answer: \`${winnerMessage.content}\``)
                        .setFooter(`Question: ${item.q}`)
                        .setColor('RANDOM')
                        .setTimestamp()
                })

            } catch (_) {
                return message.channel.send({
                    embed: new Discord.RichEmbed()
                        .setAuthor('No one got the answer in time!')
                        .setTitle(`Correct Answer(s): \`${item.a}\``)
                        .setFooter(`Question: ${item.q}`)
                        .setTimestamp()
                })

            }

    }
}