/**
 * Module dependencies.
 */

var app = require('./server/server.js');
var debug = require('debug')('mean-app:server');
var http = require('http');

/**
 * Import the mongoose module
 */
var mongoose = require('mongoose');
mongoose.set('debug', true);

/**
 * Set up default mongoose connection
 */
var mongoDB = 'mongodb+srv://root:O7DgnKqSqCFmvC6n@tests-0eeni.mongodb.net/test';
mongoose.connect(mongoDB, {useNewUrlParser: true});
mongoose.Promise = global.Promise;

/**
 * Get the default connection
 */
var db = mongoose.connection;

/**
 * Bind connection to error event (to get notification of connection errors)
 */



db.on('error', console.error.bind(console, 'MongoDB connection error:'));


/**
 * Get port from environment and store in Express.
 */

var port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

/**
 * Create HTTP server.
 */

var server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
        // named pipe
        return val;
    }

    if (port >= 0) {
        // port number
        return port;
    }

    return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    var bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Port ' + port;

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
    var addr = server.address();
    var bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    debug('Listening on ' + bind);
}
