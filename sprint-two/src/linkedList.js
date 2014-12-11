var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;
 

  list.addToTail = function(value){
    var linkedListNode = Node(value);
    if(!this.head && !this.tail){
      this.head = linkedListNode;
      this.tail = linkedListNode;
    } else {
      this.tail.next = linkedListNode;
      this.tail = linkedListNode;
    }
  };

  list.removeHead = function(){
    var removed = this.head.value;
    this.head = this.head.next;
    return removed;
  };

  list.contains = function(target){
    var findNext = function(node){
      console.log(node.value === target);
      if(node.value === target){
        return true;
      }
      if(node.next!==null){
        return findNext(node.next);
      }
      return false;
    }

    return findNext(this.head);

  };



  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
