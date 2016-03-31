var Hotel = require('./hotel.js');

var Room = function(roomNumber){
  this.roomNumber = roomNumber;
  this.alarmCurrentlySet = false;
  this.alarmTime = null;
}

module.exports = Room;