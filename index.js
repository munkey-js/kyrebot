
const express = require('express'),
keepalive = require('express-glitch-keepalive'),
app = express(),
Discord = require("discord.js"),
client = new Discord.Client(),
config = require("./config.json"),
weather = require("weather-js"),
ms = require("ms"),
yoMamma = require('yo-mamma').default,
got = require('got');

client.on("debug", data => console.log(data));

client.login('');

app.use(keepalive);

app.get('/', (req, res) => {
res.json('Hey mate the bot should be onLINEZ');
});
app.get("/", (request, response) => {
response.sendStatus(200);
});
app.listen(process.env.PORT);

client.on("ready", () => {

client.generateInvite(['ADMINISTRATOR']).then(generatedInvite => {
    const moment = require('moment');
    console.log(`[${moment.utc(client.createdAt).format("dddd h:mm:ss a, MMMM Do YYYY")}] [System] Hello ${client.user.tag}`);
    console.log(`[${moment.utc(client.createdAt).format("dddd h:mm:ss a, MMMM Do YYYY")}] [System] Serving [${client.guilds.size}] Guilds & [${client.users.size}] Users!`);
    console.log(`[${moment.utc(client.createdAt).format("dddd h:mm:ss a, MMMM Do YYYY")}] [System] Generated Invite ${generatedInvite}`);

});

client.user.setActivity(`with my code`, {
    type: `PLAYING`

});
});

client.on('guildMemberAdd', member => {
let welcomeChannel = message.guild.channels.find(channel1 => channel1.name === 'welcome');
if (!removeChannel) return;

let welcomeEmbed = new Discord.RichEmbed()
    .setAuthor(`Welcome ${member}, Happy to see you!`, `${member.user.displayAvatarURL}`)
    .addField(`Have A Nice Day`, `Happy to see that you came!`)
    .setColor("eb9b34")
    .setFooter(`Made By Panten#0900`, client.user.displayAvatarURL);

welcomeChannel.send(welcomeEmbed);
});

client.on('guildMemberRemove', member => {
    const moment = require ('removeChannel')
let removeChannel = message.guild.channels.find(channel1 => channel1.name === 'welcome');
if (!removeChannel) return;

let removeEmbed = new Discord.RichEmbed()
    .setAuthor(`👋 Goodbye ${member}, Sad to see you go!`, `${member.user.displayAvatarURL}`)
    .addField(`Have A Nice Day`, `Sad to see that you're going`)
    .setColor("eb9b34")
    .setFooter(`Made By Panten#0900`, client.user.displayAvatarURL);

removeChannel.send(removeEmbed);
});

const {
CommandHandler
} = require(`djs-commands`);
const CH = new CommandHandler({
folder: __dirname + '/commands/',
prefix: ["!", "?", "-"]
});


client.on(`message`, (message) => {
let args = message.content.toLowerCase().split(/\s+/);
let command = args[0];
let member = message.author;
let cmd = CH.getCommand(command);
if (!cmd) return;
const moment = require('moment');
try {
    cmd.run(client, message, args, member);
} catch (e) {
    console.log(e);
}
});