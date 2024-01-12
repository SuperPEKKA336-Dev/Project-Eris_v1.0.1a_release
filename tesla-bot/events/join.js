const {Events} = require('discord.js');

const {EMBEDS, WELCOME} = require('../constants.json')

module.exports =
{
	name: Events.GuildMemberAdd,
  
	execute(member)
  {
		const channel = member.client.channels.cache.get('779040966551273553');
    const role = member.interaction.options.getRole('905893175774822441');

    const embed = EMBEDS.WELCOME;

    embed.description = embed.description.replaceAll("%user", member.id);
    
    channel.send(
    {
      embeds: [embed]
    });
    // member.roles.add();
	},
};