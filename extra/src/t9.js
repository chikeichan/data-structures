var T9 = function(){
	var keypads = {
		a: 2,
		b: 2,
		c: 2,
		d: 3,
		e: 3,
		f: 3,
		g: 4,
		h: 4,
		i: 4,
		j: 5,
		k: 5,
		l: 5,
		m: 6,
		n: 6,
		o: 6,
		p: 7,
		q: 7,
		r: 7,
		s: 7,
		t: 8,
		u: 8,
		v: 8,
		w: 9,
		x: 9,
		y: 9,
		z: 9
	}
	var _insertNext = function(letters,tree,vocab){
		var letters = letters.slice();
		var letter = letters.shift();
		var key = keypads[letter];

		if(!tree.children[key]){
			tree.children[key] = T9();
		}
		if (letters.length === 0){
			tree.children[key].words.push(vocab)
		} else {
			_insertNext(letters,tree.children[key],vocab);
		}

	}

	var _findNext = function(letters,tree,vocab){
		var letters = letters.slice();
		var letter = letters.shift();
		var key = keypads[letter];

		for(var i=0; i<tree.words.length;i++){
			if(tree.words[i] === vocab){
				return true;
			}
		}

		if(!tree.children[key]){
			return false;
		} else {
			return _findNext(letters,tree.children[key],vocab);
		}

	}

	var _lookupNext = function(keys, tree){
		var keys = keys.slice();
		var key = +keys.shift();


		if(keys.length === 0){
			return tree.children[key].words;
		}
		if(!tree.children[key]){
			return [];
		}
		return _lookupNext(keys,tree.children[key]);
	}



	var t9 = {};

	t9.value = null;
	t9.children=[];
	t9.words = [];

	t9.insert = function(vocab){
		var vocab = vocab.toLowerCase();
		var letters = vocab.split('');

		_insertNext(letters,this,vocab);
	}



	t9.contains = function(vocab){
		var vocab = vocab.toLowerCase();
		var letters = vocab.split('');

		return _findNext(letters,this,vocab);
	}

	t9.lookup = function(keys){
		var keys = keys.toString().split('')

		return _lookupNext(keys,this);
	}

	t9.size = function(){
		var size = 0;


		var addNext = function(tree){
			size = size + tree.words.length;
			for(var i = 0; i<tree.children.length; i++){
				if(!!tree.children[i]){
					addNext(tree.children[i]);
				}
			}
		}

		addNext(this);

		return size;
	}

	return t9;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
