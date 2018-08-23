const Discord = require('discord.js');
const A7MD = new Discord.Client();

console.log("by M7mD_");
 
A7MD.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
سلام عليكم 
لو سمحت ممكن تدخل سيرفرى
احلي سيرفر العاب وسوالف تعالي شرفنا  
 [https://discord.gg/H4ehyhj ]							   
الدعووة خاصة لك يا قلبي ... [ ${member}  ]
**`) 
}).catch(console.error)
})
A7MD.login('NDgwODQyODU0MjU2NjA3MjMy.DmCVNA.4j3ExcEqPobEuBvhhIndgD4JpLk');
