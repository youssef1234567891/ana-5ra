const Discord = require("discord.js");
const client = new Discord.Client();
client.on('ready', () => {
  console.log(`Hixxx online`);

});
//Hixx
client.on('message', message => {
if (message.content.split(' ')[0] == '-m')
 message.guild.members.forEach( member => {
         if (!message.member.hasPermission("CONNECT"))  return;
member.send( `${member} ! ` + "**" + message.guild.name + " : ** " + message.content.substr(3));
                                                            message.delete();
});
});

//جميع الحقوق محفوظه لهيكس وخبز
client.on("message", message => {
    var prefix = ".";
 
            var args = message.content.substring(prefix.length).split(".bc ");
            if (message.content.startsWith(prefix + "m")) {
                         if (!message.member.hasPermission("CONNECT"))  return;
                            let embed4 = new Discord.RichEmbed()
             .setDescription("**:white_check_mark: | جاري ارسال البرودكاست**")
           .addField("مرسل البرودكاست" , message.author)
          .addField("نص البرودكاست" ,args.join("  "))
                            .addField("عدد الاعضاء المرسل لهم :busts_in_silhouette:" ,` **[${message.guild.memberCount}]**`,true)
                                                            .setColor("#008000")
                                message.channel.sendEmbed(embed4);
                                                      message.delete();
                            
                          }
});client.on('guildMemberAdd', member=> {
    member.addRole(member.guild.roles.find("name","members"));
    });
client.login("NDY4MzQwOTc4ODQ0MDQxMjE3.Di3wGg.jmdIAx2znpWVnooewYZhxp6nrtI" );
