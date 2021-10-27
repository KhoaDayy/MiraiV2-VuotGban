module.exports.config = {
  name: "timnguoihocbaingaymai",
  version: "1.0.0", 
  hasPermssion: 0,
  credits: "Kynno",
  description: "timn guoi hoc bai ngau nhien",
  commandCategory: "random-member", 
  usages: "timnguoihocbaingaymai", 
  cooldowns: 0,
  dependencies: [] 
};
module.exports.run = async function({ api, event, args, Users, Threads, Currencies }) {
        const axios = global.nodemodule["axios"];
        const fs = global.nodemodule["fs-extra"];
        var data = await Currencies.getData(event.senderID);
        var money = data.money
        event.threadID,event.messageID)
        else {
        var tle = tl[Math.floor(Math.random() * tl.length)];
        let dataa = await api.getUserInfo(event.senderID);
        let namee = await dataa[event.senderID].name
        let loz = await api.getThreadInfo(event.threadID);
        var emoji = loz.participantIDs;
        var id = emoji[Math.floor(Math.random() * emoji.length)];
        let data = await api.getUserInfo(id);
        let name = await data[id].name
        var arraytag = [];
                arraytag.push({id: event.senderID, tag: namee});
                arraytag.push({id: id, tag: name});
        let Avatar = (await axios.get( `https://graph.facebook.com/${id}/picture?height=720&width=720&access_token=170440784240186|bc82258eaaf93ee5b9f577a8d401bfc9`, { responseType: "arraybuffer" } )).data;
            fs.writeFileSync( __dirname + "/cache/avt.png", Buffer.from(Avatar, "utf-8") );
        let Avatar2 = (await axios.get( `https://graph.facebook.com/${event.senderID}/picture?height=720&width=720&access_token=170440784240186|bc82258eaaf93ee5b9f577a8d401bfc9`, { responseType: "arraybuffer" } )).data;
            fs.writeFileSync( __dirname + "/cache/avt2.png", Buffer.from(Avatar2, "utf-8") );
        var timnguoihocbaingaymai = [];
              timnguoihocbaingaymai.push(fs.createReadStream(__dirname + "/cache/avt.png"));
              timnguoihocbaingaymai.push(fs.createReadStream(__dirname + "/cache/avt2.png"));
        var msg = {body: `Hoàn thành tìm người học bài cho ngày mai!\n`+namee+" "+"vàvà"+" "+name, mentions: arraytag, attachment: timnguoihocbaingaymai}
        return api.sendMessage(msg, event.threadID, event.messageID)
      }
}