const response = require('./response');
const maxTries = 42;

coinTossResponse = (times, decoded) => {

    let finalResponse = response.defaultResponse(decoded)

    if (times > maxTries) {
        const interResponse = response.answerTemplate(decoded, `Only ${maxTries} coin tosses allowed.`);
        finalResponse.answers.push(interResponse);
    } else {
        for (let i = 0; i < times; i++) {
            const interResponse = response.answerTemplate(decoded, Math.random() < 0.5 ? 'heads' : 'tails');
            finalResponse.answers.push(interResponse);
        }
    }

    return finalResponse;
}

module.exports = {
    coinTossResponse
};