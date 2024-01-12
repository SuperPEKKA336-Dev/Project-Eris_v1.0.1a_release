const {SlashCommandBuilder, PermissionFlagsBits, ButtonBuilder, ButtonStyle, ActionRowBuilder} = require('discord.js');

const {EMBEDS} = require('../../constants.json');

module.exports =
{
  // ./embed [type] [channel]
	data: new SlashCommandBuilder()
		.setName('embed')
		.setDescription('Sends an embed.')
		.addStringOption(option =>
			option.setName('type')
				.setDescription('The embed.')
				.setRequired(true)
				.addChoices(
        {
          name: 'Rules',
          value: 'embed_rules'
        },
        {
          name: 'Info',
          value: 'embed_info'
        },
        {
          name: 'SWAT',
          value: 'embed_swatTeam'
        }))
    .addChannelOption(option =>
      option.setName('channel')
        .setDescription('The channel to send the embed in')
        .setRequired(true)),
  
	async execute(interaction)
  {
		const type = interaction.options.getString('type');
    const channel = interaction.options.getChannel('channel');

    if(type === 'embed_rules')
    {
      try
      {
        channel.send(
        {
          embeds: [EMBEDS.RULES]
        });
    
        await interaction.reply(
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
		}else if(type === 'embed_info')
    {
      try
      {
        channel.send(
        {
          embeds: [EMBEDS.INFO_1]
        });

        channel.send(
        {
          embeds: [EMBEDS.INFO_2]
        });

        channel.send(
        {
          embeds: [EMBEDS.INFO_3]
        });
    
        await interaction.reply(
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
    }else if(type === 'embed_swatTeam')
    {
      try
      {
        const signup = new ButtonBuilder()
          .setURL('https://forms.gle/VREXQq7ox7psQMct6')
          .setLabel('Sign up!')
          .setStyle(ButtonStyle.Link);
        
        const row = new ActionRowBuilder()
          .addComponents(signup);

          channel.send(
          {
            embeds: [EMBEDS.SWATTEAM],
            components: [row]
          });
      
          await interaction.reply(
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
    }else if(type === 'embed_crew')
    {
      try
      {
        const signup = new ButtonBuilder()
          .setURL('https://forms.gle/VREXQq7ox7psQMct6')
          .setLabel('Sign up!')
          .setStyle(ButtonStyle.Link);
        
        const row = new ActionRowBuilder()
          .addComponents(signup);

          channel.send(
          {
            embeds: [EMBEDS.CREW]
          });
      
          await interaction.reply(
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
    }else if(type === 'embed_crewServer')
    {
      try
      {
        const button = new ButtonBuilder()
          .setURL('https://www.roblox.com/games/606849621?privateServerLinkCode=25527788612279763569865956289841')
          .setLabel('Join!')
          .setStyle(ButtonStyle.Link);
        
        const row = new ActionRowBuilder()
          .addComponents(button);

        channel.send(
        {
          embeds: [EMBEDS.CREW_SERVER]
        });
    
        await interaction.reply(
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
	},
};