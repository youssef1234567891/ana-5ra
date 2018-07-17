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

    client.channels.get("466972243176587274").send(`***__  نورت سيرفرنا ${member}___***`);
    });
const Discord = require("discord.js");
const client = new Discord.Client();
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
/*جميع الحقوق محفوظهه لريبل ولسيرفر كودز
رآح يرسل للأونر تحذير + م يتطلب ملفات سويته لكم داتا مؤقت
سو روم بأسم log 
أو غيره من الكود عشان يرسل هنا التحذير
nvm i 10 
nvm use 10
npm i discord.js
*/
var guilds = {};
client.on('guildBanAdd', function(guild) {
            const rebellog = client.channels.find("name", "log"),
            Onumber = 3,
  Otime = 10000
guild.fetchAuditLogs({
    type: 22
}).then(audit => {
    let banner = audit.entries.map(banner => banner.executor.id)
    let bans = guilds[guild.id + banner].bans || 0 
    guilds[guild.id + banner] = {
        bans: 0
    }
      bans[guilds.id].bans += 1; 
if(guilds[guild.id + banner].bans >= Onumber) {
try {
let roles = guild.members.get(banner).roles.array();
guild.members.get(banner).removeRoles(roles);
  guild.guild.member(banner).kick();

} catch (error) {
console.log(error)
try {
guild.members.get(banner).ban();
  rebellog.send(`<@!${banner.id}>
حآول العبث بالسيرفر @everyone`);
guild.owner.send(`<@!${banner.id}>
حآول العبث بالسيرفر ${guild.name}`)
    setTimeout(() => {
 guilds[guild.id].bans = 0;
  },Otime)
} catch (error) {
console.log(error)
}
}
}
})
});
 let channelc = {};
  client.on('channelCreate', async (channel) => {
  const rebellog = client.channels.find("name", "log"),
  Oguild = channel.guild,
  Onumber = 3,
  Otime = 10000;
  const audit = await channel.guild.fetchAuditLogs({limit: 1});
  const channelcreate = audit.entries.first().executor;
  console.log(` A ${channel.type} Channel called ${channel.name} was Created By ${channelcreate.tag}`);
   if(!channelc[channelcreate.id]) {
    channelc[channelcreate.id] = {
    created : 0
     }
 }
 channelc[channelcreate.id].created += 1;
 if(channelc[channelcreate.id].created >= Onumber ) {
    Oguild.members.get(channelcreate.id).kick();
rebellog.send(`<@!${channelcreate.id}>
حآول العبث بالسيرفر @everyone`);
channel.guild.owner.send(`<@!${channelcreate.id}>
حآول العبث بالسيرفر ${channel.guild.name}`)
}
  setTimeout(() => {
 channelc[channelcreate.id].created = 0;
  },Otime)
  });

let channelr = {};
  client.on('channelDelete', async (channel) => {
  const rebellog = client.channels.find("name", "log"),
  Oguild = channel.guild,
  Onumber = 3,
  Otime = 10000;
  const audit = await channel.guild.fetchAuditLogs({limit: 1});
  const channelremover = audit.entries.first().executor;
  console.log(` A ${channel.type} Channel called ${channel.name} was deleted By ${channelremover.tag}`);
   if(!channelr[channelremover.id]) {
    channelr[channelremover.id] = {
    deleted : 0
     }
 }
 channelr[channelremover.id].deleted += 1;
 if(channelr[channelremover.id].deleted >= Onumber ) {
  Oguild.guild.member(channelremover).kick();
rebellog.send(`<@!${channelremover.id}>
حآول العبث بالسيرفر @everyone`);
channel.guild.owner.send(`<@!${channelremover.id}>
حآول العبث بالسيرفر ${channel.guild.name}`)
}
  setTimeout(() => {
 channelr[channelremover.id].deleted = 0;
  },Otime)
  });
onst Discord = require('discord.js');
const client = new Discord.Client();
//By ReBeL //By ReBeL 
//جميع الحقوق محفوظهه لريبل فقط . 
client.on("ready", async  => {
setInterval(function(){
client.channels.find('id', '466414171097923594').setName("w");
client.channels.find('id', '466414171097923594').setName("We");
client.channels.find('id', '466414171097923594').setName("Wel");
client.channels.find('id', '466414171097923594').setName("Welc");
client.channels.find('id', '466414171097923594').setName("Welco");
client.channels.find('id', '466414171097923594').setName("Welcom");
client.channels.find('id', '466414171097923594').setName("Welcome");
client.channels.find('id', ' 466414171097923594').setName("Welcome T");
client.channels.find('id', ' 466414171097923594').setName("Welcome To");
client.channels.find('id', '466414171097923594 ').setName("Welcome To C");
client.channels.find('id', '466414171097923594 ').setName("Welcome To Co");
client.channels.find('id', ' 466414171097923594').setName("Welcome To Cod");
client.channels.find('id', '466414171097923594 ').setName("Welcome To Code");
client.channels.find('id', '466414171097923594 ').setName("Welcome To Codes");
  }, 3000);

client.login('NDY4MzQwOTc4ODQ0MDQxMjE3.Di4_HQ.wxrpkbDetZDxWp1Y97w4BxOt4Aw'); 
