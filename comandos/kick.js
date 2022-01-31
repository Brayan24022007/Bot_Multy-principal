const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "kick", 
  alias: ["expulsar"],
  

execute (client, message, args){
  
  var botperms = message.guild.me.hasPermission("KICK_MEMBERS")
  if(!botperms) return message.channel.send("No Tengo Los Permisos Para Expulsar Miembros")

  var perms = message.member.hasPermission("KICK_MEMBERS")
  if(!perms) return message.channel.send("No Tienes Permiso Para Expulsar Miembros!")

  const usuario = message.mentions.members.first()
  if(!usuario) return message.channel.send("Debes Mencionar Un Usuario!")

  const razon = args.slice(1).join(' ')
  if(!razon) return message.channel.send("Debes Mencionar Una Razon De Expulcion")

  message.guild.member(usuario).kick(razon);

  message.channel.send(`Se ha Expulsado Al Usuario ${usuario} correctamente.\nRazón: ${razon}`)

  }

} 