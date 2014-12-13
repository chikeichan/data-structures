describe('T9', function() {
  var t9;

  beforeEach(function() {

    t9 = T9();

  });




  it('should insert words to prefix tree', function(){
    t9.insert('cat');
    t9.contains('cat');
    expect( t9.contains('cat')).to.equal(true);
  });



});
