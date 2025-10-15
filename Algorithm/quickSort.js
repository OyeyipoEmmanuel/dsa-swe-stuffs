function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    // Partition the array and get the pivot index
    const pivotIndex = partition(arr, left, right);

    // Recursively sort elements before and after partition
    quickSort(arr, left, pivotIndex);
    quickSort(arr, pivotIndex + 1, right);
  }

  return arr; // Return the sorted array
}

// Partition function using Hoare’s partitioning scheme
function partition(arr, left, right) {
  const pivot = arr[left]; // Step 1: Choose first element as pivot
  let leftIndex = left - 1;
  let rightIndex = right + 1;

  while (true) {
    // Step 2: Move leftIndex to the right until element >= pivot
    do {
      leftIndex++;
    } while (arr[leftIndex] < pivot);

    // Step 3: Move rightIndex to the left until element <= pivot
    do {
      rightIndex--;
    } while (arr[rightIndex] > pivot);

    // Step 4: If pointers cross, return rightIndex (partition point)
    if (leftIndex >= rightIndex) {
      return rightIndex;
    }

    // Step 5: Swap elements at leftIndex and rightIndex
    [arr[leftIndex], arr[rightIndex]] = [arr[rightIndex], arr[leftIndex]];
  }
}

// Example:
const arr = [5, 3, 8, 1, 4, 6, 2, 7];
console.log(quickSort(arr)); // 👉 [1, 2, 3, 4, 5, 6, 7, 8]
