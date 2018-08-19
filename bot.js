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
client.on('guildMemberAdd', member => {
    var embed = new Discord.RichEmbed()
    .setThumbnail(member.user.avatarURL)
  .addField("***شكرا الانضمامك الينا***" ,member.user.username )
    .setDescription('***بكل حب واحترام وشوق نستقبلك ونتمنى لك قضآء أجمل اللحظات ولآوقات معنا***')
    .setColor('RANDOM')
    .setImage('http://www.imgion.com/images/01/Welcome-buddy.jpg')
var channel =member.guild.channels.find('name', 'orall')
if (!channel) return;
channel.send({embed : embed});
});
client.on('message', function(message) {
    if (!message.member.hasPermissions(['ADMINISTRATOR'])){
            let command = message.content.split(" ")[0];
        if(message.content.includes('discord.gg')){
        message.reply (' ')
           if(!message.channel.guild) return message.reply('** This command only for servers**');
     message.member.addRole(message.guild.roles.find('name', 'Muted')); 
    const embed500 = new Discord.RichEmbed()
      .setTitle(":x: | تمت معاقبتك")
            .addField(`** مش علينا يحبي **`)
      .addField(`by`,`◕‿‿◕`)
            .setColor("c91616")
            .setThumbnail(`${message.author.avatarURL}`)
            .setAuthor(message.author.username, message.author.avatarURL) 
        .setFooter(`${message.guild.name} Server`)
     message.channel.send(embed500) 
    
        
    }
    }
})
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag} !`);
    client.user.setGame(`Orall`,`www.twitch.tv/v5bz`);
  });
client.on('guildMemberAdd', member=> {
    member.addRole(member.guild.roles.find("name","༺Orall༻"));
    });
client.on("message", (message) => {
    const command = message.content.split(" ")[0];
    const args = message.content.split(" ").slice();
  if(command === "=def"){
       let member = message.mentions.users.first(); 
    message.guild.members.get(member.id).setDeaf(true);
   }
}).catch(console.error);
client.on("message", message => {
    if (message.author.bot) return;
    
    let command = message.content.split(" ")[0];
    
    if (command === "=unmute") {
          if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("** لا يوجد لديك برمشن 'Manage Roles' **").catch(console.error);
    let user = message.mentions.users.first();
    let modlog = client.channels.find('name', 'mute-log');
    let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
    if (!muteRole) return message.reply("** لا يوجد لديك رتبه الميوت 'Muted' **").catch(console.error);
    if (message.mentions.users.size < 1) return message.reply('** يجب عليك منشنت شخص اولاً**').catch(console.error);
    const embed = new Discord.RichEmbed()
      .setColor(0x00AE86)
      .setTimestamp()
      .addField('الأستعمال:', 'اسكت/احكي')
      .addField('تم فك الميوت عن:', `${user.username}#${user.discriminator} (${user.id})`)
      .addField('بواسطة:', `${message.author.username}#${message.author.discriminator}`)
  
    if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** لا يوجد لدي برمشن Manage Roles **').catch(console.error);
  
    if (message.guild.member(user).removeRole(muteRole.id)) {
  return message.reply("**:white_check_mark: .. تم فك الميوت عن الشخص **").catch(console.error);
  } else {
      message.guild.member(user).removeRole(muteRole).then(() => {
  return message.reply("**:white_check_mark: .. تم فك الميوت عن الشخص **").catch(console.error);
  });
    }
  
  };
  
  });
client.on("message", message => {
    var prefix = "=";
        if (message.author.id === client.user.id) return;
        if (message.guild) {
       let embed = new Discord.RichEmbed()
        let args = message.content.split(' ').slice(1).join(' ');
    if(message.content.split(' ')[0] == prefix + 'bc') {
        if (!args[1]) {
    message.channel.send("**bc <message>**");
    return;
    }
            message.guild.members.forEach(m => {
       if(!message.member.hasPermission('ADMINISTRATOR')) return;
                m.send(args);
            });
            const AziRo = new Discord.RichEmbed()
            .setAuthor(message.author.username, message.author.avatarURL)   
            .setTitle('✅| جاري ارسال رسالتك ') 
            .addBlankField(true)
            .addField('♨| عدد الاعضاء المرسل لهم ', message.guild.memberCount , true)        
            .addField('📝| الرسالة ', args)
            .setColor('RANDOM')  
            message.channel.sendEmbed(AziRo);          
        }
        } else {
            return;
        }
    });
client.on('message', message => {
    if(!message.channel.guild) return;
if (message.content.startsWith('=ping')) {
if(!message.channel.guild) return;
var msg = `${Date.now() - message.createdTimestamp}`
var api = `${Math.round(client.ping)}`
if (message.author.bot) return;
let embed = new Discord.RichEmbed()
.setAuthor(message.author.username,message.author.avatarURL)
.setColor('RANDOM')
.addField('**Time Taken:**',msg + " ms :signal_strength: ")
.addField('**WebSocket:**',api + " ms :signal_strength: ")
message.channel.send({embed:embed});
}
});
client.on("message", message => {
    if (message.author.bot) return;
    
    let command = message.content.split(" ")[0];
    
    if (command === "=mute") {
          if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("** لا يوجد لديك برمشن 'Manage Roles' **").catch(console.error);
    let user = message.mentions.users.first();
    let modlog = client.channels.find('name', 'mute-log');
    let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
    if (!muteRole) return message.reply("** لا يوجد رتبة الميوت 'Muted' **").catch(console.error);
    if (message.mentions.users.size < 1) return message.reply('** يجب عليك منشنت شخص اولاً**').catch(console.error);
    
    const embed = new Discord.RichEmbed()
      .setColor(0x00AE86)
      .setTimestamp()
      .addField('الأستعمال:', 'اسكت/احكي')
      .addField('تم ميوت:', `${user.username}#${user.discriminator} (${user.id})`)
      .addField('بواسطة:', `${message.author.username}#${message.author.discriminator}`)
     
     if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** لا يوجد لدي برمشن Manage Roles **').catch(console.error);
   
    if (message.guild.member(user).roles.has(muteRole.id)) {
  return message.reply("**:white_check_mark: .. تم اعطاء العضو ميوت**").catch(console.error);
  } else {
      message.guild.member(user).addRole(muteRole).then(() => {
  return message.reply("**:white_check_mark: .. تم اعطاء العضو ميوت كتابي**").catch(console.error);
  });
    }
  
  };
  
  });
var prefix = "=" ;   // البرفكس هنااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااا

/**
* @description (C) Onixes.#9120
* * code by Damit..
* @description https://discord.gg/2s7keqh
* * * (C) codes. - 2018 
*/


var requestHelp = async function(type, user, message) {
    switch(type) {
        case "games":
            var gamesHelp = await new Discord.RichEmbed()
            // .addField("معلومات عن الكومند مثلا اكتب اسم العاصمة" ," اسم الكومند مثلا عواصم ")
                .addField("test", "games")
                .addField("test", "games")
            user.send(gamesHelp);
        break;
        case "general":
            var generalHelp = await new Discord.RichEmbed()
            // .addField("معلومات عن الامر", "الامر ")
                .addField("test", "general")
                .addField("test", "general")
            user.send(generalHelp);
        break;
        case "admin":
        if(message.member.hasPermission("ADMINISTRATOR")) {
            var adminHelp = await new Discord.RichEmbed()
                .addField("test", "admin")
                .addField("test", "admin")
            user.send(adminHelp); 
        } else {
            return;
        }
        break;
    }
}






var reactForGamesHelp = {
    messageId: null,
    reaction: null
}, 
reactForGeneralHelp = {
    messageId: null,
    reaction: null
}, 
reactForAdminHelp = {
    messageId: null,
    reaction: null
};


                                                                                // (C) codes. offical server

function define(identify) {
    var data = {}
    data["user"] = client.users.find("id", identify.user_id)
    data["channel"] = client.channels.find("id", identify.channel_id);
    data["emoji"] = identify.emoji.id ? `${identify.emoji.name}:${identify.emoji.id}` : identify.emoji.name;
    data["member"] = data["channel"].guild.members.find("id", identify.user_id)
    data["message"] = data["channel"].messages.find("id", identify.message_id);
    data["reaction"] = data["message"].reactions.get(data.emoji)
    return data;
}


client.on('raw',  packet  => {
    if(packet.t == "MESSAGE_REACTION_ADD") {
        var data = define(packet.d)
        if(data.user.id == client.user.id) return;
            switch (packet.d.message_id) {
            case reactForGamesHelp.messageId:
                if(reactForGamesHelp.reaction === data.emoji) {
                    requestHelp("games", data.member, data.message)
                    data.reaction.remove(data.member)
                } else {
                    data.reaction.remove(data.member)
                }
                break;

            case reactForGeneralHelp.messageId:
                if(reactForGeneralHelp.reaction === data.emoji) {
                    requestHelp("general", data.member, data.message)
                    data.reaction.remove(data.member)
                } else {
                    data.reaction.remove(data.member)
                }
                break;


            case reactForAdminHelp.messageId:
                if(reactForAdminHelp.reaction === data.emoji) {
                    requestHelp("admin", data.member, data.message)
                    data.reaction.remove(data.member)
                } else {
                    data.reaction.remove(data.member)
                }
                break;
        }
    }
});






client.on("message", message => {
    if(message.content.indexOf(prefix) !== 0) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    if(message.content == prefix + `set ${args[1]} help`) {
        if(args[1] == "games" || args[1] == "general" || args[1] == "admin") {
            var  filter = m => m.author.id === message.author.id
            message.channel.send("give me the channel id now !");        
            message.channel.awaitMessages(filter, { max: 1, time: 40000, errors: ['time'] })
            .then(collected => {
                var toSetChannel = collected.first();
                var channel = message.guild.channels.find("id", toSetChannel.content);
                if(channel) {
                    message.channel.send("give me the message id now !")
                    var  filter = m => m.author.id === message.author.id
                    message.channel.awaitMessages(filter, { max: 1, time: 40000, errors: ['time'] })
                    .then(collected => {
                        var ToSetMessage = collected.first();
                        channel.fetchMessages().then(messages => {
                            var defined =  messages.filter(message => message.id == ToSetMessage.content);
                            var msg = defined.first()
                            if(defined) {
                                message.channel.send("send the emoji now!")
                                message.channel.awaitMessages(filter, { max: 1, time: 40000, errors: ['time'] })
                                .then(collected => {
                                    msg.react(collected.first().content)
                                    var rect = collected.first().content
                                    setReactionData(channel, msg, rect, args[1])
                                })
                            } 
                        })
                        .catch(console.error)
                    });
                } else {
                    message.channel.send("sorry i can't find this channel")
                }
            })
        }
    }
})
var setReactionData = function(channel, message, reaction, identify) {
    if(identify == "games") {
        reactForGamesHelp = {
            channel: channel,
            messageId: message.id,
            reaction: reaction
        }
    } else if(identify == "general") {
        reactForGeneralHelp = {
            channel: channel,
            messageId: message.id,
            reaction: reaction
        }
    } else if(identify == "admin") {
        reactForAdminHelp = {
            channel: channel,
            messageId: message.id,
            reaction: reaction
        }
    }
}   

client.login("NDgwNTA3NjI2MzMzOTI5NDg0.Dlo33Q.MF2l0PMnvBePxSecbggTsTz9d2M");
//CODES ReBeL
