var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.counter = 0;

  _.extend(someInstance,stackMethods);


  return someInstance;
};

var stackMethods = {
	push: function(val){
		this[this.counter] = val;
		this.counter++;
	},
	pop: function(){
		if( this.counter>0 ){
			this.counter--;
			var value = this[this.counter];
			delete this[this.counter];
			return value;
		}
	},
	size: function(){
		return this.counter;
	}

};

stackMethods.push = function(val){
  this[this.counter] = val;
  this.counter++;
}

stackMethods.pop = function(){
  if( this.counter > 0 ){
    this.counter--;
    var temp = this[this.counter];

    delete(this[this.counter]);

    return temp;
  }
}

stackMethods.size = function(){
  return this.counter;
}
