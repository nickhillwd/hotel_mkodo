var hotel = require('../hotel/hotel.js');

var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;

describe('Hotel', function(){
  
  it('should have an empty array of hotel rooms', function(){
    expect(hotel.hotelRooms).to.be.empty;
  });

});