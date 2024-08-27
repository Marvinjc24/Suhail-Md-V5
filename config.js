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


global.devs = "2347042599957" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347042599957";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "true";  // Make it "false" for disable WELCOME 

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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_03_57_08_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMzAsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjUxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNjEsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDQ0LFxuICAgICAgICA4MCxcbiAgICAgICAgMzgsXG4gICAgICAgIDgyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMzgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxODksXG4gICAgICAgIDIyMCxcbiAgICAgICAgMzcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgODVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTYxLFxuICAgICAgICAyNixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTA1LFxuICAgICAgICA5MyxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTc4LFxuICAgICAgICA5MSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDU1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNDUsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTM4LFxuICAgICAgICA3MSxcbiAgICAgICAgODEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTQ5LFxuICAgICAgICA0OCxcbiAgICAgICAgNDcsXG4gICAgICAgIDI2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTQxLFxuICAgICAgICA5MixcbiAgICAgICAgNjEsXG4gICAgICAgIDc4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTg0LFxuICAgICAgICA5MSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxODksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTc4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNDUsXG4gICAgICAgIDk3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjQ1LFxuICAgICAgICA4OCxcbiAgICAgICAgNTksXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTQ5LFxuICAgICAgICA1NyxcbiAgICAgICAgOTQsXG4gICAgICAgIDE4LFxuICAgICAgICA3OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTQsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTEzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTQsXG4gICAgICAgIDEyNixcbiAgICAgICAgMyxcbiAgICAgICAgMjQsXG4gICAgICAgIDY1LFxuICAgICAgICA5NCxcbiAgICAgICAgNjMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTA5LFxuICAgICAgICA2MCxcbiAgICAgICAgMyxcbiAgICAgICAgMTM2LFxuICAgICAgICAzMyxcbiAgICAgICAgMixcbiAgICAgICAgNDIsXG4gICAgICAgIDY5LFxuICAgICAgICAxODgsXG4gICAgICAgIDExLFxuICAgICAgICA2MSxcbiAgICAgICAgNjksXG4gICAgICAgIDkwLFxuICAgICAgICAxNDksXG4gICAgICAgIDcyLFxuICAgICAgICA4OSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTEzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgODMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTk3LFxuICAgICAgICA1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTMyLFxuICAgICAgICAxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDIyNixcbiAgICAgICAgMzYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTA0LFxuICAgICAgICAxODksXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDk2LFxuICAgICAgICA3NixcbiAgICAgICAgNzMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjM2LFxuICAgICAgICA4OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2MyxcbiAgICAgICAgMTExLFxuICAgICAgICAyMTYsXG4gICAgICAgIDYzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDM2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE0LFxuICAgICAgICAxODEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNSxcbiAgICAgICAgOTksXG4gICAgICAgIDEwMCxcbiAgICAgICAgNzksXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgOTUsXG4gICAgICAgIDAsXG4gICAgICAgIDMzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDI1LFxuICAgICAgICAzMixcbiAgICAgICAgMCxcbiAgICAgICAgMjQzLFxuICAgICAgICA2MSxcbiAgICAgICAgMzIsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTE5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDUwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDEyNlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA1NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MixcbiAgICAgICAgMSxcbiAgICAgICAgMTIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNDksXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjI4LFxuICAgICAgICA5NixcbiAgICAgICAgMjQzLFxuICAgICAgICAxOTksXG4gICAgICAgIDIyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNixcbiAgICAgICAgMzMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNDksXG4gICAgICAgIDY4LFxuICAgICAgICA5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTQyLFxuICAgICAgICA0NSxcbiAgICAgICAgNDUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDc3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNjAsXG4gICAgICAgIDU4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDExLFxuICAgICAgICAxMzIsXG4gICAgICAgIDcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjEzLFxuICAgICAgICA3OSxcbiAgICAgICAgMTEyLFxuICAgICAgICA3NCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDk3LFxuICAgICAgICA0NixcbiAgICAgICAgMTg0LFxuICAgICAgICAyMzksXG4gICAgICAgIDE5LFxuICAgICAgICA5MixcbiAgICAgICAgNDYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgOSxcbiAgICAgICAgMTczLFxuICAgICAgICAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMzYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiQVY1VyszOGVnbnBjd2l4ZERuaXN0Vis4VitWUVFnN2o0cmxvcXljeEd2VT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ3MDQyNTk5OTU3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI2NzQwQTRERDEwQzBEODJGNUQyNUVDNkFEMTgxRkI3MFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjQ3MzEwNTNcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiX0I5X0RNbWxSX3Fhd0toMDU2TUpCUVwiLFxuICBcInBob25lSWRcIjogXCI1OTUyZTk4MS1mNWEzLTQ5OTgtYTIwYy1hZGYxNmU3YWUzYjJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjEsXG4gICAgICAxNTMsXG4gICAgICAxMDgsXG4gICAgICAxNjQsXG4gICAgICAyMTIsXG4gICAgICAxMDEsXG4gICAgICAyMTIsXG4gICAgICAxMjksXG4gICAgICAxNzksXG4gICAgICAxMzMsXG4gICAgICA1NSxcbiAgICAgIDEzOCxcbiAgICAgIDEyNSxcbiAgICAgIDE5NixcbiAgICAgIDE5NixcbiAgICAgIDI1LFxuICAgICAgMjI5LFxuICAgICAgNjksXG4gICAgICAzOCxcbiAgICAgIDI0MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTYsXG4gICAgICA3MyxcbiAgICAgIDMzLFxuICAgICAgMTA2LFxuICAgICAgMTM2LFxuICAgICAgNTEsXG4gICAgICAxMTgsXG4gICAgICAyMzYsXG4gICAgICA1MixcbiAgICAgIDQxLFxuICAgICAgMTIzLFxuICAgICAgNDEsXG4gICAgICAxNjgsXG4gICAgICAxMTksXG4gICAgICAxMDcsXG4gICAgICA2NSxcbiAgICAgIDE4NixcbiAgICAgIDIyMCxcbiAgICAgIDQ3LFxuICAgICAgMTUzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIktZM0NQTEhBXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDQyNTk5OTU3OjE1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiRGFuXCIsXG4gICAgXCJsaWRcIjogXCI0NTA1MDQ0ODg0MjkyMjoxNUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKanRydWNERUtXZHRiWUdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInAxNzN0MGFGQ3FiRENhVFoyMGU4SlRoWVdtYzlSQ2ZRbTF2elVjUnA4eVU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiQ0FhdU1IQ2RKR29laFg5a0lIUlRaNTAwSE1qc3Arai9Lc0FQZ2lpdlZGeFNNMXFtTmRZM29Pb0dOSndRZ3RnL0hRV1FyQ1dRNG1OM0llTWVUVGtVQVE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwidWJYYTMvaEp4aU80TU8yRW1zNVhaTGdaQ051UFVDM1NLMGF4TzNDakJ2eGRtdUphZWZvaXh6UXg0NVpWVkxuM2ZSUDhXbkVoOEpBS09BN1YxMnQvQmc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzA0MjU5OTk1NzoxNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAzN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI0NzMxMDQ5LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBR3lJXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFHeUkuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJld3NrbWRLV2FOMGlkVjZyVWFjYUUzWllmbUZweUNWcTk4dUZFclg1ZnlFPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEwMjIwODA2NjEsXCJjdXJyZW50SW5kZXhcIjozLFwiZGV2aWNlSW5kZXhlc1wiOlswLDEsM119LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9=="  // PUT your SESSION_ID 


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
