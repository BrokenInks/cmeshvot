const { Intents, Client, Collection, MessageEmbed } = require("discord.js"); 
const client = new Client({
    disableEveryone: true ,
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_PRESENCES]
  });

const { token } = require("./config.json");
const welcome = require("./welcome");

client.on("ready", () => {
  console.log("Our Discord bot is online");

  welcome(client);
});

client.login(token);