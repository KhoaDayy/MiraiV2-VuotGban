const fs = require("fs");
module.exports.config = {
  name: "Thái",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "kynx",
  description: "thái",
  commandCategory: "Không cần dấu lệnh",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
  var { threadID, messageID } = event;
  if (event.body.indexOf("Thái") == 0 || (event.body.indexOf("thái") == 0)) {
    var msg = {
      body: "Thái Dance",
      attachment: fs.createReadStream(__dirname + `/cache/thai.MOV`)
    }
    return api.sendMessage(msg, threadID, messageID);
  }
}
module.exports.run = function({ api, event, client, __GLOBAL }) {

}