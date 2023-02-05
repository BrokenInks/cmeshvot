module.exports = (client) => {
    const channelId = "1066049779370578062";
    const rulesChannel = "989608273290346528";
    client.on("guildMemberAdd", (member) => {
      console.log(member);
  
      const message = `Welcome <@${
        member.id
      }> to our server! Be sure to check out our ${member.guild.channels.cache
        .get(rulesChannel)
        .toString()}`;
  
      const channel = member.guild.channels.cache.get(channelId);
      channel.send(message);
    });
  };