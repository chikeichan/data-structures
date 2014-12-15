describe('Scrabble', function() {
  var scrabble;

  beforeEach(function() {

    scrabble = Scrabble();

  });




  it('should insert words', function(){
    scrabble.insert('cat');
    scrabble.insert('dog');
    scrabble.insert('call');
    scrabble.insert('cag');
    scrabble.insert('all');
    expect(scrabble.lookup(['c','a','t'])).to.contain('cat');
    expect(scrabble.lookup(['c','a','l','t','d','l','t','o'])).to.contain('cat','call','all');
  });

  it('testing!', function(){
  	$('body').append('Scrabble Testing<input id="scrabble"></input><ol class="scrabble"></ol>')


  });




});
