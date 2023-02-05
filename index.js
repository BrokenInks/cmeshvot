const { token } = require("./config.json");
const { Intents, Client, Collection, MessageEmbed } = require("discord.js"); 
require('discord-inline-reply'); //⚠️ IMPORTANT: put this before your discord.Client()
const client = new Client({
  disableEveryone: true ,
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_PRESENCES]
});

client.commands = new Collection();
client.aliases = new Collection();

["command", "events"].forEach(handler => {
  require(`./handlers/${handler}`)(client);
});


client.login(token);