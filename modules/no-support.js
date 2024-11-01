const response = require('./response');

noSupportResponse = (decoded) => {
    let finalResponse = response.defaultResponse(decoded);
    const interResponse = response.answerTemplate(decoded, 'Operation not supported');
    finalResponse.answers.push(interResponse);
    return finalResponse;
}

module.exports = {
    noSupportResponse
};