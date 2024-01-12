const {SlashCommandBuilder, PermissionFlagsBits, ButtonBuilder, ButtonStyle, ActionRowBuilder} = require('discord.js');

const {EMBEDS} = require('../../constants.json');

module.exports =
{
  // ./reactionroles [type] [channel]
	data: new SlashCommandBuilder()
		.setName('reactionroles')
		.setDescription('Creates a reaction role.')
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
		.addStringOption(option =>
			option.setName('type')
				.setDescription('The type of reaction role.')
				.setRequired(true)
				.addChoices(
        {
          name: 'Pronouns',
          value: 'roles_pronouns'
        },
        {
          name: 'Department',
          value: 'roles_department'
        },
        {
          name: 'Pings',
          value: 'roles_pings'
        },
        {
          name: 'Gaming',
          value: 'roles_gaming'
        },
        {
          name: 'Programming',
          value: 'roles_programming'
        }))
    .addChannelOption(option =>
      option.setName('channel')
        .setDescription('The channel to send the reaction roles in')
        .setRequired(true)),
  
	async execute(interaction)
  {
		const type = interaction.options.getString('type');
    const channel = interaction.options.getChannel('channel');

    if(type === 'roles_pronouns')
    {
      try
      {
        const pronouns_heHim = new ButtonBuilder()
          .setCustomId('pronouns_heHim')
          .setLabel('He/Him')
          .setStyle(ButtonStyle.Primary)
          .setEmoji(
          {
            name: '💙'
          });

        const pronouns_sheHer = new ButtonBuilder()
          .setCustomId('pronouns_sheHer')
          .setLabel('She/Her')
          .setStyle(ButtonStyle.Primary)
          .setEmoji(
          {
            name: '💜'
          });

        const pronouns_theyThem = new ButtonBuilder()
          .setCustomId('pronouns_theyThem')
          .setLabel('They/Them')
          .setStyle(ButtonStyle.Primary)
          .setEmoji(
          {
            name: '💚'
          });

        const pronouns_any = new ButtonBuilder()
          .setCustomId('pronouns_any')
          .setLabel('Any')
          .setStyle(ButtonStyle.Primary)
          .setEmoji(
          {
            name: '🧡'
          });

        const pronouns_other = new ButtonBuilder()
          .setCustomId('pronouns_other')
          .setLabel('Other Pronouns')
          .setStyle(ButtonStyle.Primary)
          .setEmoji(
          {
            name: '❤️'
          });

        const buttonRow = new ActionRowBuilder()
          .addComponents(pronouns_heHim)
          .addComponents(pronouns_sheHer)
          .addComponents(pronouns_theyThem)
          .addComponents(pronouns_any)
          .addComponents(pronouns_other);
        
        channel.send(
        {
          embeds: [EMBEDS.PRONOUNS],
          components: [buttonRow]
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
    }else if(type === 'roles_department')
    {
      try
      {
        const department_operations = new ButtonBuilder()
          .setCustomId('department_operations')
          .setLabel('Operations')
          .setStyle(ButtonStyle.Primary)
          .setEmoji(
          {
            name: '🔴'
          });

        const department_field = new ButtonBuilder()
          .setCustomId('department_field')
          .setLabel('Field Agent')
          .setStyle(ButtonStyle.Primary)
          .setEmoji(
          {
            name: '🔵'
          });

        const department_intelligence = new ButtonBuilder()
          .setCustomId('department_intelligence')
          .setLabel('Intelligence')
          .setStyle(ButtonStyle.Primary)
          .setEmoji(
          {
            name: '🟡'
          });

        const department_research = new ButtonBuilder()
          .setCustomId('department_research')
          .setLabel('Research')
          .setStyle(ButtonStyle.Primary)
          .setEmoji(
          {
            name: '🟢'
          });

        const buttonRow = new ActionRowBuilder()
          .addComponents(department_operations)
          .addComponents(department_field)
          .addComponents(department_intelligence)
          .addComponents(department_research)
        
        channel.send(
        {
          embeds: [EMBEDS.DEPARTMENT],
          components: [buttonRow]
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
    }else if(type === 'roles_pings')
    {
      try
      {
        const announcements_pings = new ButtonBuilder()
          .setCustomId('announcements_pings')
          .setLabel('Announcements')
          .setStyle(ButtonStyle.Primary)
          .setEmoji(
          {
            name: '🔔'
          });

        const buttonRow = new ActionRowBuilder()
          .addComponents(announcements_pings)
        
        channel.send(
        {
          embeds: [EMBEDS.ANNOUNCEMENTS],
          components: [buttonRow]
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
    }else if(type === 'roles_gaming')
    {
      try
      {
        const gaming_button = new ButtonBuilder()
          .setCustomId('gamer')
          .setStyle(ButtonStyle.Primary)
          .setEmoji(
          {
            name: '🎮'
          });

        const buttonRow = new ActionRowBuilder()
          .addComponents(gaming_button)
        
        channel.send(
        {
          embeds: [EMBEDS.GAMING],
          components: [buttonRow]
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
    }else if(type === 'roles_programming')
    {
      try
      {
        const programming_button = new ButtonBuilder()
          .setCustomId('programmer')
          .setStyle(ButtonStyle.Primary)
          .setEmoji(
          {
            name: '💻'
          });

        const buttonRow = new ActionRowBuilder()
          .addComponents(programming_button)
        
        channel.send(
        {
          embeds: [EMBEDS.PROGRAMMING],
          components: [buttonRow]
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
  }
}