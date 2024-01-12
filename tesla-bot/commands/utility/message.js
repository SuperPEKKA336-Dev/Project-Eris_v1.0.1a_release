const {SlashCommandBuilder, PermissionFlagsBits, EmbedBuilder} = require('discord.js');
const {EMBEDS} = require('../../constants.json');

module.exports =
{
  // ./message [title] [description] [user]
	data: new SlashCommandBuilder()
		.setName('message')
		.setDescription('Sends a message to a specified user')
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
    .addStringOption(option =>
      option.setName('title')
        .setDescription('Title of the message')
        .setRequired(true))
    .addStringOption(option =>
      option.setName('description')
        .setDescription('Description of the message')
        .setRequired(true))
    .addUserOption(option =>
      option.setName('user')
        .setDescription('User to send the message to')
        .setRequired(true)),
    
	async execute(interaction)
  {
    const user = interaction.options.getUser('user');

    const embed = EMBEDS.MESSAGE;

    const title = interaction.options.getString('title');
    const description = interaction.options.getString('description');
    const author = interaction.user.username;
    const authorURL = interaction.user.displayAvatarURL();

    embed.title = title;
    embed.description = description;
    embed.author = 
    {
      name: author,
      iconURL: authorURL
    };

    try
    {
      interaction.client.users.send(user,
      {
        embeds: [embed]
      });

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
  }
};