const Discord = require("discord.js")
const db = require("quick.db")

module.exports = {
  name: "setrule",
  category: "moderation",
  usage: "setrule <#channel>",
  description: "Set the rule channel",
  authorPermission: ["ADMINISTRATOR"],
  run: (client, message, args) => {
    
    let channel = message.mentions.channels.first()
    if(!channel) return message.channel.send("Please Mention the channel first")
    
    db.set(`rulechannel_${message.guild.id}`, channel.id)
    message.channel.send(`Rule Channel is seted as ${channel}`)
  }
}