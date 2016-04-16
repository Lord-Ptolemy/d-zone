var convict = require('convict');
var path = require('path');

// Define a schema
var config = module.exports = convict({
    address: {
        doc: "The address of your websocket server.",
        format: "ipaddress",
        default: "192.168.0.1"
    },
    port: {
        doc: "The port for your websocket server address.",
        format: "port",
        default: "3000"
    }
});

// Load configuration
config.loadFile(path.resolve(__dirname,'socket-config.json'));

// Perform validation
config.validate({strict: true});