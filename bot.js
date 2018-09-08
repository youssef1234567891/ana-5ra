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
client.on('ready',async () => {
let channel = hero.channels.find(r => r.id === '487045322929995777' && r.type === 'voice');
channel.join().catch(e => console.error(e));
});
client.login('NDgyMzQxNTk0MTYzMzE0Njg4.DnSwSw.iGeE2waZTY3v0ptNbKSndL1OZks');
