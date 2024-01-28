// function BinarySearch(arr,Key){
//          let start = 0;
//          let end = arr.length-1;

//         while(start <= end){
//             const mid = Math.floor((start+end)/2);

//             if(arr[mid] == Key){
                 
//                 return mid;

//             } else if(arr[mid] <= Key){
//                 start = mid+1;
//             }else{
//                 end = mid-1;
//             }

           
//          }
//          return -1;
// }

// const sortedArray = [1,2,3,4,5];
// const key = 4;

// let result = BinarySearch(sortedArray,key);
// console.log(result);



// function binarySearch(arr, target) {
//     let start = 0;
//     let end = arr.length - 1;
  
//     while (start <= end) {
//       let mid = Math.floor((start + end) / 2);
  
//       if (arr[mid] === target) {
//         return mid; // Element found, return its index
//       } else if (arr[mid] < target) {
//         start = mid + 1; // Adjust the search range to the right half
//       } else {
//         end = mid - 1; // Adjust the search range to the left half
//       }
//     }
  
//     return -1; // Element not found
//   }
  
//   // Example usage:
  
//   const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//   const targetElement = 7;
  
//   const result = binarySearch(sortedArray, targetElement);
//   console.log(result);
// //   if (result !== -1) {
// //     console.log(`Element ${targetElement} found at index ${result}.`);
// //   } else {
// //     console.log(`Element ${targetElement} not found in the array.`);
// //   }
  

function BinarySearchRecursive(start=0, end=arr.length-1,arr,key,arr){
    if(start <= end){
        const mid =Mathe.floor((start+end)/2);

        if(arr[mid] == key){
            return mid;
        }
        else if(arr[mid] < key){
            return BinarySearchRecursive (arr,key,mid+1,end)
        } else if(arr[mid] > key){
               return BinarySearchRecursive(arr,key,mid-1,end)
        }else{
            return -1;
        }
    }
}

const sortedArray = [1,2,3,4,5];
const key = 4;

const result = BinarySearchRecursive(sortedArray,key);
console.log(result);