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
