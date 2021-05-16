const config = require('config');
const cron = require('node-cron');
const Discord = require('discord.js');
const phrases = require('phrases');

const start = () => {
    const client = new Discord.Client();

    client.on('ready', () => {
        console.log(`Logged in as ${client.user.tag}!`);
    });

    // client.on('message', msg => {
    //     if (msg.channel.id === config.get('DISCORD_CHANNEL_ID')) {
    //         console.log(msg.author.username + ': ' + msg.content, 'in channel: ' + msg.channel.name + ' | ' + msg.channel.id);
            
    //         setTimeout(() => {
    //             msg.delete();
    //         }, 2 * 1000);
    //     }
    // });

    cron.schedule('* * * * *', () => {
        client.channels.fetch(config.get('DISCORD_CHANNEL_ID'))
            .then((channel) => {
                console.log(channel.send(phrases[0].phrase))
            })
    });

    client.login(config.get('DISCORD_TOKEN'));
}

module.exports = {
    start
}