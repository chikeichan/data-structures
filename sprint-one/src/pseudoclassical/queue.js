var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.counter = 0;
  this.storage = {};
};

Queue.prototype.enqueue = function(val){
	this.storage[this.counter] = val;
	this.counter++;
}

Queue.prototype.dequeue = function(){
	if( this.counter > 0 ){
		this.counter--;
		var val = this.storage[0];
		for(var key in this.storage){
			this.storage[key-1] = this.storage[key];
		}
		delete this.storage[this.counter];
		return val;
	}
}

Queue.prototype.size = function(){
	return this.counter;
}

