var Alarm = function () {
    this.callQueue = []
};

Alarm.prototype.setAlarmTime = function (room, time) {
    if (room === "No such room") {
        return "No alarm call set, incorrect room number";
    } else {
        this.callQueue.push({
            "roomNumber": room.roomNumber,
            "alarmTime": new Date(time)
        });
    }
};

Alarm.prototype.changeAlarmTime = function (roomNumber, newTime) {
    this.callQueue.forEach(function (alarm, i) {
        if (roomNumber === alarm.roomNumber) {
            this.callQueue[i].alarmTime = newTime;
        }
    }.bind(this))
};


module.exports = Alarm;