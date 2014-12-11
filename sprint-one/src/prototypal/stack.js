var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var someInstance = Object.create(stackMethods);
  someInstance.counter = 0;

  return someInstance;
};

var stackMethods = {};

stackMethods.push = function(val){
  this[this.counter] = val;
  this.counter++;

};

stackMethods.pop = function(){
  if(this.counter > 0){

    this.counter--;
    var temp = this[this.counter];
    delete(this[this.counter]);
    return temp;
  }

};

stackMethods.size = function(){
  return this.counter;

};



