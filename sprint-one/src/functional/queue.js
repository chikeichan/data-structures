var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var counter = 0;
  // Implement the methods below

  someInstance.enqueue = function(value){
    someInstance[counter]=value;
    counter++;
  };

  someInstance.dequeue = function(){
    if( counter > 0 ){
      var temp = someInstance[0];
      //delete someInstance[0]
      delete(someInstance[0]);
      //subtract one from every key
      for(var key in someInstance){
        someInstance[key-1] = someInstance[key];
      }
      counter--;

      delete(someInstance[counter]);
      return temp;
    }

  };

  someInstance.size = function(){
    return counter;
  };

  return someInstance;
};
