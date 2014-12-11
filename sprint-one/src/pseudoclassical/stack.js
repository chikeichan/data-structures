var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.counter = 0;
  this.storage = {};
};

Stack.prototype.push = function(val){
	this.storage[this.counter] = val;
	this.counter++;
}

Stack.prototype.pop = function(){
	if( this.counter > 0 ){
		this.counter--;
		var val = this.storage[this.counter];
		delete this.storage[this.counter];
		return val;
	}
}

Stack.prototype.size = function(){
	return this.counter;
}
