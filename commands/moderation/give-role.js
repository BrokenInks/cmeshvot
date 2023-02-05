const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'give-role',
    usage: "give-role <user> <role:id>",
    description: "giving role to member",
    category: "moderation",
    botPermission: ["MANAGE_ROLE"],
    authorPermission: ["MANAGE_ROLE"],
	run: (client, message, args) => {
		message.delete();

		if (!args[0] || !args[1]) return message.channel.send('Incorrect usage, It\'s `<username || user id> <role name || id>').then((m) => m.delete({ timeout: 5000 }));

		try {
			const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
			const roleName = message.guild.roles.cache.find((r) => (r.name === args[1].toString()) || (r.id === args[1].toString().replace(/[^\w\s]/gi, '')));

			const alreadyHasRole = member._roles.includes(roleName.id);

			if (alreadyHasRole) return message.channel.send('User already has that role').then((m) => m.delete({ timeout: 5000 }));
            message.channel.send(`${message.author} has successfully given the role ${roleName} to ${member.user}`)

			return member.roles.add(roleName).then(() => message.channel.send(embed));
		} catch (e) {
			return message.channel.send('Try to give a role that exists next time...').then((m) => m.delete({ timeout: 5000 }));
		}
	},
};