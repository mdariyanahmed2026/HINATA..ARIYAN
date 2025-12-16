const fs = require("fs");

module.exports = {
  name: "owner",
  execute(api, event) {
    api.sendMessage(
      {
        body: "👤 Name: Soho\n🌍 Bangladesh",
        attachment: fs.createReadStream(__dirname + "/../soho.jpg")
      },
      event.threadID
    );
  }
};
