const response = require('./response');
const parser = require('./parser');
const coinToss = require('./coin-toss');
const distance = require('./distance');
const noSupport = require('./no-support');

handleDNSMessage = (decoded) => {
    let finalResponse = response.defaultResponse(decoded);
    const parsed = parser.parse(decoded.questions[0].name);
    finalResponse.answers[0].data = constructResponse(parsed);
    return finalResponse;
}

constructResponse = (parsed) => {
    const { data, query } = parsed;

    switch (query) {
        case 'coin':
            return coinToss.coinResponse();
        case 'km-mi':
            return String(distance.kilometersToMiles(data));
        case 'mi-km':
            return String(distance.milesToKilometers(data));
        default:
            return noSupport.noSupportResponse();
    }
}

module.exports = {
    handleDNSMessage
};