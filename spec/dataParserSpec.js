describe('getData', function(){


  it('should return timeStamp', function(){
    getData.timestamp(hash)
    expect(getData.timestamp(hash)).toEqual(jasmine.any(Date));
  });

});
