

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
  for(var i = 0; i < this.storage[fromNode].edge.length;i++){
    if (this.storage[fromNode].edge[i] === toNode){
      return true;
    }

  }
  return false;
};

Graph.prototype.addEdge = function(fromNode, toNode){
  this.storage[fromNode].edge.push(toNode);
  this.storage[toNode].edge.push(fromNode);
};

Graph.prototype.removeEdge = function(fromNode, toNode){
};

Graph.prototype.forEachNode = function(cb){
};

var GraphNode = function(value){
  var newNode = {};

  newNode.value = value;
  newNode.edge = [];

  return newNode;
}

/*
 * Complexity: What is the time complexity of the above functions?
 */



