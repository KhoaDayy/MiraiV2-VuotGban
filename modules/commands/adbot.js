const request = require('request');
const fs = global.nodemodule["fs-extra"]
module.exports.config = {
  name: "adbot",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "HelyT",
  description: "Kiểm tra thông tin ngơời dùng.",
  commandCategory: "Info",
  usages: "info",
  cooldowns: 1,
  dependencies: {
"request": ""
}
};

module.exports.run = async({api,event,args,Users,global,Currencies}) => {
var callback = () => api.sendMessage(
  {body:`梁ADMIN BOT梁\n
  \n👀 Tên: Nguyễn Đăng Khoa ( Kynx )
  \n👤 😶 Giới tính: Nam
  \n💫 Chiều cao cân nặng: 1m65 45 kg
  \n💘 Mối quan hệ: Độc thân
  \n😎 Quê quán: Bắc Giang 
  \n🤔 Nơi ở: Bắc Giang
  \n👫 Gu: Giọng nói :<
  \n🌸 Tính cách: Là một con người Fboiz nhưng khi yêu xong rất là tềnh cảm :3
  \n👉 Profile: https://github.com/KhoaDayy/Kynno`,
    attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => 
    fs.unlinkSync(__dirname + "/cache/1.png"));  
      return request(
        encodeURI(`https://www.facebook.com/photo/?fbid=391870005624555&set=a.148693199942238`)).pipe(
fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
       };