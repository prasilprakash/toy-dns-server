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
    } else {
        response.query = name;
    }

    return response;
}

module.exports = {
    parse
};