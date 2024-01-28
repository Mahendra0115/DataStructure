

class Datastructure {
    // Function to merge two sorted halves of an array
    merge(arr, si, mid, ei) {
      // Create a temporary array to store merged elements
      let merged = new Array(ei - si + 1);
      let idx1 = si;
      let idx2 = mid + 1;
      let x = 0;
  
      // Merge the two halves in sorted order
      while (idx1 <= mid && idx2 <= ei) {
        if (arr[idx1] <= arr[idx2]) {
          merged[x++] = arr[idx1++];
        } else {
          merged[x++] = arr[idx2++];
        }
      }
  
      // Copy the remaining elements from the first half
      while (idx1 <= mid) {
        merged[x++] = arr[idx1++];
      }
  
      // Copy the remaining elements from the second half
      while (idx2 <= ei) {
        merged[x++] = arr[idx2++];
      }
  
      // Copy the merged elements back to the original array
      for (let i = 0, j = si; i < merged.length; i++, j++) {
        arr[j] = merged[i];
      }
    }
  
    // Function to recursively divide and merge the array
    mergeSort(arr, si, ei) {
      // Base case: If the array has one or zero elements, it is already sorted
      if (si < ei) {
        // Calculate the midpoint of the array
        let mid = Math.floor(si + (ei - si) / 2);
  
        // Recursively sort the two part 
        this.mergeSort( arr, si ,mid);
        this.mergeSort(arr, mid + 1, si);
  
        // Merge the sorted part 
        this.merge(arr, si, mid, ei);
      }
    }
  }
  
  // Example usage:
  const myObject = new Datastructure();
  const inputArray = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
  
  console.log("Original Array:", inputArray);
  
  // Perform Merge Sort on the array
  myObject.mergeSort(inputArray, 0, inputArray.length - 1);
  
  console.log("Sorted Array:", inputArray);
  
