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
  }

}

module.exports = Hotel;