let array = [5, 7, 12, 41, 70, 230, 450, 826, 935, 8000];
document.write("Given Array [" + array + "]");

function Bs(start, end, val, array) {
  if (start > end) {
    return -1;  // Base case: element not found
  }

  let mid = Math.floor((start + end) / 2);

  if (array[mid] === val) {
    return mid;  // Element found, return the position
  } else if (array[mid] < val) {
    return Bs(mid + 1, end, val, array);  // Search in the right half
  } else {
    return Bs(start, mid - 1, val, array);  // Search in the left half
  }
}

function find(val) {
  let start = 0;
  let end = array.length - 1;
  let position = Bs(start, end, val, array); // Capture the position or -1

  if (position !== -1) {
    console.warn("' Your Value " + val + " is Present at index " + position + " '");
  } else {
    console.warn("'" + val + "' is not Present in [" + array + "]");
  }
}