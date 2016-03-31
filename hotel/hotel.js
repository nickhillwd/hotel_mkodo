var Room = require('./room.js');

var Hotel = function(hotelName){
  this.hotelName = hotelName;
  this.hotelRooms = [];
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

  }

}

module.exports = Hotel;