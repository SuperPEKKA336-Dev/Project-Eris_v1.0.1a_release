const {Events} = require('discord.js');

const {EMBEDS, AUDIT_MEMBER_EVENT} = require('../constants.json')

module.exports =
{
	name: Events.GuildBanRemove,
  
	execute(member)
    {
      	const auditChannel = member.client.channels.cache.get('779038390757752832');
        const author = member.user.username;
        const authorURL = member.user.displayAvatarURL();

        const auditEmbed = EMBEDS.AUDIT_MEMBER_EVENT;
          auditEmbed.title = auditEmbed.title.replaceAll("<type>", "Unbanned");
          auditEmbed.description = auditEmbed.description.replaceAll("%user", member.id);
          auditEmbed.description = auditEmbed.description.replaceAll("<type>", "was unbanned from");
          auditEmbed.author =
          {
            name: author,
            iconURL: authorURL
          };
    
        auditChannel.send(
        {
            embeds: [auditEmbed]
        });
    },
};