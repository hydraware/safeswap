const { Client, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'ping',
    description: 'this is a ping command!',
    execute(message, args){
        const embed = new MessageEmbed()
            .setTitle('Ping!')
            .setColor(0x3395FC)
            .setImage('https://i.imgur.com/8yvdujb.png');
        message.channel.send(embed);
    }
}