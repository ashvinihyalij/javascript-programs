let arr = [1, 2, 3, 4, 5, 4];
const len = arr.length;
let revArr = [];
for (i = len - 1; i >= 0; i--) {
    revArr.push(arr[i]);
}
console.log(revArr);