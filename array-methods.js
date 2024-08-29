// map method
/*
Used when you want to transform every element in an array and 
create a new array with these transformed elements.
Returns a new array with the transformed elements.
*/
let numbers = [1, 2, 3, 4, 5];
const squared = numbers.map(num => num * num);
console.log(squared);

// foreach
/*
The forEach method executes a provided function once for each array element.
forEach does not return a value. It returns undefined.
Used when you want to perform a side effect (e.g., modifying elements, logging, etc.)
on each element of an array without needing to create a new array.
*/
const data = [1, 2, 3, 4, 5];
data.forEach(num => console.log(num));

// reduce
//

//indexOf() method gets the index of specified element in the array
const arr = [1, 2, 3, 4, 5];
let a = arr.indexOf(3); // accepts element
console.log(a); // 2 returns index of specified element
let b = arr.indexOf(13); // accepts element
console.log(b); // -1 returns -1 if does not find the element in array

// find() method get the first element that satisfies the condition
let f = [1, 2, 3, 4, 5];
let r = f.find(num => num % 2 === 0);
console.log('find() method', r);

// filter() method get an array of elements that satisfies the condition
let f1 = [1, 2, 3, 4, 5];
let r1 = f1.filter(num => num % 2 === 0);
console.log('filter() method', r1);

// slice() method gets the subset of the array from start index to end (end not included)
let s = [1, 2, 3, 4, 5];
let sr = s.slice(1, 4);
console.log('slice() method', sr);

// push() method adds the elements at the end of the array.
// It will modify the original array
let arr1 = [1, 2];
arr1.push(3, 4);
console.log('push() method', arr1);

// concat() method will create the new array and not modify the original array
let arr2 = [1, 2];
let res1 = arr2.concat(3, 4);
console.log('concat() method', res1);