const fs = require("fs");

module.exports = {
  name: "help",
  execute(api, event) {
    const files = fs.readdirSync("./commands")
      .filter(f => f.endsWith(".js"))
      .map(f => "➤ " + f.replace(".js", ""))
      .join("\n");

    api.sendMessage(
      `📜 COMMAND LIST\n\n${files}`,
      event.threadID
    );
  }
};
