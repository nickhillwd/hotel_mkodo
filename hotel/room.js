var hotel = require('./hotel.js');

var Room = function(roomNumber){
  this.roomNumber = roomNumber;
  this.alarmCurrentlySet = false;
  this.alarmTime = null;

  hotel.newRoom(this);
}

module.exports = Room;