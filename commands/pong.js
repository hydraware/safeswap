const { Client, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'pong',
    description: 'this is a pong command!',
    execute(message, args){
        const embed = new MessageEmbed()
            .setTitle('Pong!')
            .setColor(0x3395FC)
            .setImage('https://i.imgur.com/8yvdujb.png');
        message.channel.send(embed);
    }
}