var Hotel = require('./hotel.js');

var Room = function(roomNumber){
  this.roomNumber = roomNumber;
  this.alarmCurrentlySet = false;
}

module.exports = Room;