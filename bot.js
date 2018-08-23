const Discord = require('discord.js');
const A7MD = new Discord.Client();

console.log("by M7mD_");
 
A7MD.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
سلام عليكم 
لو سمحت ممكن تدخل سيرفرى
قررنا افتتاح سيرفر بيع بوتات وتصاميم  
 [https://discord.gg/Bm9XqR ]							   
الدعووة خاصة لك يا قلبي ... [ ${member}  ]
**`) 
}).catch(console.error)
})
A7MD.login('NDgwODQyODU0MjU2NjA3MjMy.DmCVNA.4j3ExcEqPobEuBvhhIndgD4JpLk');
