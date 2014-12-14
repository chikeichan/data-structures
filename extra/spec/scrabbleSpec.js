describe('Scrabble', function() {
  var scrabble;

  beforeEach(function() {

    scrabble = Scrabble();

  });




  it('should insert words', function(){
    scrabble.insert('cat');
    expect(scrabble.lookup(['c','a','t'])).to.equal();
  });

});
