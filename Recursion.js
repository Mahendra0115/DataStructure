//    Simple Logic 


function findPath(source, destination) {
    // Base case: if source and destination are equal, print the message
    if (source === destination) {
      console.log("Pahuch gya!"); // This means "Reached!"
      return;
    }
   
    
    
    // Recursive case: if source and destination are not equal, make a recursive call
   
   
   
    if(source === 1){
        console.log("Kanpur" ,source);

   } else if(source === 2){
      console.log("Akbarpur",source)
   }else if(source === 3){
     console.log("Auriaya",source)
   }
   else{
    console.log("Fasing problem");
   }

source++;
   
    findPath(source, destination); // You can adjust the logic based on your problem
  }
  
  // Example usage:
  findPath(1, 5);
  

































// function fectorial(n){
//     if(n<=0){
//         return 1;

//     }
//     return fectorial(n-1)+fectorial(n-2);


// }
//  console.log(fectorial(5));

//  console.log("second code .....");


//  function fibonaki(n){
//     if(n <= 1){
//         return 1;
//     }

//     return fibonaki(n-1)+fibonaki(n-2);
//  }

//  console.log(fibonaki(5));