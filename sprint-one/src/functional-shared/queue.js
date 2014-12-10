var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newInstance = {};

  newInstance.counter = 0;
  _.extend(newInstance, queueMethods);

  return newInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(val){
	this[this.counter] = val;
	this.counter++;
}

queueMethods.dequeue = function(){
	if(this.counter > 0){
		this.counter--;
		var val = this[0];

		for(var i in this) {
			this[i-1] = this[i];
		}

		delete this[this.counter];

		return val;
	}
}

queueMethods.size = function(){
	return this.counter--;
}
