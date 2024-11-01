const response = require('./response');
const { exec } = require('child_process');

const fortuneResponse = async (decoded) => {
    let finalResponse = response.defaultResponse(decoded);
    try {
        const fortune = await execPromise('fortune');
        const interResponse = response.answerTemplate(decoded, fortune.replace(/[\n\t]/g, ' ').trim());
        finalResponse.answers.push(interResponse);
        return finalResponse;
    } catch (error) {
        console.error('Error executing fortune:', error);
        const interResponse = response.answerTemplate(decoded, 'No cookie for you.');
        finalResponse.answers.push(interResponse);
        return finalResponse;
    }
};

const execPromise = (command) => {
    return new Promise((resolve, reject) => {
        exec(command, (error, stdout, stderr) => {
            if (error) {
                reject(`Error: ${error.message}`);
                return;
            }
            if (stderr) {
                reject(`Stderr: ${stderr}`);
                return;
            }
            resolve(stdout);
        });
    });
};


module.exports = {
    fortuneResponse
};