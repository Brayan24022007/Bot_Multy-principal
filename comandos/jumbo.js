const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "jumbo", 
  alias: ["emote"], 

execute (client, message, args){

  if(!args[0]) return message.channel.send("Debes escribir un emote")

  let emoji = message.guild.emojis.cache.find(x => x.name === args[0].split(":")[1])
  if(!emoji) return message.channel.send("Ese Emoji no es valido o no lo e encontrado en este servidor")

  message.channel.send(emoji.url)
  
 }

} 