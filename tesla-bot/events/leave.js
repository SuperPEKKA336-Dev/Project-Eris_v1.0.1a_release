const {Events} = require('discord.js');

const {EMBEDS, LEAVE} = require('../constants.json')

module.exports =
{
	name: Events.GuildMemberRemove,
  
	execute(member)
  {
		const channel = member.client.channels.cache.get('779040966551273553');

    const embed = EMBEDS.LEAVE;

    embed.description = embed.description.replaceAll("%user", member.id);
    
    channel.send(
    {
      embeds: [embed]
    });
	},
};