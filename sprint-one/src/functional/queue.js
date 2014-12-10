var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var sequence = 0;

  // Implement the methods below

  someInstance.enqueue = function(value){
    someInstance[sequence] = value;
    sequence++;
  };

  someInstance.dequeue = function(){
    if(sequence > 0){
      sequence--;
      var value = someInstance[0];

      for(var i in someInstance){
        someInstance[i-1] = someInstance[i];
      }

      delete someInstance[sequence];

      return value;
    }
  };

  someInstance.size = function(){
    return sequence;
  };

  return someInstance;
};
