defaultResponse = (decoded) => {
    return {
        type: 'response',
        id: decoded.id,
        flags: 0x8180,
        questions: decoded.questions,
        answers: [
            {
                name: decoded.questions[0].name,
                type: 'TXT',
                class: 'IN',
                ttl: 1,
                data: ''
            }
        ]
    };
}

module.exports = {
    defaultResponse
};