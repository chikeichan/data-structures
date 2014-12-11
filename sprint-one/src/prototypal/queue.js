var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
  someInstance.counter = 0;
  someInstance.storage = {};
  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(val){
	this.storage[this.counter] = val;
	this.counter++;
}

queueMethods.dequeue = function(){
	if( this.counter > 0 ){
		this.counter--;
		var val = this.storage[0];
		for (var key in this.storage){
			this.storage[key-1] = this.storage[key]
		}
		delete this.storage[this.counter]
		return val;
	}
}

queueMethods.size = function(){
	return this.counter;
}
