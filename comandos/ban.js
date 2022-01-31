const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "ban", 
  alias: ["banear"], 

execute (client, message, args){

  var botperms = message.guild.me.hasPermission("BAN_MEMBERS")
  if(!botperms) return message.channel.send("❌ No Tengo Permiso Para Banear Miembros")

  var perms = message.member.hasPermission("BAN_MEMBERS")
  if(!perms) return message.channel.send("❌ No Tienes Permisos Para Banear Miembros")


  const  usuario = message.mentions.members.first()
  if(!usuario) return message.channel.send("❌ Debes Mencionar a Un Usuario Para Expulsar")
  if(usuario.id === message.author.id) return message.channel.send("No Te Puedes Expulsar a Ti Mismo")

  const razon = args.slice(1).join(' ')
  if(!razon) return message.channel.send("❌ Debes Mencionar Una Razon Para Banear a Este Miembro")

  usuario.ban({ reason: razon })

  message.channel.send(`Se a Baneado Al Usuario **${usuario}** Correctamente.`)

 }

} 