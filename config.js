//#ENJOY
/**
**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "";
global.location = "Sri lanka .";
global.mongodb = process.env.MONGODB_URI || "mongodb://mongo:bREwFKCVLDvzfqqsqVNXloIYCiiLBbuR@monorail.proxy.rlwy.net:38244";
global.allowJids = process.env.ALLOW_JID || "94789958225@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "postgresql://rcdnew:DUjQ85jkrvaF5HmsoyjBgyoSYhpsHIjN@dpg-cqamj22ju9rs739asi6g-a.oregon-postgres.render.com/rcd";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "srilank/ampara";
global.github = process.env.GITHUB || "https://github.com/DEXTER-BOTS/RCD-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vag1WQFJf05dF0pQeU3u";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vag1WQFJf05dF0pQeU3u";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "94789958225";
global.sudo = process.env.SUDO || "94789958225,94757660788,94770730717,94785274495,94753574803";
global.owner = process.env.OWNER_NUMBER || "94789958225,94753574803";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "";
global.scan = "";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0x5dWo2NlNEVEJiNk1teldVZUZMSy9Ub0tYZ0h4ek1hVDkvdWJrUlAxND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNGRVMW5yTVJtRDVJV2F1aFA4UHAxN2pUM2dxNTJNRWhWVXRqOEpwSHhqZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTT0F0aTFkUEJEM0NxdmJySTdOakN2d3hGNElqbnY4RlpYSnB5VG1wZlVFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzR0dUT0VLVlJ3eUNXQVlaY1IrcEpPeWYrNC9iQ0pNMjMxUGIwaUFJN2pJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhKQUlrZjQvTkhtdGZpL0hFWUlkQWxMajlzY2lGeE5jcUkzNXY2NVUxa2c9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNFRmtMS0JrWTlGSTNUQlY4SUZ6V2UwRjJSdzFrcTVmOEs1bTVDMURIQ3c9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEJuUi9tcWxPWnRYTWM2bVJ5QnB1TjYzN3laeGdWTmFxenN1WDZtNUxrTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSXBlUkVDbE9GaUFDang5MnhOYWVtZXY3NUNRUGlBRlVFclgwQ2ZQZTBsST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjFzeEo4TWRDTnZYOTZ1RVA0c2t0UnM2ZlplTzVjTy9rRzFzd0s1WDVQbXlHajRBR3EvblQrWGFxWTRKcm0rUmZTRExFN1JPRTNEbmk2d0FSZkZCSGp3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTYzLCJhZHZTZWNyZXRLZXkiOiJ4bHVFQ2ErUCs0L2hXYTNTWHlKVnBtQWtuM3lnNE05TGhJcHZtTE1RcVFJPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIwMTEyMjUyMjcyOUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJDNTJFNjFBRkU3OTJGNUMyNjE2OTBCQTIzRUMwN0FCMCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIyMTQwNTAxfSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyMDExMjI1MjI3MjlAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMTcwQTE5OEEwQjk0NzRFRTIxMzI0MDdCQjM3RjM0MTgifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMjE0MDUwMn1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiVEo5d1JvNkJScUNLdDRubVpqZllPdyIsInBob25lSWQiOiJlNjkzYTUwMy0zNTIxLTRlOTctYTUwMC01M2ZkN2U4NGY0ODEiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQkNwLzVSN3dqcjRmNG55VU9uRkpnaUh2Yjg0PSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdWLzQ5TkpycGNPYjBMRUxsWlZMS3BnNFJoST0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJDTVo5RDExNiIsIm1lIjp7ImlkIjoiMjAxMTIyNTIyNzI5OjM3QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkFJYm90In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKRE5rVWNReG82WHRRWVlBaUFBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiI3L0FNWG5lSzhRTTloWVF5bFZRSTBoV3MzYWY5dFUvZmpURzRHYUJDcUZZPSIsImFjY291bnRTaWduYXR1cmUiOiJaTCtxb2lVeVAyZEhtMlBtb2JycG9VbERHN2NTSzhGNEhVcit1OXd3VlYrS3Z6RXFvby96b3JwUlIxaG85cFpRcGJwa0N1Q1MzbGx2YjNiaERXMGxBZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiNlJ3OU1obU80SE9vVS8xWU1ESTdvZzZCRjc0TDJOZUpYMFBZaU8rNkh5UnlEQjY5a0txL1dzZlhwQnpLMnNjVUNaZEEzZXdScXhaaSt1Y1ZSMDI3Z3c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMDExMjI1MjI3Mjk6MzdAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZS93REY1M2l2RURQWVdFTXBWVUNOSVZyTjJuL2JWUDM0MHh1Qm1nUXFoVyJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMjE0MDUwMCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFBVzgifQ=="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝗥𝗖𝗗 𝗠𝗗 𝗣𝗢𝗪𝗘𝗥 𝗕𝗬 🇱🇰",
  author: process.env.PACK_AUTHER || "𝐑𝐂𝐃",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝐑𝐂𝐃 𝐌𝐃",
  ownername: process.env.OWNER_NAME || "𝗥𝗖𝗗 𝗧𝗘𝗔𝗠",
  errorChat: process.env.ERROR_CHAT || "94789958225",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
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
