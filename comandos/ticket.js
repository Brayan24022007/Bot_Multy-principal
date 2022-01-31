const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "ticket", 
  alias: ["Ticket"], 

execute (client, message, args){

  let everyone = message.guild.roles.cache.find(rol => rol.name === '@everyone');

  let e = message.guild.channels.cache.find(canal => canal.name === `ticket-${message.author.username}`)
  if(e) return message.channel.send("❌No Puedes Crear Un Ticket Ya Tienes Otro Abierto.")

  const razon = args.join(" ")
  if(!razon) return message.channel.send("❌Debes Escribir Una Razon")

  const embed = new Discord.MessageEmbed()
  
  .setTitle("Ticket creado <:pngegg:897319698411175947>")
  .setDescription(`ticket creado por: **${message.author.tag}**\nMotivo: **${razon}**\nPulsa ✅ Para Dar Por Terminado El Tiket`)
  .setTimestamp()
  .setColor("RED")

  const embed1 = new Discord.MessageEmbed()
  .setTitle("Ticket creado Correctamente! <:pngegg:897319698411175947>")
  .setDescription(`Ticket: Creado por **${message.author.username}** `)
  .setTimestamp()
  .setColor("RED")

  message.guild.channels.create(`ticket-${message.author.username}`,{
    permissionOverwrites: [
      {
        id: everyone.id,
        deny: ["VIEW_CHANNEL", "SEND_MESSAGES"]
      },
      {
        id: message.author.id,
        allow: ["VIEW_CHANNEL", "SEND_MESSAGES"]
      }
    ],
     parent: "897259287682875492"   
  }).then((c) => c.send(embed)).then((msg) => {
    msg.react("✅")

    msg.awaitReactions((reaction, user) => {
      if(message.author.id !== user.id) return;
      if(reaction.emoji.name === '✅'){
        msg.channel.delete()
      }
    })
  })

 message.channel.send(embed1)
 
 }

} 