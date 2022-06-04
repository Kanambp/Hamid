// ⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈
//▮KANAMBO THE BOT 2022 ®️ALL RIGHTS RESERVED
//▮
//▮
//▮KANAMBO THE BOT SOFTWARE IS UNDER UZ COPYRIGHT
//▮
//▮REPORT ABUSE OF KANAMBO THE BOT SOFTWARE EMAIL US
//▮oyugipeterodongo@gmail.com
//▮WHATSAPP US : +254114148625
//▮
//▮
//╰______________________________________________

//
//┏━━━━━━━━━━━━━━━━━━━━━━━━━
//┃KANAMBO THE BOT SOFTWARE INCLUDES 
//┃SOME ENCRYPTED FILES
//┃
//┃THANKS FOR CHOOSING KANAMBO-BOT
//┃THANKS TO KANAMBO
//┗━━━━━━━━━━━━━━━━━━━━━━━━━
//

const fs = require('fs')
const chalk = require('chalk')

//global apis
global.APIs = {
	zenz: 'https://zenzapi.xyz', 
}
//global apikeys
global.APIKeys = {
	'https://zenzapi.xyz': '805a6c3fa9', //api keys from zenzi
}

//settings
global.owner = ['254114148625',''] //owner number +254114148625
global.pemilik = ['254114148625'] //owner number +254114148625
global.premium = ['254114148625'] //premium number +254114148625
global.pengguna = 'KANAMBO' //username
global.footer = 'KANAMBO THE BOT'
global.botnma = 'KANAMBO THE BOT' //bot name
global.ownernma = 'KANAMBO' //owner name
global.packname = 'Drips' //sticker package name
global.author = 'By Drips Memes' //sticker author name
global.sessionName = 'session' //session name
global.prefa = ['#','!','/',''] //prefix
global.sp = '🔵' //sp
global.mess = {
    success: 'Takaenda Done!',
    admin: '*This feature is only for admin!*',
    botAdmin: '*zim bot  must be admin first!*',
    owner: '*this feature is only for zimbot owner*',
    group: '*Feature is only for groups!*',
    private: 'Features Used Only For Private Chat!',
    bot: 'This feature in only for the bot number',
    wait: '*whoa wait a moment zim bot proccessing*',
    endLimit: '*Your daily limit has expired the limit will be reseted every 12 hours*',
}
global.limitawal = {
    premium: "Infinity", //premium user limit
    free: 100000 //free user limit
}
global.rpg = {
darahawal: 100,
besiawal: 15,
goldawal: 10,
emeraldawal: 5,
umpanawal: 5,
potionawal: 1
}
global.thumb = fs.readFileSync('./Kanambo/drips.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
