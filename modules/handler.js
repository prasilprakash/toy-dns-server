const parser = require('./parser');
const coinToss = require('./coin-toss');
const distance = require('./distance');
const fortune = require('./fortune');
const noSupport = require('./no-support');

handleDNSMessage = (decoded) => {
    return constructResponse(decoded);
}

constructResponse = (decoded) => {
    const parsed = parser.parse(decoded.questions[0].name);
    const { data, query } = parsed;

    switch (query) {
        case 'coin':
            return coinToss.coinTossResponse(data, decoded);
        case 'km-mi':
            return distance.kilometersToMiles(data, decoded);
        case 'mi-km':
            return distance.milesToKilometers(data, decoded);
        case 'fortune':
            return fortune.fortuneResponse(decoded);
        default:
            return noSupport.noSupportResponse(decoded);
    }
}

module.exports = {
    handleDNSMessage
};