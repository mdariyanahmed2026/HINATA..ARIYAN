const fs = require("fs");

module.exports = {
  name: "help",
  execute(api, event) {
    const commands = global.GoatBot.commands;
    const totalCmd = commands.size;

    const menu = `
╔═══════════════╗
 🎏 𝗔𝗥𝗜𝗬𝗔𝗡 𝗕𝗢𝗧 𝙼𝙴𝙽𝚄
╚═══════════════╝

┍━━━[ INFO ]☃
┋ᐉ help
┋ᐉ owner
┋ᐉ uid
┋ᐉ tid
┕━━━━━━━━━━━━━━◊

┍━━━[ AI ]☃
┋ᐉ ai
┋ᐉ gpt
┋ᐉ gemini
┋ᐉ prompt
┕━━━━━━━━━━━━━━◊

┍━━━[ FUN ]☃
┋ᐉ meme
┋ᐉ joke
┋ᐉ slap
┋ᐉ kiss
┕━━━━━━━━━━━━━━◊

┍━━━[ GAME ]☃
┋ᐉ quiz
┋ᐉ guess
┋ᐉ cricketgame
┕━━━━━━━━━━━━━━◊

┍━━━[ ISLAMIC ]☃
┋ᐉ hadis
┋ᐉ namaz
┕━━━━━━━━━━━━━━◊

┍━━━━[𝗜𝗡𝗙𝗢𝗥𝗠]━━━━◊
┋➥ 𝗧𝗢𝗧𝗔𝗟 𝗖𝗠𝗗: ${totalCmd}
┋➥ 𝗣𝗥𝗘𝗙𝗜𝗫:  ⦃ - ⦄
┋➥ 𝗢𝗪𝗡𝗘𝗥:  ARIYAN
┋➥ 𝗙𝗕: facebook.com/https://www.facebook.com/share/1D8QWsEgPS/
┕━━━━━━━━━━━━━━━◊
`;

    api.sendMessage(
      {
        body: menu,
        attachment: fs.createReadStream(__dirname + "/../ariyan.jpg")
      },
      event.threadID
    );
  }
};
