module.exports = {
  name: "clear",
  aliases: ["purge", "delete"],
  permissions: ["ADMINISTRATOR", "MANAGE_MESSAGES", "CONNECT"],
  description: "Clear messages",
  async execute(message, args, cmd, client, Discord) {
    if (!args[0])
      return message.reply(
        "Please enter the amount of messages that you want to clear!"
      );
    if (isNaN(args[0])) return message.reply("Please enter a real number");

    if (args[0] > 100)
      return message.reply("You can not delete more than 100 messages");
    if (args[0] < 1)
      return message.reply("You must delete atleast one message");

    await message.channel.messages
      .fetch({ limit: args[0] })
      .then((messages) => {
        message.channel.bulkDelete(messages);
      });
  },
};
