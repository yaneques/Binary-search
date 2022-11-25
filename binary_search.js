//works when the array is sorted
function search(arr, x) {
  let i = 0;
  let j = arr.length;
  while (i !== j) {
    let m = Math.floor((i + j) / 2);
    if (x === arr[m]) return m;
    if (x < arr[m]) j = m;
    else i = m + 1;
  }
  return null;
}

let items = [2, 3, 5, 7, 11, 13, 17];

console.log(search(items, 1));
//print null
console.log(search(items, 7));
//print 3
console.log(search(items, 19));
//print null

// *** simplified speed test ***

let i = 0;
items = Array.apply(null, Array(10000)).map(() => ++i);
let count = 10000;

let start = new Date();

for (i = 0; i < count; i++) search(items, 7777);

let milliseconds = new Date() - start;

console.log("milliseconds is", milliseconds);
// about 5 milliseconds
