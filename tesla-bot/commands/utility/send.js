const {SlashCommandBuilder, PermissionFlagsBits} = require('discord.js');
const {EMBEDS} = require('../../constants.json');

module.exports =
{
  // ./send [message] [channel]
	data: new SlashCommandBuilder()
		.setName('send')
		.setDescription('Sends a message to the specified channel')
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
    .addStringOption(option =>
      option.setName('message')
        .setDescription('The message')
        .setRequired(true))
    .addChannelOption(option =>
      option.setName('channel')
        .setDescription('Channel to send the message to')
        .setRequired(true)),

	async execute(interaction)
  {
    try
    {
      const message = interaction.options.getString('message');
      const channel = interaction.options.getChannel('channel');

      channel.send(message);

      interaction.reply(
      {
        embeds: [EMBEDS.SUCCESS],
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
	},
};