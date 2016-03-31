var Hotel = require('../hotel/hotel.js');

var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;

describe('Hotel', function(){

  beforeEach(function(){
    mkodoHotel = new Hotel("Mkodo Hotel");
  });

  afterEach(function(){
    mkodoHotel.hotelRooms = [];
  })
  
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

});