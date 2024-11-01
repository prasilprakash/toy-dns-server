parse = (name) => {

    let response = {};

    if (name.includes('km-mi')) {
        const splitName = name.split('km-mi');
        response.data = splitName[0];
        response.query = 'km-mi';
    } else if (name.includes('mi-km')) {
        const splitName = name.split('mi-km');
        response.data = splitName[0];
        response.query = 'mi-km';
    } else if (name.includes('coin')) {
        const splitName = name.split('.');
        response.data = splitName.length > 1 ? splitName[0] : 1;
        response.query = splitName.length > 1 ? splitName[1] : splitName[0];
    } else if (name.includes('fortune')) {
        response.query = 'fortune';
    }

    return response;
}

module.exports = {
    parse
};