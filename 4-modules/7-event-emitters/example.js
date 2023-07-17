const EventEmitter = require('events');

// Streams are Event Emitters
// process.stdin, process.stdout
const myEmitter = new EventEmitter();

myEmitter.on('TEST_EVENT',()=>{
    console.log('TEST_EVENT was fired.')
});

myEmitter.emit('TEST_EVENT');


