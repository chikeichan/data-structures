var Scrabble = function(vocabWord,end){
  var _insertNext = function(letters,tree,vocab){
    var letters = letters.slice();
    var letter = letters.shift();

    if(!tree.children[letter]){
      tree.children[letter] = Scrabble();
    }
    if (letters.length === 0){
      tree.children[letter].children['^'] = Scrabble(vocab,'^')
      tree.children[letter].children['^'].words.push(vocab);
    } else {
      _insertNext(letters,tree.children[letter],vocab);
    }
    // console.log(vocab)
    // console.log(tree.children[letter].children['^']);
  }
  var words = [];
  var _lookupNext = function(letters,tree,vocab){
    //iterate over letters
    console.log(tree);

    for(var i=0;i<letters.length;i++){
      //slice letters
      var newletters = letters.slice()
      //splice letters at index and store it at letter
      var letter = newletters[i,1];
      //if tree has a children at letter
      if(!!tree.children[letter]){
        //run recursive on tree.children and new letters
        _lookupNext(newletters,tree.children[letter]);
      }
      //if tree has a children[^]
      if(!!tree.children['^']){
        //return tree.children[^].words to words
        words.push(tree.children['^'].words);
      }
    }

    return words;
  }


  var scrabble = {}

  scrabble.children = {};
  scrabble.value = end || null;
  scrabble.words = [];

  words.push(vocabWord);

  scrabble.insert = function(vocab){
    var letters = vocab.split('');

    _insertNext(letters,this,vocab);
  }

  scrabble.lookup = function(letters){
    var words = [];

    words.push(_lookupNext(letters,this))

    return words;
  }

  return scrabble;
}
