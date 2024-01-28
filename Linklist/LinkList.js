class Node{
  constructor(data){
    this.data = data;
    this.next = null;

  }
  
}

class LinkList{
    constructor(){
        this.head = null;
        this.tail = null;

    }

    push(data){
         let node = new Node(data);
            if(this.head == null){
                this.head = node;
                this.tail = node;
            }
              
         else{
            this.tail.next = node;
            this.tail = node;
           }

         }
       

    
}


const newlinklist  = new LinkList();
newlinklist.push(1);
newlinklist.push(2);
console.log(newlinklist);

newlinklist.push(9);
console.log(JSON.stringify (newlinklist))