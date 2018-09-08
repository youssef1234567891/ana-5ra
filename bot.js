const Discord = require("discord.js");
const client = new Discord.Client();

client.on('message', message => {
if (message.content === "test") {
  var ms = 120000;
      var interval = setInterval (function () {
        message.channel.send("لا إله الا الله, سبحان الله, الحمدالله, الله اكبر")
         message.channel.send("لا إله الا الله, سبحان الله, الحمدالله, الله اكبر")
         message.channel.send("لا إله الا الله, سبحان الله, الحمدالله, الله اكبر")
         message.channel.send("لا إله الا الله, سبحان الله, الحمدالله, الله اكبر")
         message.channel.send("لا إله الا الله, سبحان الله, الحمدالله, الله اكبر")
         message.channel.send("لا إله الا الله, سبحان الله, الحمدالله, الله اكبر")
         message.channel.send("لا إله الا الله, سبحان الله, الحمدالله, الله اكبر")
         message.channel.send("لا إله الا الله, سبحان الله, الحمدالله, الله اكبر")
         message.channel.send("لا إله الا الله, سبحان الله, الحمدالله, الله اكبر")
         message.channel.send("لا إله الا الله, سبحان الله, الحمدالله, الله اكبر")
         message.channel.send("لا إله الا الله, سبحان الله, الحمدالله, الله اكبر")
      }, ms); 
    }
});

client.login('NDg4MDI3NzkzNTQ0NzA4MDk3.DnW-tg.NL-xJk8Ys3t2SRO5g9OanTvXKps');
