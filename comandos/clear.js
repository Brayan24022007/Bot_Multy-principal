const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "clear", 
  alias: ["borrar"], 

execute (client, message, args){

  const botperms = message.guild.me.hasPermission("MANAGE_MESSAGES")
  if(!botperms) return message.channel.send("No Tengo Permisos Para Eliminar Mensages")

  var perms = message.member.hasPermission("MANAGE_MESSAGES")
  if(!perms) return message.channel.send("No Tienes Permisos Para Eliminar Mensajes")


  const valor = parseInt(args[0]);
  if(!valor) return message.channel.send("❌Debes es Cribir Una Cantidad de Mensajes para Elimnar.")
  if(valor >= 100) return message.channel.send("❌No Puedo Eliminar Mas De 99 Mensajes a la Vez!")

  message.channel.bulkDelete(valor + 1);
  message.channel.send(`Se Han Eliminado **${valor}** Mensajes Correctamente!`)


 }

} 