
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

const username = fs.readFileSync('github_username.txt', 'utf8').trim()

module.exports = {
    SESSION_ID:  process.env.SESSION_ID,PRABATH-MD~aWpBHTqJ#ZG4-PK9JTA0DyQrEfW9YNwr8aUyhAItgGo3_prS6EkQ    
    BOT_NUMBER:  process.env.BOT_NUMBER,+94 70 468 3763
    GITHUB_USERNAME: username,theekshana
    GITHUB_AUTH_TOKEN: process.env.GITHUB_AUTH_TOKEN_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
};
