const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "pathumamantha2008@gmail.com";
global.location = "Asia/Colombo";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://sam:sam@cluster0.u1smxsv.mongodb.net/?retryWrites=true&w=majority";
global.allowJids = process.env.ALLOW_JID || "94773673969@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/colombo";
global.github = process.env.GITHUB || "https://github.com/MrMasterOfc/MASTER-MD-V2";
global.gurl = process.env.GURL || "";
global.website = process.env.GURL || "https://www.tiktok.com/@kevin_levin_official?_t=8nWG1UGs6fo&_r=1";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.fm/u/6wmptrkckx";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "94773673969,94773673969";
global.owner = process.env.OWNER_NUMBER || "94773673969;
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "true",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "https://files.fm/u/6wmptrkckx";
global.waPresence = process.env.WAPRESENCE || "recording";  //Fill the value: 'unavailable'(for nothing) | 'available'(for alwaysonline) | 'composing'(for typing) | 'recording' | 'paused'
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "94720797915";
global.read_status_from = process.env.READ_STATUS_FROM || "94773673969";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://wasimdscanner-68feefafb737.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0lFRjVxRmIrVm03ZlpLOHFJaWFRanh5QnpyVXNwTFRMOW9wSkgrdXoxVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQVBHdWxIU20yNWZXdmh6UnMzSEhjN01QZ2dHTWptazZJWm1SY2MxdE4yMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnRkY0ZGVqVmRTbHlMVGliM3lCYWJZdURBZFZpNXFQNlJHYlRpS2IzZFVJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4a3JXNlVWaFAxTll4NTJ6b2g3NDdTWkxmTHRLdnJ6VUhycUdOSHZFaTF3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9DbldoQitDNENuOFYxZm1nSVUwVTVpZVJ2SGlaQ3FoY0tkdWJreHNjVzg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImpHK1RhRytWQmJYd3pjYUtPN0k3dTZ0MU5JYXBSaHArbFVoRG9oRjFQanM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUkzRmFxeGVKcEFUcVR5ZTRFSFUvVGZUWUU2SVpJTnFZSkdYSTFYTktIbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZTdMeGpFMFFBVHRTREo1c0dNMWt0c0hMci9OSXZoc1JJK2lYUjlpVzAwRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRPTGY3dzFzRDVRRUR2Yy9mZFd2am1IaXVvdmw3eWVkc3cwQzRMb3FaT0NoK09hb0I1Nmg3ZU9vM1R6bWE1b3JjOFFCd0dkT3dPSzlqblFDR1l5WENBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjQ1LCJhZHZTZWNyZXRLZXkiOiJzbTV5bnFjVENEdVVmVTRTL0IweDZVcGd2Q09DWjliWXNTM2pqemM1ajE4PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJzOTNSOVJmT1JRYS01M2NySVlLWjZBIiwicGhvbmVJZCI6IjFhYzRlNTE3LTQyMTItNGFlMy1iOTU1LTY2NmRkMWRmZjViNCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJqU0VZVjZaQm9LS2FMc0tGL3lGNHdERTg5WUU9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWTdjODBub1Z1Q294TW0yTHViYk9xUktKSGxjPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ik5HUVJMVjVXIiwibWUiOnsiaWQiOiI5NDc3MzY3Mzk2OToxNkBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTnY1OU1nREVJV0c4N01HR0FVZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5Ijoib3cxa3A1Y012YnIycjJITnFYdmcyTzIvTW5HTTRVR0ZhQ1hNdnd4UGFtMD0iLCJhY2NvdW50U2lnbmF0dXJlIjoicEF4NXBJNXB4N21kNDltbEV6R0VpdjNvNG95QURqME9GVVVVbGxITWd1OVZFbXQ4Uk5yS05JdVhvM1FiZFNraDl4OXBSUEpBTEdJK05TRWUybGtGQ0E9PSIsImRldmljZVNpZ25hdHVyZSI6Inl1c3lhNEhXTGtHbjVMMHNqd2kzNFBJOG5KMk5tblBzL1dSeUpjS28vam1BdkNKWEN1WXlualF1aXFVMUpKbHk0aXNReVBkK3JaOXpOZlJpeDYxSUJnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3NzM2NzM5Njk6MTZAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYU1OWktlWERMMjY5cTloemFsNzROanR2ekp4ak9GQmhXZ2x6TDhNVDJwdCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcxOTQ1MjQzNCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFBaEMifQ=="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "©ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴍʀ ꜱᴀʜᴀɴ ᴏꜰᴄ",
  author: process.env.PACK_AUTHER || "Kevin",
  packname: process.env.PACK_NAME || "MASTER-MD",
  botname: process.env.BOT_NAME || "•KEVIN-MD",
  ownername: process.env.OWNER_NAME || "Kevin",
  errorChat: process.env.ERROR_CHAT || "94720797915",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "neLbXXrp8bSDcohnp1CW5UEa",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "345f70f1c3f2ecef4d718d33c14026f9",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
