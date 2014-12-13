var BinarySearchTree = function(value,level){
  var binarysearchtree = {};

  _.extend(binarysearchtree, methods);
  //.left properties
  binarysearchtree.left = null;
  //.right properties
  binarysearchtree.right = null;
  binarysearchtree.level = level || 1;
  binarysearchtree.value = value;

  return binarysearchtree;
};

var methods = {};
methods.insert = function(value){
  var drill = function(tree,level){
    var newlevel = level+1;
    //if value > this.value
    if(value > tree.value){
      // if tree.right is null
      if(!tree.right){
        // tree.right is Tree(value);
        tree.right = BinarySearchTree(value,newlevel);
      } else {
        // run insert recursively on tree.right;
        drill(tree.right,newlevel);
      }
    }
    //if value < tree.value
    if(value < tree.value){
      // if tree.left is null
      if(!tree.left){
        // tree.left is Tree(value);
        tree.left = BinarySearchTree(value,newlevel);
      } else {
        // run insert recursively on tree.left;
        drill(tree.left,newlevel);
      }
    }
  }
  drill(this,1);
  var values = this._findDepth();

  if(!!values){
    var mid = Math.floor(values.length/2);
    this.value = values.splice(mid,1)[0];
    this.left = null;
    this.right = null;
    this._rebalance(values);
  }
};

methods.contains = function(value){
  //if value equals this.value
  if(value === this.value){
    return true;
  }
  //if value is greater than this.value
  if(value > this.value){
    //if this.right is null
    if(!this.right){
      return false;
    } else{
      return this.right.contains(value);
    }
  }
  //if value is less than this.value
  if(value < this.value){
    //if this.left is null
    if(!this.left){
      return false;
    } else{
      return this.left.contains(value);
    }
  }

};
methods.depthFirstLog = function(cb){
  //call cb on node value
  cb(this.value);
  //if there is this.right
  if(!!this.right){
    //depthFirstLog on this.right
    this.right.depthFirstLog(cb);
  }
  //if there is this.left
  if(!!this.left){
    //depthFirstLog
    this.left.depthFirstLog(cb);
  }
};

methods._rebalance = function(values){
  var values = values.slice();
  var mid = Math.floor(values.length/2);

  if(values.length>0){

    this.insert(values.splice(mid,1)[0]);
    this._rebalance(values)
  }

}

methods._findDepth = function(){
  var depths = [];
  var values = [];
  var findDepth = function(tree){
    values.push(tree.value);
    if(!tree.left && !tree.right){
      depths.push(tree.level);
    }
    if(!!tree.left){
      findDepth(tree.left);
    }
    if(!!tree.right){
      findDepth(tree.right);
    }
  }
  findDepth(this);
  depths.sort(function(a,b){
    return a-b;
  })

  //console.log(depths);
  if((depths[depths.length-1]/depths[0])<2){
    return false;
  } else {
    values.sort(function(a,b){
      return a-b;
    })
    return values;
  }
}








/*
 * Complexity: What is the time complexity of the above functions?
 */
