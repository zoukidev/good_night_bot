require('dotenv').config();

const get = (key) => process.env[key];

module.exports = {
    get
}