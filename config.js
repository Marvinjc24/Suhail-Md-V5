const fs = require('fs-extra')
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
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text"  // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_30_08_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTI1LFxuICAgICAgICA5NixcbiAgICAgICAgOTUsXG4gICAgICAgIDYyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDUwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDM2LFxuICAgICAgICA5MCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMzcsXG4gICAgICAgIDUyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjIsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNjgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxODksXG4gICAgICAgIDEzNixcbiAgICAgICAgMjM0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDIwLFxuICAgICAgICAyOSxcbiAgICAgICAgNzEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTM2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDg0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDU1LFxuICAgICAgICAxODgsXG4gICAgICAgIDExNixcbiAgICAgICAgMjIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMzMsXG4gICAgICAgIDQ4LFxuICAgICAgICA2MCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxODIsXG4gICAgICAgIDU4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDgwLFxuICAgICAgICA1OCxcbiAgICAgICAgOTIsXG4gICAgICAgIDU3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNzdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE0MixcbiAgICAgICAgNTMsXG4gICAgICAgIDcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjE3LFxuICAgICAgICA1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDcsXG4gICAgICAgIDk0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDQxLFxuICAgICAgICAxLFxuICAgICAgICA2MixcbiAgICAgICAgNjUsXG4gICAgICAgIDcwLFxuICAgICAgICAzMCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNzIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTIxLFxuICAgICAgICA4NCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNTksXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTEwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDczLFxuICAgICAgICAxMTEsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTczLFxuICAgICAgICAyMzksXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDg3LFxuICAgICAgICAxNjksXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMDksXG4gICAgICAgIDc5LFxuICAgICAgICAxODgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDExNixcbiAgICAgICAgMTE2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDg1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTUsXG4gICAgICAgIDUzLFxuICAgICAgICA3NyxcbiAgICAgICAgMjIxLFxuICAgICAgICA2MCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDU5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgNDQsXG4gICAgICAgIDE5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTE2LFxuICAgICAgICA1NCxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDkyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDg3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEwMixcbiAgICAgICAgODEsXG4gICAgICAgIDQ4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDU1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNCxcbiAgICAgICAgOSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjM2LFxuICAgICAgICAxODIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjQ5LFxuICAgICAgICA3NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODUsXG4gICAgICAgIDQwLFxuICAgICAgICAyNDksXG4gICAgICAgIDQ4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDUzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTA5LFxuICAgICAgICAzLFxuICAgICAgICAxOSxcbiAgICAgICAgNTgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTY5LFxuICAgICAgICA4NyxcbiAgICAgICAgMTI0LFxuICAgICAgICAzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDUsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTQzLFxuICAgICAgICAxODAsXG4gICAgICAgIDk4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDExOFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA4MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjM1LFxuICAgICAgICA5NyxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTExLFxuICAgICAgICAxODUsXG4gICAgICAgIDIyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDY5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMSxcbiAgICAgICAgMzIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjksXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgODQsXG4gICAgICAgIDEyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDQ4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNTEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNDcsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTQyLFxuICAgICAgICA5MCxcbiAgICAgICAgODIsXG4gICAgICAgIDQ1LFxuICAgICAgICAzNCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxOTksXG4gICAgICAgIDkyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDQsXG4gICAgICAgIDksXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTUxLFxuICAgICAgICA3OSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIxLFxuICAgICAgICAzNSxcbiAgICAgICAgMjQ2LFxuICAgICAgICA5LFxuICAgICAgICAxMzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEyNCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJic1BnNmxCcmpGWkVIUjl0U1pJaE8yTDJmbENCa2RzSXZkRUwwaVZRZGhrPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJTeUJXVlhGaFR4Q2RWaURRUzBSdnpRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjA0ODU2NDM3LWMzOWYtNDc5ZS04MTc5LTc0MmJhYzRhN2E3MlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjksXG4gICAgICAxOTEsXG4gICAgICAxODgsXG4gICAgICAyMjUsXG4gICAgICAxMzMsXG4gICAgICAyMzAsXG4gICAgICAxMzgsXG4gICAgICA5MCxcbiAgICAgIDU1LFxuICAgICAgOTUsXG4gICAgICAyNTAsXG4gICAgICAyMDksXG4gICAgICA5NSxcbiAgICAgIDE3OSxcbiAgICAgIDE1NixcbiAgICAgIDM0LFxuICAgICAgODIsXG4gICAgICAyMTEsXG4gICAgICAyMTEsXG4gICAgICAxOTRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTYxLFxuICAgICAgMTQ4LFxuICAgICAgMTc0LFxuICAgICAgMTUxLFxuICAgICAgMTc3LFxuICAgICAgNixcbiAgICAgIDIwNCxcbiAgICAgIDE5NyxcbiAgICAgIDE5NSxcbiAgICAgIDI0LFxuICAgICAgMTI2LFxuICAgICAgMjEsXG4gICAgICAxNzQsXG4gICAgICAyMjUsXG4gICAgICA0NSxcbiAgICAgIDE2OSxcbiAgICAgIDEwOCxcbiAgICAgIDU2LFxuICAgICAgMTU5LFxuICAgICAgMjE1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkVCMUxFSzVZXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDQyNTk5OTU3OjEyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiRGFuXCIsXG4gICAgXCJsaWRcIjogXCI0NTA1MDQ0ODg0MjkyMjoxMkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKYnRydWNERU5tRnFiWUdHQU1nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInAxNzN0MGFGQ3FiRENhVFoyMGU4SlRoWVdtYzlSQ2ZRbTF2elVjUnA4eVU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiTC82Y0pXZVNYN0YrUlVXcjZ1bC9QWmk2bnRYOGJJcm1zeVExYTB1V3VJa2p6UHEydlBvOFFLT3l6STVTNEdXMXpSWmJtMXpGVlYycXEvYkIwT09tRFE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiQnVHTGUveS8rM201MFNGUlNPT1hJODg2S3RvMThIZFlhd1BTS1VrY0RrYmZvK0Q2MFFiTS9FVzNjeUh0QnU2d3d1a1o2bXZNK2t3dlJkWjhRVXkwaUE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzA0MjU5OTk1NzoxMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAzN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI0NTMxNDIyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBR3lJXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFHeUkuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJld3NrbWRLV2FOMGlkVjZyVWFjYUUzWllmbUZweUNWcTk4dUZFclg1ZnlFPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEwMjIwODA2NjEsXCJjdXJyZW50SW5kZXhcIjozLFwiZGV2aWNlSW5kZXhlc1wiOlswLDEsM119LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.9",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


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
