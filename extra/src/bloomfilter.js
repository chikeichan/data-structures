var BloomFilter = function(k){
  var filter = {};

  _.extend(filter,BloomFilterMethods);
  filter.slots = [];
  filter.slots.length = k;

  filter._counter = 0;

  return filter;
};

var BloomFilterMethods = {};
BloomFilterMethods.hash0 = function(val){
  var result = val.charCodeAt();
  return result % this.slots.length;
}

BloomFilterMethods.hash1 = function(val){
  var result = val.charCodeAt()-7;
  return result % this.slots.length;
}

BloomFilterMethods.hash2 = function(val){
  var result = val.charCodeAt()+7;
  return result % this.slots.length;
}

BloomFilterMethods.addValue = function(val){
  var hashVal0 = this.hash0(val);
  var hashVal1 = this.hash1(val);
  var hashVal2 = this.hash2(val);
  console.log(hashVal0,hashVal1,hashVal2)
}

BloomFilterMethods.capacity = function(){
  var counter = 0;
  for(var i = 0; i<this.slots.length; i++){
    if(!this.slots[i]){
      counter++;
    }
  }
  return counter;
}
