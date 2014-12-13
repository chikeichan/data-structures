describe('bloomFilter', function() {
  var bloomFilter;

  beforeEach(function() {

    bloomFilter = BloomFilter(18);

  });




  it('should have a Bit Vector with 18 slots', function(){
    expect(bloomFilter.slots.length).to.equal(18);
  });

  it('should set three bits to 1 after a value is added',function(){
    var result;
    bloomFilter.addValue('hi');
    result = bloomFilter.capacity();
    expect(result).to.equal(15);
    bloomFilter.addValue('yo');
    result = bloomFilter.capacity();
    expect(result).to.equal(12);
  });

  it('should return false if not definitely contains the value',function(){
    bloomFilter.addValue('hi');
    expect(bloomFilter.contains('yo')).to.equal(false);
  });

  it('should return true if maybe it contains',function(){
    bloomFilter.addValue('hi');
    bloomFilter.addValue('yo');
    bloomFilter.addValue('Jacky');
    expect(bloomFilter.contains('hello')).to.equal(true);
  });

  it('should return false positive probability',function(){
    bloomFilter.addValue('hi');
    bloomFilter.addValue('yo');
    bloomFilter.addValue('Jacky');
    var e = Math.E;
    var k = bloomFilter.slots.length-bloomFilter.capacity();
    var m = bloomFilter.slots.length;
    var n = 3;

    prob = Math.round(Math.pow((1-Math.pow(e,(-k*n)/m)),k)*100)/100;

    expect(prob).to.be.a('Number');
  });

  it('**FOR COMPARISON** Compare Empirical Rate after 10000 iteration to True Positives',function(){
    var Positives = 0;
    var trials = ['hi','a','b','c','d','hello','Jacky','e','f','Hack Reactor','Structures','data','zee','boo','djf;askjf','Tole','Alex','Yo','Man'];
    bloomFilter.addValue('hi');
    bloomFilter.addValue('yo');
    bloomFilter.addValue('Jacky');

    for(var i=0; i<10000; i++){
      for(var j=0; j<trials.length; j++){
        if(bloomFilter.contains(trials[j])){
          Positives++;
        }
      }
    }

    expect(Positives).to.equal(20000);

  });

  it('**FOR COMPARISON** Compare Theoretical Rate vs Actual Rate',function(){
    var Positives = 0;
    var trials = ['hi','a','b','c','d','hello','Jacky','e','f','Hack Reactor','Structures','data','zee','boo','djf;askjf','Tole','Alex','Yo','Man'];
    var actualProb;
    bloomFilter.addValue('hi');
    bloomFilter.addValue('yo');
    bloomFilter.addValue('Jacky');

    for(var i=0; i<10000; i++){
      for(var j=0; j<trials.length; j++){
        if(bloomFilter.contains(trials[j])){
          Positives++;
        }
      }
    }
    actualProb = ((Positives-20000)/10000)/trials.length;
    actualProb = Math.round(actualProb*100)/100

    expect(bloomFilter.falsePositiveProb()).to.equal(actualProb);
    expect(Positives).to.equal(20000);

  });


});
