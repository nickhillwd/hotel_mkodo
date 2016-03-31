var Hotel = require('./hotel.js');
var moment = require('moment');

var Alarm = function(){
  this.callQueue = []
}

Alarm.prototype = {

  setAlarmTime: function(room, time){
    if(room === "No such room"){
      return "No alarm call set, incorrect room number";
    }else{
      this.callQueue.push(
        {
        "roomNumber": room.roomNumber, 
        "alarmTime": new Date(time)
        }
      );
    }
  },

  changeAlarmTime: function(roomNumber, newTime){
    this.callQueue.forEach(function(alarm, i){
      if(roomNumber === alarm.roomNumber){
        this.callQueue[i].alarmTime = newTime;
      }
    }.bind(this))
  }

}

module.exports = Alarm;