const phrases = require('phrases');

const _ = (phrase, placeholders) => {
    return phrase.replace(/:(\w+):/g, function(__, item) {
        return placeholders[item] || item;
    });
}

const getRandomPhrase = () => {
    return phrases[getRandomInt(0, phrases.length)];
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    
    return Math.floor(Math.random() * (max - min)) + min;
}

module.exports =  {
    _,
    getRandomPhrase,
}