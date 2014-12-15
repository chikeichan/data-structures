var Scrabble = function(vocabWord,end){
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
  



  var scrabble = {}

  scrabble.children = {};
  scrabble.value = end || null;
  scrabble.word = vocabWord;

  scrabble.insert = function(vocab){
    var letters = vocab.split('');

    _insertNext(letters,this,vocab);

  }

  scrabble.lookup = function(letters){
    var words = [];

    //console.log(letters);
    var _lookupNext = function(trees,letters){
      //console.log(tree,letters);
      //iterate over letters
      for(var key in trees.children){
        var newletters = letters.slice();
        var again = false;
        if(key==='^'){
          words.push(trees.children['^'].word);
        }
        _.each(letters,function(letter,i){
          if(letter === key){
            newletters = letters.slice();
            newletters.splice(i,1);
            again = true;
            return;
          }
        })
        if(again){  
          _lookupNext(trees.children[key],newletters);
        }
      }
    }

    _lookupNext(this,letters);

    //console.log(words);
    return words;
  }

  return scrabble;
}
