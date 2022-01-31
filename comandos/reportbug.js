const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "reportbug", 
  alias: ["reportar bug"], 

execute (client, message, args){

  const reporte = args.join(" ")
  if(!reporte) return message.channel.send("❌Debes escribir el bug a reportar")

  const embed = new Discord.MessageEmbed()
   
  .setTitle("Reporte")
  .setDescription(`El Usuario **${message.author.username}** A Echo Un Reporte Desde El Servidor **${message.guild.name}**. \nReporte: **${reporte}**`)
  .setFooter("Arreglalo Huevon")
  .setColor("RED")
 
  const embed1 = new Discord.MessageEmbed()

  .setTitle("Reporte Creado Correctamente! <:pngegg:897319698411175947>")
  .setDescription(`Gracias Por Tu Reporte **${message.author.username}**`)  
  .setColor("RED")
  .setTimestamp()


  client.users.cache.get(`750845122203090974`).send(embed)
  message.channel.send(embed1)
 }

} 