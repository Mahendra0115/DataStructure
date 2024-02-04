// bubble short 


// let arr1 = [5,6,4,6,8,2,3,1];
function bubble (arr){
        for(let i = 0; i<arr.length-1; i++){
            for(let j=0; j<arr.length-i-1; j++){
                if(arr[j]>arr[j+1]){
                  
                    let temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
                }
            }
        }
        return arr;
}

console.log(bubble([5,6,4,-6,8,-2,3,1]));



/* 

function selectionarray(arr){
    
   
    
    for(let i=0; i<arr.length; i++){
        let minvalue = i;
        for(let j = i+1; j<arr.length; j++){
            j = i;

        }
        if(arr[min]>arr[j]){
            let temp = arr[i];
            arr[i] = arr [minvalue];
            arr[minvalue] = temp;
        }
       
    }
    return arr;

}

let obj2 = new selectionarray([10,45,15,20,30]);
console.log(obj2);

*/


/* 

//// recursion 

 function ReachHome(src, desti){
        if(src === desti){
            console.log(" Finally Reached at home:");
            return ;
        }

//  console.log("Going continue ...",src);
  
 // supose we are going at home from kanpur then logic 
 if(src === 1){
    console.log("checkout from Kanpur:--->",src);
 }else if(src == 2){
    console.log("reached Akbarpur: ---->",src);
 }else if (src == 3){
    console.log("Reached Auriya: ---->",src);
 }else if(src == 4){
    console.log("reached Kuthaund:---->",src);
 }

 src ++;
 ReachHome(src,desti);
    
 }

 ReachHome(1,5);


*/

// function BinarySearch(key,arr){
//     const start = 0;
//     const end = arr.length-1

// while(start  <= end){
//     const mid = Math.floor((start+end)/2);

//     if(arr[mid] == key){
//         return mid;
//     }
//     else if(arr[mid] <= key){
//         start = mid+1;
//     }else{
//         end = mid-1;
//     }
    
    
// }
// return -1;

// }

// let shortedarray = [1,2,3,4,5,6];
// let key = 4;

// let result = BinarySearch(shortedarray,key);
// console.log(result);





