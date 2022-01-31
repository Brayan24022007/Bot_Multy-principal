const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const Levels = require('discord-xp');
Levels.setURL(process.env['MONGODB']);
const canvacord = require('canvacord')

module.exports = {
  name: "rank", 
  alias: [], 

 async execute (client, message, args){

  const target = message.mentions.users.first() || message.author;

  const img = target.displayAvatarURL({ format: 'png', dynamic: true })

  const user = await Levels.fetch(target.id, message.guild.id, true)

  const xpRequired = Levels.xpFor(user.level+1)

  const rank = new canvacord.Rank()
  .setAvatar(img)
  .setCurrentXP(user.xp)
  .setRequiredXP(xpRequired)
  .setLevel(user.level)
  .setRank(user.position)
  .setStatus(target.presence.status)
  .setProgressBar("#FFFFFF", "COLOR")
  .setUsername(target.username)
  .setDiscriminator(target.discriminator);
  rank.build().then(data =>{
   const attachment = new Discord.MessageAttachment(data, "rank.png")
   message.channel.send(attachment)
  })
  
 }

} 