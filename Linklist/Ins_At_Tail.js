class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function insertAtEnd(headNode, tailNode, tempnode) {
  // Initialize an empty linked list

  // Create a new node with the given data
  const newNode = new Node(tempnode);

  // If the linked list is empty, set both headNode and tailNode to the new node
  if (!headNode) {
    headNode = newNode;
    tailNode = newNode;
    return { headNode, tailNode };
  }

  // Otherwise, make the current tail point to the new node
  tailNode.next = newNode;

  // Update the tailNode to be the new node
  tailNode = newNode;

  // Return the updated headNode and tailNode
  return { headNode, tailNode };
}

// Example usage:

let headNode = null;
let tailNode = null;


// Insert a new node with data 1 at the end
const firstNodeData = 1;
({ headNode, tailNode } = insertAtEnd(headNode, tailNode, firstNodeData));

// Insert another new node with data 2 at the end
const secondNodeData = 2;
({ headNode, tailNode } = insertAtEnd(headNode, tailNode, secondNodeData));


const ThirdNodeData = 3;
({ headNode, tailNode } = insertAtEnd(headNode, tailNode,  ThirdNodeData));


const fourthNodeData = 4;
({ headNode, tailNode } = insertAtEnd(headNode, tailNode, fourthNodeData));



// Now, the linked list is: 1 -> 2
// Now, the linked list is: 1 -> 2

console.log(headNode);
console.log(tailNode);
console.log(JSON.stringify (headNode,tailNode))

// Soluction:- 2



// Linked list is a datstructure
  /* 

class Node{

    constructor(data){
        this.data=data;
        this.next=null;
    }
}

class LinkedList{
      
    constructor(){
        this.head=null;
        this.tail=null;
    }

    push(data){
        // here we have to check two things
        // firstly we have to check if the linked list is empty or not
        let node=new Node(data);
        if(this.head==null){
            // so the element we will be adding would be the head element
            this.head=node;
            this.tail=node;

        }else{
            this.tail.next=node;
            this.tail=node;
        }

    }
}

const ll=new LinkedList();
ll.push(2);
ll.push(3);
console.log(ll);

ll.push(19);
console.log(ll);


*/



// prectise 1:- 
 
          /* 
class Node{
    constructor(data){
        
        this.data = data;
        this.next = null;
    }
}

function InsertAtLast(headNode,tailnode,tempnode){
    const newNode = new Node(tempnode);
    if(!headNode){
      headNode = newNode;
      tailnode = newNode;


      return {headNode,tailnode};
    }

    tailnode.next = newNode;
    tailnode = newNode;

    return { headNode,tailnode};

}
//  inslize node

 let headNode = null;
 let tailnode = null;

 const  fristNodeData = 5; 
 ({headNode,tailnode} = InsertAtLast(headNode,tailnode,fristNodeData));

 const  secondNodeData = 10; 
 ({headNode,tailnode} = InsertAtLast(headNode,tailnode,secondNodeData));

 const  ThirdNodeData = 15; 
 ({headNode,tailnode} = InsertAtLast(headNode,tailnode,ThirdNodeData));

 const  forNodeData = 20; 
 ({headNode,tailnode} = InsertAtLast(headNode,tailnode,forNodeData));

 console.log(headNode);
 console.log(tailnode);
//  console.log(tailnode);

*/