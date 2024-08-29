/* 
Rotate array n times
input array let arr = [1, 2, 3, 4, 5];
number of times let n = 3;
Output should be
Result [ 5, 1, 2, 3, 4 ]
Result [ 4, 5, 1, 2, 3 ]
Result [ 3, 4, 5, 1, 2 ]
*/

let arr = [1, 2, 3, 4, 5];
let n = 3;

for (let i = 0; i < n; i++) {
    let lastItem = arr.pop();
    arr.unshift(lastItem);
    console.log("Result", arr);
}