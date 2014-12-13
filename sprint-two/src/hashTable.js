var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v, noResize){

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

  if(noResize){

  } else {
    this._resize();
  }
};

HashTable.prototype._resize = function(boo){
  var size = 0;
  var storage = [];
  var rehash = false;

  this._storage.each(function(bucket){
    if(!!bucket){
      for(var i=0;i<bucket.length;i++){
        if(bucket[i][1] !== null){
          var tuple = [bucket[i][0],bucket[i][1]];
          storage.push(tuple);
        }
      }
    }
  })

  size = storage.length;

  if(this._limit*0.75 < size){
    this._limit = this._limit*2;
    rehash = true;
  }
  if(this._limit*0.25 > size){
    this._limit = this._limit/2;
    rehash = true;
  }

  if(rehash){
    this._storage = LimitedArray(this._limit);
    for(var i=0;i<storage.length;i++){
      var k = storage[i][0];
      var v = storage[i][1];
      this.insert(k,v,true);
    }
  }

}

HashTable.prototype.retrieve = function(k){

  var i = getIndexBelowMaxForKey(k, this._limit);
  //get bucket
  var bucket = this._storage.get(i);

  //iterate inside bucket
  if(!!bucket){
    for(var key = 0;key < bucket.length;key++){
      if (bucket[key][0] === k){
        return bucket[key][1];
      }
    }
  }
  return null;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  //get bucket
  var bucket = this._storage.get(i);
  //iterate bucket
  for(var key = 0; key<bucket.length; key++){
    //if tuple[0] === k
    if(bucket[key][0] === k){
      //splice bucket[tuple key, 1]
      bucket[key][0] = null;
      bucket[key][1] = null;

    }
  }
  this._resize(true);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
