const response = require('./response');

kilometersToMiles = (kilometers, decoded) => {
    let finalResponse = response.defaultResponse(decoded);
    const interResponse = response.answerTemplate(decoded, String(kilometers * 0.621371));
    finalResponse.answers.push(interResponse);
    return finalResponse;
}

milesToKilometers = (miles, decoded) => {
    let finalResponse = response.defaultResponse(decoded);
    const interResponse = response.answerTemplate(decoded, String(miles * 1.60934));
    finalResponse.answers.push(interResponse);
    return finalResponse;
}

module.exports = {
    kilometersToMiles,
    milesToKilometers
};