var T9 = function(){
	var t9 = {};

	t9.value = null;
	t9.children=[];
	t9.words = [];

	t9._letterToNum = function(letter){
		var keypads = [['a','b','c'],['d','e','f'],['g','h','i']]
		var letter = letter.toLowerCase();



		console.log(letter);
	}

	t9.insert = function(vocab){
		var letters = vocab.split('');

		console.log(letters);
	}

	t9.contains = function(vocab){

	}

	return t9;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
