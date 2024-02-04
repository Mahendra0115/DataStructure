 class Stack {

      constructor(){
        this.items = [];
      }

      push(element){
         this.items.push(element);
      }

      pop(){
          if(this.items.length === 0){
            return "Underflow -Stack is empty"
          }
          return this.items.pop();
      }


      peek(){
        if(this.items.length === 0){
            return "stack is empty";
        }
        return this.items[this.items.length -1];
      }
    }

    let myStack = new Stack();

    myStack.push(1);
    myStack.push(2);
    myStack.push(3);


     console.log("Stack after oushing element:  ",myStack.items);
     console.log("peek at the top elemnt ",myStack.peek);
     console.log("pop an element: ",myStack.pop());
     console.log("Stack after poping an element:",myStack.items);