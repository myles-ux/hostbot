module.exports = {
  name: "balance",
  aliases: ["bal", "bl"],
  permissions: [],
  description: "Check the user balance",
  execute(message, args, cmd, client, discord, profileData) {
    const newEmbed = new discord.MessageEmbed()
      .setColor("RANDOM")
      .setTitle(`${message.author.username}'s balance`)
      .setDescription(
        ` š³ **Wallet**: ${profileData.coins}$ \nšļø **Bank**: ${profileData.bank}$`
      )
      .setTimestamp(message.createdAt)
      .setFooter("š");
    message.channel.send(newEmbed);
  },
};
