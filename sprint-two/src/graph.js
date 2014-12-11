

var Graph = function(){
  this.storage = {};
};

Graph.prototype.addNode = function(node){
  var newNode = GraphNode(node);
  this.storage[node] = newNode;
};

Graph.prototype.contains = function(node){
  if(this.storage[node] === undefined){
    return false;
  }
  return true;
};

Graph.prototype.removeNode = function(node){
  delete this.storage[node];
};

Graph.prototype.hasEdge = function(fromNode, toNode){
    if (this.storage[fromNode].edge[toNode]){
      return true;
    }


  return false;
};

Graph.prototype.addEdge = function(fromNode, toNode){
  this.storage[fromNode].edge[toNode] = toNode;
  this.storage[toNode].edge[fromNode] = fromNode;
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  delete this.storage[fromNode].edge[toNode];
  delete this.storage[toNode].edge[fromNode];
};

Graph.prototype.forEachNode = function(cb){
  for(var key in this.storage){
    cb(key);
  }
};

var GraphNode = function(value){
  var newNode = {};

  newNode.value = value;
  newNode.edge = {};

  return newNode;
}

/*
 * Complexity: What is the time complexity of the above functions?
 */



