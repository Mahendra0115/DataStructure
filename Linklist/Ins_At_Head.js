

    
/* 

class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
}
  
  function insertAtHead(Headnode, tempnode) {
    // Create a new node with the given data
    const newNode = new Node(tempnode);
  
    // Make the new node point to the current head
    tempnode .next = Headnode;
  
    // Update the head to be the new node
    Headnode = newNode;
  
    // Return the updated head of the linked list
    return Headnode;
  }
  
  // Example usage:
  
  // Create the head node
  let  headNode = new Node(1);
  
  
  // Insert a new node with data 2 at the head
  const newNodeData = 2;
  headNode = insertAtHead(headNode, newNodeData);
 
  
  // Insert another new node with data 3 at the head
  const anotherNodeData = 3;
  headNode = insertAtHead(headNode, anotherNodeData);
   console.log(headNode);
  // Now, the linked list is: 3 -> 2 -> 1


   
*/

