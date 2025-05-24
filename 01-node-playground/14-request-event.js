const http = require('http');

// const server = http.createServer((req, res) => {
//     console.log('request event');
//     res.end('Hello World');
// }

// Using event emitter API
const server = http.createServer();
// emits request event
// subcribe to it / listen for it / respond to it
server.on('request', (req, res) => {
    res.end('Welcome');
});
server.listen(4000);