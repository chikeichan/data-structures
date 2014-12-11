var Tree = function(value){
  var newTree = {};
  newTree.value = value;

  // your code here
  _.extend(newTree,treeMethods);
  newTree.children = [];  // fix me

  return newTree;
};





var treeMethods = {};

treeMethods.addChild = function(value){
  this.children.push(Tree(value));
};

treeMethods.contains = function(target){
  //declare result to be false;
  var result = false;
  var search = function(tree){
    //if value equal targrt
    if( tree.value === target ){
      //setting result to be true, break
      result = true;
      return;
    }
    if( tree.children.length > 0 ){
      //if tree children length is greater than 0
      for( var i = 0; i<tree.children.length; i++){
        //run search recursively
        search(tree.children[i]);
      }
    }
  }

  search(this);


  //return result
  return result;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
