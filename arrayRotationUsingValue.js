// Rotational array using value k is a common problem in programming.
// The idea: rotate the elements of an array to the right by `k` positions
// (moving items that fall off the end back to the front).

// Example input: [1,2,3,4,5], k = 2 -> result: [4,5,1,2,3]

// WAY 1: Repeated pop + unshift (right-rotation)
let arr = [1, 2, 3, 4, 5];
let givenNumber = 2; // number of times to rotate

// Loop `givenNumber` times: each iteration removes the last element
// and inserts it at the front. After 2 iterations the array becomes [4,5,1,2,3].
for (let i = 0; i < givenNumber; i++) {
    // remove the last element from the array (mutates `arr`)
    let removedElement = arr.pop();

    // insert the removed element at the front (mutates `arr`)
    arr.unshift(removedElement);
}

console.log(arr); // prints rotated array from way 1






// WAY 2: Use `slice()` to take chunks and recombine (more efficient for large k)
// We avoid looping and instead split the array into two parts, then concat.
let arr2 = [1, 2, 3, 4, 5];

let givenNember1 = 2; // requested rotations (same role as `givenNumber` above)

// Use modulo to handle cases where k >= arr length. e.g. k=7, length=5 -> 7%5 = 2
let removeIndex = givenNember1 % arr2.length; // effective rotations

// `slice()` explanation (used below):
// - `arr.slice(start, end)` returns a shallow copy of elements from index `start` (inclusive)
//   up to, but not including, `end` (exclusive). If `start` is negative, it counts
//   from the end of the array: `arr.slice(-n)` returns the last `n` elements.
// - `slice` does not modify the original array.

// Grab the last `removeIndex` elements. Example: removeIndex=2 -> [4,5]
// Note: if `removeIndex` is 0, `arr2.slice(-0)` behaves like `arr2.slice(0)`
// (because -0 === 0) and returns the whole array — you may want to handle
// the k=0 case separately in production code.
let lastElements = arr2.slice(-removeIndex);

// Grab the remaining first part of the array up to the split point.
// Example: arr2.slice(0, arr2.length - 2) -> [1,2,3]
let firstElements = arr2.slice(0, arr2.length - removeIndex);

console.log(lastElements);    // [4, 5] when removeIndex = 2
console.log(firstElements);   // [1, 2, 3]

// Recombine: put the last `removeIndex` elements first, then the rest.
console.log(lastElements.concat(firstElements)); // [4,5,1,2,3]

// Edge cases & notes:
// - If k === 0 (no rotation), `removeIndex` will be 0. `slice(-0)` === `slice(0)`,
//   so `lastElements` will equal the whole array and `firstElements` will also be the whole array,
//   producing duplicated output. To avoid that, check `if (removeIndex === 0) return arr2;`.
// - This `slice` approach is non-mutating: `arr2` remains unchanged.
// - Both methods perform a right rotation. For left rotation, split at index `k` instead:
//   `first = arr.slice(k); second = arr.slice(0, k); result = first.concat(second);`



