// Dependencies
const EventEmitter = require('events');

// Event register and listening
class Events extends EventEmitter {
    constructor(event, msg) {
        super();
        this.event = event;
        this.msg = msg;
    }
    listen(event) {
        this.on(event, arg => {
            console.log('Listening to your event...');
            console.log(arg);
        })
    }
    log(event, msg) {
        this.emit(event, msg);
    }
}

module.exports = Events;