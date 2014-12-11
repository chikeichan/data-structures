var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var newTail = Node(value);
    if(list.head === null){
      list.head = newTail;
    }
    if(list.tail === null){
      list.tail = newTail;
    } else {
      //add next node to last.next
      list.tail.next = newTail;
      //set tail to new node
      list.tail = newTail;
    }

  };

  list.removeHead = function(){
    var lastHead = list.head.value;
    list.head = list.head.next;
    return lastHead;
  };

  list.contains = function(target){
    var inspect = list.head;
    var search = function(inspect){
      if( inspect.value === target ){
        return true;
      } else {
        inspect = inspect.next;
        if(inspect===null){
          return false;
        }
        return search(inspect);
      }
    }
    return search(inspect);

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
