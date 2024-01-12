const {SlashCommandBuilder, ButtonBuilder, ButtonStyle, ActionRowBuilder} = require('discord.js');

const {EMBEDS} = require('../../constants.json');

const discordLink = new ButtonBuilder()
  .setURL('https://discord.gg/ahhWwa8EaK')
  .setLabel('Join!')
  .setStyle(ButtonStyle.Link);

const signup = new ButtonBuilder()
  .setURL('https://forms.gle/VREXQq7ox7psQMct6')
  .setLabel('Sign up!')
  .setStyle(ButtonStyle.Link);

const discordRow = new ActionRowBuilder()
  .addComponents(discordLink);

const swatRow = new ActionRowBuilder()
  .addComponents(signup);

module.exports =
{
  // ./join [type]
	data: new SlashCommandBuilder()
		.setName('join')
		.setDescription('Gets information to join the specified server')
		.addStringOption(option =>
			option.setName('type')
				.setDescription('The game')
				.setRequired(true)
				.addChoices(
        {
          name: 'Discord Server',
          value: 'join_discordServer'
        },
        {
          name: 'SWAT Team',
          value: 'join_swatTeam'
        })),
    
	async execute(interaction)
  {
		const type = interaction.options.getString('type');

    if(type === 'join_discordServer')
    {
      try
      {
        await interaction.reply(
        {
          embeds: [EMBEDS.JOIN_DISCORD],
          components: [discordRow],
          ephemeral: true
        });
      }catch(err)
      {
        await interaction.reply(
        {
          embeds: [EMBEDS.ERROR],
          ephemeral: true
        });
      }
		}else if(type === 'join_swatTeam')
    {
      try
      {
        await interaction.reply(
        {
          embeds: [EMBEDS.JOIN_SWATTEAM],
          components: [swatRow],
          ephemeral: true
        });
      }catch(err)
      {
        await interaction.reply(
        {
          embeds: [EMBEDS.ERROR],
          ephemeral: true
        });
      }
		}
	},
};