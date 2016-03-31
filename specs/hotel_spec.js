var Hotel = require('../hotel/hotel.js');

var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;

describe('Hotel', function(){

  beforeEach(function(){
    mkodoHotel = new Hotel("Mkodo Hotel");
  });
  
  it('should have an empty array of hotel rooms', function(){
    expect(mkodoHotel.hotelRooms).to.be.empty;
  });

  it('as per spec hotel should have 100 rooms', function(){
    mkodoHotel.populateHotel(100);
    expect(mkodoHotel.hotelRooms.length).to.eql(100);
  });

});