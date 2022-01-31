const Discord = require('discord.js')
const client = new Discord.Client();
const { Client, MessageEmbed, Guild } = require('discord.js');
require('dotenv').config();
const fs = require('fs')
let { readdirSync } = require('fs')
///////Sistema base///////

const qdb = require('quick.db')

/////Sistema Base  de Niveles Discord-xp/////
const Levels = require('discord-xp')
Levels.setURL(process.env['MONGODB'])
/////Sistema Base  de Niveles Discord-xp/////

/////SISTEMA 24/7/////
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.get('/', function(request, response) {
	response.sendFile(__dirname + '/comandos/sistema24-7.html');
});
app.listen(3000, () => console.log(`FUNCIONAMIENTO CORRECTO`));
/////SISTEMA 24/7/////


/////Handler/////
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./comandos').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const command = require(`./comandos/${file}`);
  client.commands.set(command.name, command);
}

for(const file of readdirSync('./eventos')){
  if(file.endsWith('.js')){
    let fileName = file.substring(0, file.length - 3)

    let fileContents = require(`./eventos/${file}`)

    client.on(fileName, fileContents.bind(null, client))
  }
}
/////Handler/////


client.on('message', async (message) => {
 
  /////Prefijo/////
  let prefix = '-'
  /////Prefijo/////

  if(message.author.bot) return;

  
  if(message.channel.type === 'dm'){
   const args = message.content.slice(prefix.length).trim().split(/ +/g);

   if(message.content.includes('invite')) message.channel.send("https://discord.gg/aX79dcUdSw")


    return;
    
  }
  

  /////Afk/////
  if (qdb.has(`afk-${message.author.id}+${message.guild.id}`)) {
    await qdb.delete(`afk-${message.author.id}+${message.guild.id}`)
    message.channel.send(`Bienvenido ${message.author}, Tu Estado Afk Ha Sido Removido❌ `)
  }

  if (message.mentions.members.first()) {
    const info = qdb.get(`afk-${message.mentions.members.first().id}+${message.guild.id}`)
    if (qdb.has(`afk-${message.mentions.members.first().id}+${message.guild.id}`)) {
      message.channel.send(`${message.author}, ${message.mentions.users.first().username} Esta En Estado Afk\nMotivo: ${info}`)
    }
  }
  /////Afk/////
  if (!message.content.startsWith(prefix)) return;

  let usuario = message.mentions.members.first() || message.author
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  let cmd = client.commands.find((c) => c.name === command || c.alias && c.alias.includes(command));
  if (cmd) {
    cmd.execute(client, message, args)
  }

 

})

/////Sistema de Niveles Discord-xp/////
client.on('message', async (message) => {

  if (message.author.bot) return;

  const random = Math.floor(Math.random() * 15) + 15;
  const hasLevelledUp = await Levels.appendXp(
    message.author.id,
    message.guild.id,
    random
  );

  if (hasLevelledUp) {
    const user = await Levels.fetch(message.author.id, message.guild.id);

    message.channel.send(`GG ${message.author}, Has llegado Al NIvel ${user.level}`)

    if (user.level === 6) {
      message.member.roles.add('896908331321552917')
    }

  }

})
/////Sistema de Niveles Discord-xp/////

/////Bienvenidas/////
client.on('guildMemberAdd', (member) => {

  const embed = new Discord.MessageEmbed()
    .setTitle('Bienvenido a Mi Servidor')
    .setDescription(`Bienvenido ${member}, Espero Que Te Diviertas Puedes ir al canal de <#895175698753400853>`)
    .setFooter('Bienvenido!')
    .setTimestamp()
    .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))

  client.channels.cache.get('896913914946809876').send(`${member}`, embed)

})
/////Bienvenidas/////


/////Token Del Bot/////
const mySecret = process.env['TOKEN']
client.login(mySecret)
/////Token Del Bot/////