const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const qdb = require('quick.db')

module.exports = {
  name: "afk", 
  alias: [], 

 async execute (client, message, args){

 if(!args.join(' ')){
   razon = 'No Especificado'
 } else {
   razon = args.join(' ')
 }

 await qdb.set(`afk-${message.author.id}+${message.guild.id}`, razon)
 message.channel.send(`${message.author}, Ahora Estas Afk Por El Motivo ${razon}, Avisare a Quienes Te Mencionen`)

 }

} 
