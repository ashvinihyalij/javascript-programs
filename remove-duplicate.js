let arr = [1, 2, 3, 4, 5, 4];
const len = arr.length;
let newArr = [];
for (let i = 0; i < len; i++) {
    if (!newArr.includes(arr[i])) {
        newArr.push(arr[i]);
    }
    /*if(newArr.indexOf(arr[i] === -1)){
        newArr.push(arr[i]);
    }*/
}
console.log(newArr);

/* Loop itteration methods */

arr.forEach((element) => {
    console.log(element)
});

for (let element of arr) {
    console.log(element);
}