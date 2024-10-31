const dgram = require('dgram');
const dnsPacket = require('dns-packet');
const server = dgram.createSocket('udp4');
const handler = require('./modules/handler');

server.bind(5354, '127.0.0.1', () => {
    console.log('DNS server listening on 127.0.0.1:5354');
});

server.on('message', (msg, rinfo) => {
    console.log(`Received message from ${rinfo.address}:${rinfo.port}`);

    // Decode the DNS message
    const decoded = dnsPacket.decode(msg);

    console.log('Decoded message:', decoded);

    // Create a response based on the received message
    const response = handler.handleDNSMessage(decoded);

    // Send the response back to the client
    const buffer = dnsPacket.encode(response);

    server.send(buffer, rinfo.port, rinfo.address, (err) => {
        if (err) {
            console.error(`Error sending response: ${err}`);
        } else {
            console.log('Response sent');
        }
    });
});

server.on('error', (err) => {
    console.error(`Server error:\n${err.stack}`);
    server.close();
});


