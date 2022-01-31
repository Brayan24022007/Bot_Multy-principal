const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "help", 
  alias: ["ayuda"], 

execute (client, message, args){

  const user = message.author

  const embedPrincipal = new Discord.MessageEmbed()
  .setTitle("Menu Principal!")
  .setDescription("👊 => Apartado de Divercion\n<:5736nekocatwoah:897318307630309387> => Apartado de Musica\n<:4933_MCemerald:897319198823428096> => Apartado de Rangos\n🔥 => Apartado de Moderacion\n<:1028_MCgoldenapple:897319196831121419> => Apartado de Ayuda\n<:8843blobminecraftswordkiller:896604281371779112> => Regresar al Menu Principal")
  .setTimestamp()
  .setColor("RED")

  const embed1 = new Discord.MessageEmbed()
  .setTitle("Apartado de Divercion!")
  .setDescription("-say El bot Responde Con Lo Que Le Digas\n-avatar El bot Muestra El Avatar De Un Usuario\n-jumbo Agranda un Emoji")
  .setTimestamp()
  .setColor("RANDOM")

  const embed2 = new Discord.MessageEmbed()
  .setTitle("Apartado de Moderacion!")
  .setDescription("-kick Expulsa un Usuario\n-ban Banea un Usuario\n-clear Elimina Varios Mensajes\n-embed Envia un Embed Personalizado\n-mesage El bot Manda un mensage a un  canal especificado")
  .setTimestamp()
  .setColor("RANDOM")

  const embed3 = new Discord.MessageEmbed()
  .setTitle("Apartado de Ayuda!")
  .setDescription("-ticket Crea un ticket de ayuda\n-reportbug Reporta todo tipo bugs\n-afk Te pone en estado afk  ")
  .setTimestamp()
  .setColor("RANDOM")

  const embed4 = new Discord.MessageEmbed()
  .setTitle("Apartado de Rangos!")
  .setDescription("-rank Muestra Tu Nivel De Xp\n-leaderboard Muestra la tabla de clasificacion ")
  .setTimestamp()
  .setColor("RANDOM")

  const embed5 = new Discord.MessageEmbed()
  .setTitle("Apartado de Musica!")
  .setDescription("-play Reproduce Cualquier Cancion\n-pause Pausa La Cancion Que se Esta Reproduciendo\n-reanude Reanuda La Cancion Pausada\n-skip Salta la Cancion\n-stop Detiene la Reproduccion de las Canciones")
  .setTimestamp()
  .setColor("RANDOM")

  message.channel.send(embedPrincipal).then(async (e) => {

   e.react("👊")
   e.react("897318307630309387")
   e.react("897319198823428096")
   e.react("🔥")
   e.react("897319196831121419")
   e.react("896604281371779112")
   

   e.awaitReactions((reaction, user) => {

     if(message.author.id !== user.id) return;

     if(reaction.emoji.name === '👊'){
       reaction.users.remove(user.id)
       e.edit(embed1)
     }
     if(reaction.emoji.name === '🔥'){
       reaction.users.remove(user.id)
       e.edit(embed2)
     }
     if(reaction.emoji.id === '897319198823428096'){
       reaction.users.remove(user.id)
       e.edit(embed4)
     }
     if(reaction.emoji.id === '897318307630309387'){
       reaction.users.remove(user.id)
       e.edit(embed5)
     }
     if(reaction.emoji.id === '897319196831121419'){
       reaction.users.remove(user.id)
       e.edit(embed3)
     }
      if(reaction.emoji.id === '896604281371779112'){
       reaction.users.remove(user.id)
       e.edit(embedPrincipal)
     }
     
   })

  })

 }

} 