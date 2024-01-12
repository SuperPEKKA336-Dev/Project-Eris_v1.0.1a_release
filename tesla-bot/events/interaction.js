const {Events} = require('discord.js');
const {EMBEDS, ROLE_IDS, ERROR, ROLE_ADDED, ROLE_REMOVED} = require('../constants.json');

module.exports =
{
	name: Events.InteractionCreate,
	async execute(interaction)
  {
		if(interaction.isChatInputCommand())
    {
			const command = interaction.client.commands.get(interaction.commandName);

			if(!command)
      {
				console.error(`No command matching ${interaction.commandName} was found.`);
				return;
			}

			try
      {
				await command.execute(interaction);
			}catch (error)
      {
				console.error(`Error executing ${interaction.commandName}`);
				console.error(error);
			}
		}
    else if(interaction.isButton()) // Button interactions
    {
      const role = interaction.guild.roles.cache.get(ROLE_IDS[interaction.customId.toUpperCase()]);
  
      if(role)
      {
        const hasRole = interaction.member.roles.cache.has(role.id);
    
        if(hasRole)
          return interaction.member.roles
            .remove(role)
            .then((member) =>
              interaction.reply(
              {
                embeds: [EMBEDS.ROLE_REMOVED],
                ephemeral: true,
              })
            )
            .catch((err) =>
            {
              console.log(err);
              return interaction.reply(
              {
                embeds: [EMBEDS.ERROR],
                ephemeral: true,
              });
            });
        else
          return interaction.member.roles
            .add(role)
            .then((member) =>
              interaction.reply(
              {
                embeds: [EMBEDS.ROLE_ADDED],
                ephemeral: true,
              })
            )
            .catch((err) =>
            {
              console.log(err);
              return interaction.reply(
              {
                embeds: [EMBEDS.ERROR],
                ephemeral: true,
              });
            });
      }
    }
	},
};