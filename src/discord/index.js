const config = require('config');
const cron = require('node-cron');
const Discord = require('discord.js');
const {_, getRandomPhrase} = require('message');

const start = () => {
    const client = new Discord.Client();

    client.on('ready', () => {
        if (config.get('DEBUG')) {
            console.log(`Logged in as ${client.user.tag}!`);
        }
    });

    client.on('message', msg => {
        if (msg.channel.id === config.get('DISCORD_CHANNEL_ID')) {
            if ((msg.content).substr(0, 2) == 'bn' || (msg.content).substr(0, 10) == 'bonne nuit') {
                msg.reply(_(getRandomPhrase().phrase))
                    .then(() => console.log(`Sent a reply to ${msg.author.username}`))
                    .catch(console.error);
            }

            setTimeout(() => {
                msg.delete();
            }, 2 * 1000);

            if (config.get('DEBUG')) {
                console.log(msg.author.username + ': ' + msg.content, 'in channel: ' + msg.channel.name + ' | ' + msg.channel.id);
            }
        }
    });

    client.login(config.get('DISCORD_TOKEN'));
}

module.exports = {
    start
}