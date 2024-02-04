   


   
// function insertionSort(arr){
//     var currentVal;
//     for(var i=1;i<arr.length;i++){
//       currentVal=arr[i];
//       var j=i-1;
  
//       // we will run a reverse while loop
  
//       while(j>=0){
//           if(arr[j]>currentVal){
//              // we will shift the larger element  to the right
  
//              arr[j+1]=arr[j];
//              j--;    
//           }else{
//               break;
//           }
//       }
//       arr[j+1]=currentVal;
//     }
//     return arr;
//   }
  
  
//   console.log(insertionSort([2,1,4,3]))


    // ------>   ( OR )

    // function insertionSort(arr){

    //     for(let i=1; i<arr.length; i++){
    //         let currentvalue = arr[i];
    //         let j = i-1;

    //         while(arr[j]>=0 && currentvalue < arr[j]){
    //             arr[j+1] = arr[j];
    //             j--;
    //         }

    //         arr[j+1] = currentvalue;
    //     }
    //       return arr;
    // }


    // let obj = insertionSort([5,6,2,7,6]);
    // console.log( obj);



    function demo(arr){
    

      for(let i=1; i<arr.length; i++){
       let minvalue = arr[i];
       let j = i-1;
        while(arr[j]>= 0 && minvalue <= arr[j]){
              arr[j+1] = arr[j];
                j--
        }
        arr[ j+1] = minvalue;
      }
      return arr;
  }

   let obj =new  demo([1,5,6,4,12]);
   console.log(obj);






   