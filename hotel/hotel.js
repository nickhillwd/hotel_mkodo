var Room = require('./room.js');
var Alarm = require('./alarm.js');
var moment = require('moment');

var Hotel = function (hotelName) {
    this.hotelName = hotelName;
    this.hotelRooms = [];
    this.alarmSystem = new Alarm();
};

Hotel.prototype.populateHotel = function (roomQuantity) {
    var i = 0;
    while (i < roomQuantity) {
        var room = new Room(i + 1);
        this.hotelRooms.push(room);
        i++
    }
};

Hotel.prototype.findRoomByNumber = function (roomNumber) {
    if (roomNumber < 1 || roomNumber > (this.hotelRooms.length + 1)) {
        return "No such room";
    } else {
        for (var room of this.hotelRooms) {
            if (roomNumber === room.roomNumber) {
                return room;
            }
        }
    }
};

Hotel.prototype.requestWakeUpCall = function (roomNumber, time) {
    var currentRoom = this.findRoomByNumber(roomNumber);
    if (currentRoom.alarmCurrentlySet == true) {
        return "you already have an alarm set";
    } else {
        this.alarmSystem.setAlarmTime(currentRoom, time);
        currentRoom.alarmCurrentlySet = true;
    }
};

Hotel.prototype.changeWakeUpCall = function (roomNumber, time) {
    var currentRoom = this.findRoomByNumber(roomNumber);
    if (currentRoom.alarmCurrentlySet == false) {
        this.requestWakeUpCall(roomNumber, time);
    } else {
        this.alarmSystem.changeAlarmTime(roomNumber, time);
    }
};

Hotel.prototype.cancelWakeUpCall = function (roomNumber) {
    var currentRoom = this.findRoomByNumber(roomNumber);
    this.alarmSystem.callQueue.forEach(function (alarm, i) {
        if (roomNumber === alarm.roomNumber) {
            this.alarmSystem.callQueue.splice(i, 1);
            currentRoom.alarmCurrentlySet = false;
        }
    }.bind(this))
};

Hotel.prototype.sendWakeUpCall = function (roomNumber) {
    currentRoom = this.findRoomByNumber(roomNumber);
    currentRoom['alarmReceived'] = true;
    currentRoom['alarmCurrentlySet'] = false;
    console.log("Wake Up! Rise and Shine!");
};

Hotel.prototype.getCurrentTime = function () {
    return moment().format('h:mm:ss a');
};


module.exports = Hotel;