const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require ('discord.js');

module.exports = {
  name: "embed", 
  alias: [], 

execute (client, message, args){
  
  const embed1 = new Discord.MessageEmbed()
  .setTitle("❌No tines los permisos necesarios!")
  .setTimestamp()
  .setColor("RED")

  const embed2 = new Discord.MessageEmbed()
  .setTitle("❌Debes escribir lo que contiene el embed!")
  .setTimestamp()
  .setColor("RED")

  var perms = message.member.hasPermission("AMINISTRADOR")
  if(!perms) return message.channel.send(embed1)

  let texto = args.join(' ');
  if(!texto) return message.channel.send(embed2)
  let opciones = texto.split('>>')

  const embed = new Discord.MessageEmbed()
  .setTitle(opciones[0])
  .setDescription(opciones[1])
  .setFooter(opciones[2])
  .setColor(opciones[3])

  message.channel.send(embed)

 }

} 