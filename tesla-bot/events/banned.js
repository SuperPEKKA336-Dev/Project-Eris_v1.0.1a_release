const {Events} = require('discord.js');

const {EMBEDS, BANNED} = require('../constants.json')

module.exports =
{
	name: Events.GuildBanAdd,
  
	execute(member)
  {
		const channel = member.client.channels.cache.get('779040966551273553');

    const embed = EMBEDS.BANNED;

    embed.description = embed.description.replaceAll("%user", member.user);
    
    channel.send(
    {
      embeds: [embed]
    });
	},
};