/*
    Count the frequency of array elements
    Input : ["aaa", "bbb", "aaa", "ccc", "bbb", "aaa"]
    Output {aaa: 3, bbb: 2, ccc: 1}
*/
let arr = ["aaa", "bbb", "aaa", "ccc", "bbb", "aaa"];

let obj = {};
for (let i = 0; i < arr.length; i++) {
    let item = arr[i];
    if (obj[item]) {
        obj[item] = obj[item] + 1;
    } else {
        obj[item] = 1;
    }
}
console.log("Result", obj);

let a = [1, 2, 3];
let b = a; // [1, 2, 3];
console.log(a === b);