const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.on('ready', () => {
    console.log('----------------');
  console.log('By iMrKBOOSH');
console.log('----------------');
console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(` ON ${client.guilds.size}  Servers `,"https://www.twitch.tv/")
client.user.setStatus(".")
});
client.on('guildMemberAdd', member=> {

    client.channels.get("466972243176587274").send(`***__ الكلام الي ترحيب  ${member}___***`);
    });
client.login('NDY4MzQwOTc4ODQ0MDQxMjE3.Di4_HQ.wxrpkbDetZDxWp1Y97w4BxOt4Aw'); 
