var Stack = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var counter = 0;

  // Implement the methods below
  someInstance.push = function(value){
    someInstance[counter] = value;
    counter++;
  };

  someInstance.pop = function(){
    if( counter > 0 ){  
      counter--;
      var value = someInstance[counter];
      delete someInstance[counter];
      return value;
    }
  };

  someInstance.size = function(){
    return counter;
  };

  return someInstance;
};

