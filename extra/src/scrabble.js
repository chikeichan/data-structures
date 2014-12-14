var Scrabble = function(words,end){
  var _insertNext = function(letters,tree,vocab){
    var letters = letters.slice();
    var letter = letters.shift();

    if(!tree.children[letter]){
      tree.children[letter] = Scrabble();
    }
    if (letters.length === 0){
      tree.children[letter].children['^'] = Scrabble(vocab,'^')
    } else {
      _insertNext(letters,tree.children[letter],vocab);
    }
  }

  var _lookupNext = function(letters,tree,vocab){

  }


  var scrabble = {}

  scrabble.children = {};
  scrabble.value = end || null;
  scrabble.words = [];

  if(!!words){
    scrabble.words.push(words);
  }

  scrabble.insert = function(vocab){
    var letters = vocab.split('');

    _insertNext(letters,this,vocab);

    console.log(this);
  }

  scrabble.lookup = function(letters){

  }

  return scrabble;
}
