const config = require('config');
const cron = require('node-cron');
const Discord = require('discord.js');
const phrases = require('phrases');
const {_, getRandomPhrase} = require('message');

const start = () => {
    const client = new Discord.Client();

    client.on('ready', () => {
        console.log(`Logged in as ${client.user.tag}!`);

        // Get online member in selected channel in .env
        client.channels.fetch(config.get('DISCORD_CHANNEL_ID'))
        .then((channel) => {
            channel.members
            .map(member => {
                console.log(member.displayName, {
                    status: member.presence.status,
                    activities: member.presence.activities,
                    clientStatus: member.presence.clientStatus
                })
            })
        })
    });

    // client.on('message', msg => {
    //     if (msg.channel.id === config.get('DISCORD_CHANNEL_ID')) {
    //         console.log(msg.author.username + ': ' + msg.content, 'in channel: ' + msg.channel.name + ' | ' + msg.channel.id);
            
    //         setTimeout(() => {
    //             msg.delete();
    //         }, 2 * 1000);
    //     }
    // });

    // Send message to selected channel
    // cron.schedule('* * * * *', () => {
    //     client.channels.fetch(config.get('DISCORD_CHANNEL_ID'))
    //         .then((channel) => {
    //             console.log(channel.send(phrases[0].phrase))
    //         })
    // });

    // Get random phrase and change params from phrase
    // console.log('phrase:', getRandomPhrase())
    // console.log(_(getRandomPhrase().phrase, {username: 'Zoukilama'}))

    client.login(config.get('DISCORD_TOKEN'));
}

module.exports = {
    start
}