const {SlashCommandBuilder, PermissionFlagsBits, EmbedBuilder} = require('discord.js');

module.exports =
{
	// ./userinfo [user]
	data: new SlashCommandBuilder()
		.setName('userinfo')
		.setDescription('Gets information about a user')
	    .addUserOption(option =>
		    option.setName('user')
		        .setDescription('User')
		        .setRequired(true)),
    
	async execute(interaction)
	{
	    const user = interaction.options.getUser('user');
	    const author = user.username;
	    const authorURL = user.displayAvatarURL();
		const user_id = user.id;
		const discriminator = user.discriminator;
		const dateCreated = user.createdAt;
		const isBot = user.bot;

		const embed = new EmbedBuilder()
			.setColor(0x0033ff)
			.setTitle('User Information')
			.setAuthor(
			{
				name: author,
				iconURL: authorURL
			})
			.setThumbnail(authorURL)
			.addFields
			({
				name: 'Username',
				value: "```" + author + "#" + discriminator + "```",
				inline: true
			},
			{
				name: 'User ID',
				value: "```" + user_id + "```",
				inline: true
			},
			{
				name: '\u200B',
				value: '\u200B',
		        inline: true
			},
			{
				name: 'Account Created',
				value: "```" + dateCreated + "```"
		    })
			.setFooter
			({
				text: 'T.E.S.L.A.',
				iconURL: 'https://i.ibb.co/nj68pPV/TESLA-Logo.png'
			});
		
	    embed.author =
	    {
		    name: author,
		    iconURL: authorURL
	    };
		
		interaction.reply(
		{
		    embeds: [embed]
		});
	}
};