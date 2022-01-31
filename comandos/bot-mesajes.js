const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "mesage", 
  alias: ["ms"], 

execute (client, message, args){

  var perms = message.member.hasPermission("ADMINISTRADOR")
  if(!perms) return message.channel.send(embed2)
  
  const embed = new Discord.MessageEmbed()
  .setTitle("❌Debes mencionar un canal!")
  .setTimestamp()
  .setColor("RED")

  const embed1 = new Discord.MessageEmbed()
  .setTitle("❌Debes escribir un texto!")
  .setTimestamp()
  .setColor("RED")

  const embed2 = new Discord.MessageEmbed()
  .setTitle("❌No tienes permiso para usar el comando!")
  .setTimestamp()
  .setColor("RED")

  const embed3 = new Discord.MessageEmbed()
  .setTitle("Mensage Enviado Correctamente!")
  .setTimestamp()
  .setColor("GREEN")

  let canal = message.mentions.channels.first()
  if(!canal) return message.channel.send(embed)

  let texto = args.slice(1).join(" ")
  if(!texto) return message.channel.send(embed1)
  
  canal.send(texto)

  message.channel.send(embed3)
 
 }

} 