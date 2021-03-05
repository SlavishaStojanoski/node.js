const events = require('events');
const eventEmitter = new events.EventEmitter();

const Calculate = function () {
    let a = 2
    let b = 2
    let c = a + b
  console.log('a + b is ' + parseInt(c));
}
eventEmitter.on('calculate', Calculate);
eventEmitter.emit('calculate');