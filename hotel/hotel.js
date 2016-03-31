var Room = require('./room.js');
var Alarm = require('./alarm.js');

var Hotel = function(hotelName){
  this.hotelName = hotelName;
  this.hotelRooms = [];
  this.alarmSystem = new Alarm();
}

Hotel.prototype = {

  populateHotel: function(roomQuantity){
    var i = 0;
    while(i < roomQuantity){
      var room = new Room(i+1);
      this.hotelRooms.push(room);
      i++
    }
  },

  findRoomByNumber: function(roomNumber){
    if(roomNumber < 1 || roomNumber > (this.hotelRooms.length+1)){
      return "No such room";
    }else{
      for(room of this.hotelRooms){
        if(roomNumber === room.roomNumber){
          return room
        }
      }
    }
  },

  requestWakeUpCall: function(roomNumber, time){
    currentRoom = this.findRoomByNumber(roomNumber);
    currentRoom.alarmCurrentlySet = true;
    this.alarmSystem.setAlarmTime(currentRoom, time);
  },

  changeWakeUpCall: function(roomNumber, time){
    currentRoom = this.findRoomByNumber(roomNumber);
    if(currentRoom.alarmCurrentlySet === false){
      this.requestWakeUpCall(roomNumber, time);
    }else{
      this.alarmSystem.changeAlarmTime(roomNumber, time);
    }
  }

}

module.exports = Hotel;