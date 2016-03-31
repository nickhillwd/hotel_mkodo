var Hotel = require('./hotel.js');

var Room = function(roomNumber){
  this.roomNumber = roomNumber;
  this.alarmCurrentlySet = false;
  this.alarmReceived = false;
}

module.exports = Room;