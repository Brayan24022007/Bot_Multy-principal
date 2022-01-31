const Discord = require('discord.js');

module.exports = async (client) => {
  
 const array = [
   {
    name: "Programando bots",
    type: "PLAYING"
   },
   {
    name: "Musica",
    type: "LISTENING"
   }
 ]
  setInterval(() => {
    function presence(){
      client.user.setPresence({
        status: "online",
        activity: array[Math.floor(Math.random() * array.length)],
      });
    }

    presence();
  }, 10000);
  
  console.log(`Iniciado Como ${client.user.tag}!`);
  client.channels.cache.get("897342856325398568").send(embed1)

}
const embed1 = new Discord.MessageEmbed()
.setTitle("Funcionando Correctamente")
.setTimestamp()
.setColor("GREEN")