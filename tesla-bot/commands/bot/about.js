const {SlashCommandBuilder} = require('discord.js');

const {EMBEDS} = require('../../constants.json');

module.exports =
{
  // ./about
	data: new SlashCommandBuilder()
		.setName('about')
		.setDescription('Shows information about the bot.'),
  
	async execute(interaction)
  {
    await interaction.reply(
    {
      embeds: [EMBEDS.ABOUT]
    });
  }
};