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
  var add = function(i){
    if(!this.slots[i]){
      this.slots[i] = 1;
    }
  }
  add.call(this,hashVal0);
  add.call(this,hashVal1);
  add.call(this,hashVal2);
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

BloomFilterMethods.contains = function(val){
  var hashVal0 = this.hash0(val);
  var hashVal1 = this.hash1(val);
  var hashVal2 = this.hash2(val);
  var result = true;
  var search = function(i){
    if(!this.slots[i]){
      result = false;
    }
  }
  search.call(this,hashVal0);
  search.call(this,hashVal1);
  search.call(this,hashVal2);

  return result;
}

BloomFilterMethods.falsePositiveProb = function(){
    var e = Math.E;
    var k = this.slots.length-this.capacity();
    var m = this.slots.length;
    var n = 3;

    prob = Math.round(Math.pow((1-Math.pow(e,(-k*n)/m)),k)*100)/100;


  return prob;
}
