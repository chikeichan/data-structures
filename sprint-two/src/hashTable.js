var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){

  var i = getIndexBelowMaxForKey(k, this._limit);
  //create a tuple with [k, v]
  var tup = [k, v];
  //retrieve the bucket at index i
  //if no bucket
  if(this._storage.get(i) === undefined){
    //make bucket
    this._storage.set(i, []);
  }

  this._storage.get(i).push(tup);
};

HashTable.prototype.retrieve = function(k){

  var i = getIndexBelowMaxForKey(k, this._limit);
  //get bucket
  var bucket = this._storage.get(i);
  //iterate inside bucket
  for(var key = 0;key < bucket.length;key++){
    if (bucket[key][0] === k){
      return bucket[key][1];
    }
  }
  return null;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  //get bucket
  var bucket = this._storage.get(i);
  //iterate bucket
  for(var key = 0; key < bucket.length;key++){
    //if tuple[0] === k
    if(bucket[key][0] === k){
      //splice bucket[tuple key, 1]
      bucket.splice(key, 1)
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
