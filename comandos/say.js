const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "say", 
  alias: ["Say"], 

execute (client, message, args){

  const texto = args.join(' ')
 if(!texto) return message.channel.send("Debes Introducir un Texto")
 
  message.channel.send(texto)

 }

} 