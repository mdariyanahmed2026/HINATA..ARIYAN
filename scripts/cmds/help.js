const fs = require("fs");

module.exports = {
  config: {
    name: "help",
    version: "2.0",
    author: "Ariyan",
    role: 0,
    category: "info",
    shortDescription: { en: "Show all commands" }
  },

  onStart: async function ({ api, event, role }) {
    const commands = global.GoatBot.commands;
    const prefix = "-";

    const categories = {};
    let totalCmd = 0;

    for (const [name, cmd] of commands) {
      if (cmd.config?.role > role) continue;

      const category = (cmd.config?.category || "OTHER").toUpperCase();
      if (!categories[category]) categories[category] = [];
      categories[category].push(name);
      totalCmd++;
    }

    let msg = `
╔═══════════════╗
 🎏 𝗔𝗥𝗜𝗬𝗔𝗡 𝗕𝗢𝗧 𝙼𝙴𝙽𝚄
╚═══════════════╝
`;

    for (const cat in categories) {
      msg += `\n┍━━━[ ${cat} ]☃\n`;
      categories[cat].sort().forEach(cmd => {
        msg += `┋ᐉ ${cmd}\n`;
      });
      msg += `┕━━━━━━━━━━━━━━◊\n`;
    }

    msg += `
┍━━━━[𝗜𝗡𝗙𝗢𝗥𝗠]━━━━◊
┋➥ 𝗧𝗢𝗧𝗔𝗟 𝗖𝗠𝗗: ${totalCmd}
┋➥ 𝗣𝗥𝗘𝗙𝗜𝗫: ⦃ ${prefix} ⦄
┋➥ 𝗢𝗪𝗡𝗘𝗥: ARIYAN
┋➥ 𝗙𝗕: facebook.com/share/1A1Rurf6VA/
┕━━━━━━━━━━━━━━━◊
`;

    api.sendMessage(
      {
        body: msg,
        attachment: fs.createReadStream(__dirname + "/../ariyan.jpg")
      },
      event.threadID
    );
  }
};
