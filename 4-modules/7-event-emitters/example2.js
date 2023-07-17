const EventEmitter = require('events');

const myEmitter = new EventEmitter();

setImmediate(()=>{
    // fire event
    myEmitter.emit('TEST_EVENT');
})

//define event listener
myEmitter.on('TEST_EVENT',()=>{
	console.log('TEST_EVENT was fired.')
});

