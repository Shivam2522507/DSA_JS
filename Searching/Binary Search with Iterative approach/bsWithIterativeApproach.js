let array = [5, 7, 12, 41, 70, 230, 450, 826, 935, 8000];
document.write("Given Array [" + array + "]");
// let find_item = false;
// in iterative approach we use loop
function find(val) {
  let start = 0;
  let end = array.length - 1;
  let position = undefined;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (array[mid] === val) {
      position = mid;
      break;
    } else if (array[mid] < val) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  if (position != undefined) {
    console.warn("' Your Value " + val + " is Present in " + position + " '");
  } else {
    console.warn("'" + val + "' is not Present in [" + array + "]");
  }
}
