var BinarySearchTree = function(value){
  var binarysearchtree = {};

  _.extend(binarysearchtree, methods);
  //.left properties
  binarysearchtree.left = null;
  //.right properties
  binarysearchtree.right = null;
  binarysearchtree.value = value;

  return binarysearchtree;
};

var methods = {};
methods.insert = function(value){
  //if value > this.value
  if(value > this.value){
    // if this.right is null
    if(!this.right){
      // this.right is Tree(value);
      this.right = BinarySearchTree(value);
    } else {
      // run insert recursively on this.right;
      this.right.insert(value);
    }
  }
  //if value < this.value
  if(value < this.value){
    // if this.left is null
    if(!this.left){
      // this.left is Tree(value);
      this.left = BinarySearchTree(value);
    } else {
      // run insert recursively on this.left;
      this.left.insert(value);
    }
  }
};

methods.contains = function(){

};
methods.depthFirstLog = function(){

};


/*
 * Complexity: What is the time complexity of the above functions?
 */
