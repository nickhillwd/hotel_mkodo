var Hotel = require('../hotel/hotel.js');
var Alarm = require('../hotel/alarm.js');
var chai = require('chai');
var expect = chai.expect;

describe('Hotel', function(){

  beforeEach(function(){
    mkodoHotel = new Hotel("Mkodo Hotel");
  });

  afterEach(function(){
    mkodoHotel.hotelRooms = [];
    mkodoHotel.alarmSystem.callQueue = [];
  });
  
  it('should have an empty array of hotel rooms', function(){
    expect(mkodoHotel.hotelRooms).to.be.empty;
  });

  it('as per spec hotel should have 100 rooms', function(){
    mkodoHotel.populateHotel(100);
    expect(mkodoHotel.hotelRooms.length).to.eql(100);
  });

  it('should be able to find a room\'s details given a room number', function(){
    mkodoHotel.populateHotel(100);
    var testSearch = mkodoHotel.findRoomByNumber(20);
    expect(testSearch).to.be.an('object');
    expect(testSearch).to.have.property('roomNumber', 20);
  });

  it('should not return a room if an incorrect room number if offered', function(){
    mkodoHotel.populateHotel(100);
    var testSearch1 = mkodoHotel.findRoomByNumber(3000);
    var testSearch2 = mkodoHotel.findRoomByNumber(-4);
    expect(testSearch1).to.equal("No such room");
    expect(testSearch2).to.equal("No such room");
  });

  it('should be able to add an alarm call for a guest', function(){
    mkodoHotel.populateHotel(100);
    mkodoHotel.requestWakeUpCall(20, '2016-04-01T07:00:00');
    expect(mkodoHotel.alarmSystem.callQueue.length).to.equal(1);
  });

  it('should be able to change the time of an existing alarm', function(){
    mkodoHotel.populateHotel(100);
    mkodoHotel.requestWakeUpCall(50, '2016-04-01T08:00:00');
    //AH! Alarm too late!
    mkodoHotel.changeWakeUpCall(50, '2016-04-01T07:30:00');
    expect(mkodoHotel.alarmSystem.callQueue.length).to.equal(1);
    expect(mkodoHotel.alarmSystem.callQueue[0].alarmTime).to.equal('2016-04-01T07:30:00');
  });

  it('should be possible to cancel an alarm call', function(){
    mkodoHotel.populateHotel(100);
    mkodoHotel.requestWakeUpCall(10, '2016-04-01T08:00:00');
    mkodoHotel.requestWakeUpCall(30, '2016-04-01T08:00:00');
    mkodoHotel.requestWakeUpCall(50, '2016-04-01T08:00:00');
    mkodoHotel.cancelWakeUpCall(30);
    expect(mkodoHotel.alarmSystem.callQueue.length).to.equal(2);
    expect(mkodoHotel.alarmSystem.callQueue[1]).to.have.property('roomNumber', 50);
  });

  it('should be able to send an alarm call to a specific room', function(){
    mkodoHotel.populateHotel(100);
    mkodoHotel.requestWakeUpCall(10, '2016-04-01T08:00:00');
    mkodoHotel.sendWakeUpCall(10);
    expect(mkodoHotel.hotelRooms[9]).to.have.property('alarmReceived', true);
    expect(mkodoHotel.hotelRooms[9]).to.have.property('alarmCurrentlySet', false);
  });

  it('should be able to return the current time', function(){
    mkodoHotel.populateHotel(100);
    expect(mkodoHotel.getCurrentTime()).to.be.a('string');
  });

});

describe('Alarm', function(){

  beforeEach(function(){
    mokodoHotelsAlarm = new Alarm();
    mkodoHotel = new Hotel("Mkodo Hotel");
    mkodoHotel.populateHotel(100);
  });

  it('should be able to set up a new alarm and add the the call queue', function(){
    testRoom = mkodoHotel.findRoomByNumber(20);
    mokodoHotelsAlarm.setAlarmTime(testRoom, '2016-04-01T07:00:00');
    expect(mokodoHotelsAlarm.callQueue.length).to.equal(1);
    expect(mokodoHotelsAlarm.callQueue[0]).to.have.property('roomNumber', 20);
    expect(mokodoHotelsAlarm.callQueue[0]).to.have.property('alarmTime');
  });

});