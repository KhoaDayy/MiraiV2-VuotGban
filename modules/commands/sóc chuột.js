const fs = require("fs");
module.exports.config = {
  name: "Sóc chuột",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "kynx",
  description: "sóc chuột",
  commandCategory: "Không cần dấu lệnh",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
  var { threadID, messageID } = event;
  if (event.body.indexOf("Sóc chuột") == 0 || (event.body.indexOf("sóc chuột") == 0)) {
    var msg = {
      body: "Sóc chuột",
      attachment: fs.createReadStream(__dirname + `/cache/kaqtl.mp4`)
    }
    return api.sendMessage(msg, threadID, messageID);
  }
}
module.exports.run = function({ api, event, client, __GLOBAL }) {

}