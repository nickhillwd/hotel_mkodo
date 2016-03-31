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
  }

}

module.exports = Alarm;