var Scraper = require("images-scraper");

const google = new Scraper({
  puppeter: {
    headless: true,
  },
});

module.exports = {
  name: "image",
  description: "sends an image to discord",
  async execute(client, message, args) {
    const image_query = args.join(" ");
    if (!image_query) return message.channel.send("Please enter an image name");

    const image_results = await google.scrape(image_query, 1);
    message.channel.send(image_results[0].url);
  },
};
