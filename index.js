const Discord = require('discord.js')
const client = new Discord.Client()
const config = require('./config.json')

client.on('ready', () => {
    console.log('SafeSwap is now online!')
})

client.login(config.token)
