I'mconst fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "2348154528940" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348154528940";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text"  // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_26_08_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE2LFxuICAgICAgICA1OSxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE4LFxuICAgICAgICA5OCxcbiAgICAgICAgOTcsXG4gICAgICAgIDU4LFxuICAgICAgICA3NCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTM4LFxuICAgICAgICA2OSxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMCxcbiAgICAgICAgMTg5LFxuICAgICAgICA0LFxuICAgICAgICAyNSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTA3LFxuICAgICAgICA3OSxcbiAgICAgICAgMzAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTU0LFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0NSxcbiAgICAgICAgMTE5LFxuICAgICAgICA4OCxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTI2LFxuICAgICAgICA3NSxcbiAgICAgICAgODIsXG4gICAgICAgIDE1MixcbiAgICAgICAgNyxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDc3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDM1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyOCxcbiAgICAgICAgMTg5LFxuICAgICAgICA0MSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxODUsXG4gICAgICAgIDM2LFxuICAgICAgICA5MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAyOSxcbiAgICAgICAgMzgsXG4gICAgICAgIDU1LFxuICAgICAgICAyMDksXG4gICAgICAgIDEyMixcbiAgICAgICAgMTE2LFxuICAgICAgICAxODAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxOTksXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDMyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDY1LFxuICAgICAgICA0NyxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMyxcbiAgICAgICAgNzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkxLFxuICAgICAgICAyMSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNTEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTY4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNDMsXG4gICAgICAgIDEsXG4gICAgICAgIDExNyxcbiAgICAgICAgODQsXG4gICAgICAgIDIzLFxuICAgICAgICAyMzksXG4gICAgICAgIDgwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTU5LFxuICAgICAgICA5OSxcbiAgICAgICAgNzIsXG4gICAgICAgIDQxLFxuICAgICAgICAyMjksXG4gICAgICAgIDE3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgODcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNDAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTksXG4gICAgICAgIDQxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE0NixcbiAgICAgICAgNTMsXG4gICAgICAgIDYxLFxuICAgICAgICA2NixcbiAgICAgICAgMTY3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIzNixcbiAgICAgICAgNDQsXG4gICAgICAgIDExMCxcbiAgICAgICAgOTMsXG4gICAgICAgIDg4LFxuICAgICAgICA3MCxcbiAgICAgICAgODcsXG4gICAgICAgIDExOCxcbiAgICAgICAgNjEsXG4gICAgICAgIDI5LFxuICAgICAgICAxMzksXG4gICAgICAgIDEzOCxcbiAgICAgICAgNDYsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjEzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTA3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMSxcbiAgICAgICAgNzUsXG4gICAgICAgIDg0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgODUsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNjMsXG4gICAgICAgIDU3LFxuICAgICAgICAyNCxcbiAgICAgICAgNDYsXG4gICAgICAgIDU5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDUxLFxuICAgICAgICA4NyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDczLFxuICAgICAgICAyMDUsXG4gICAgICAgIDkyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTg1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE1LFxuICAgICAgICA0NSxcbiAgICAgICAgNTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDg0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE1LFxuICAgICAgICAxNCxcbiAgICAgICAgNjYsXG4gICAgICAgIDExLFxuICAgICAgICA0NixcbiAgICAgICAgMjQ0LFxuICAgICAgICA3NixcbiAgICAgICAgMTMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNDAsXG4gICAgICAgIDI3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgODQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxLFxuICAgICAgICAxMixcbiAgICAgICAgMTkxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjI5LFxuICAgICAgICA1MCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNzUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNzksXG4gICAgICAgIDIxMCxcbiAgICAgICAgOTYsXG4gICAgICAgIDg1LFxuICAgICAgICA5OSxcbiAgICAgICAgNjQsXG4gICAgICAgIDU0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNixcbiAgICAgICAgMTI5LFxuICAgICAgICA1NSxcbiAgICAgICAgMTczLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE4NixcbiAgICAgICAgNDAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNixcbiAgICAgICAgOTQsXG4gICAgICAgIDQzLFxuICAgICAgICA1OSxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDI0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDYxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIxLFxuICAgICAgICA2OCxcbiAgICAgICAgNDUsXG4gICAgICAgIDQ1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE0MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNDcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiT1FjU0w4YVhTZ2JtUGFFUjkvRTJhQ2lDa2ZldGdKUHpsQlFRN2hpTzdJcz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ4MTU0NTI4OTQwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIzNURENzc5Mzk1MUVBMzdDNTNGRTVDNERFNDNGMkE3NFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjQ2ODk2MDFcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiQm5KX0RGOUlRNm1aUWFfb0VzbWNKQVwiLFxuICBcInBob25lSWRcIjogXCJlN2NkMGVkMi0yNGIwLTQ3NzYtYTRjYS01MzFlZTMwYmRjZDJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjMsXG4gICAgICAxOTAsXG4gICAgICAxNTcsXG4gICAgICAxNSxcbiAgICAgIDE5NyxcbiAgICAgIDE4NCxcbiAgICAgIDE2NyxcbiAgICAgIDEwOSxcbiAgICAgIDExMixcbiAgICAgIDI0NCxcbiAgICAgIDE5OSxcbiAgICAgIDIwMSxcbiAgICAgIDk0LFxuICAgICAgMjQ5LFxuICAgICAgMjI0LFxuICAgICAgMjMsXG4gICAgICA3NyxcbiAgICAgIDEzOCxcbiAgICAgIDU5LFxuICAgICAgMTk4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDY4LFxuICAgICAgNzcsXG4gICAgICAyNTEsXG4gICAgICA5MixcbiAgICAgIDcyLFxuICAgICAgMjM3LFxuICAgICAgNjMsXG4gICAgICAxNDcsXG4gICAgICA3OSxcbiAgICAgIDE0MCxcbiAgICAgIDE1OCxcbiAgICAgIDEyNCxcbiAgICAgIDIwMCxcbiAgICAgIDQ2LFxuICAgICAgMTM1LFxuICAgICAgNTEsXG4gICAgICA5NyxcbiAgICAgIDE3MixcbiAgICAgIDEyNyxcbiAgICAgIDU4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIk1EUERDQkdYXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTU0NTI4OTQwOjE2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNDEzMDQ4NjAyNDYyMTQ6MTZAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiRGFuIPCfkpVcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLNzcwdUVERUxqWnNyWUdHQU1nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIk16Q2s4emZjME85Z045MHpCQy9vd3FoNkZ3Q3dQaGFZSWpKekFkRFJvQzg9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiNjFUektFbUtpUFUwbitUdnZHMlZ0czNvOTQ4ZVphbjhQU2lkSXEyamRTU0svTnZGYmIyZXRaK3N1WWVJSWhGSmF1cll1SitCN1lNdWE0OXNybXF6Q0E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiMmt5cmVqUHdXcitFeGp2TERKVmM3VTUxeVFLRzdPTThzS3daa1JtLzI0VmZCUXN0NHB4TVBPRDJ4c09raFlzK01jdHB3NGwrMEFmUFNKN1RFanpmZ3c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODE1NDUyODk0MDoxNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA0N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI0Njg5NTk2LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQjhoXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFCOGguanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJsWFkvcG9xYTViWlNDZjdFWEIxYW1Tc0VOS01aeld4RFlLZEhiZGczeDB3PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEwMTAwODkzOTAsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyNDY4ODA1NjA5NFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.9",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "DAN-MD",
  ownername:process.env.OWNER_NAME|| "DAN",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
