// // Bubbleshort 
// 


 let arr = [4,3,2,9,5,3];
 function bubbleshort(){
        for(let i=0; i<arr.length-1; i++){
            for(let j=0; j<arr.length-i-1; j++){
                if(arr[i]> arr[i+1]){
    // swap value using third varr
                    //  let temp = arr[j];
                    //  arr[j] = arr[j+1];
                    //  arr[j+1] = temp;

        //  swap array using bithout third varr 
                      arr[j] = arr[j] + arr[j+1]
                      arr[j+1] =arr[j] - arr[j+1]
                      arr[j] =  arr[j] - arr[j+1]
                }
            }
        }
        return arr;
 }

 bubbleshort();
 console.log(arr);