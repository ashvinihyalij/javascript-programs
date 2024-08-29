/*
check if two strings contains same characters or not
*/
let str1 = "ashvini";
let str2 = "iahvsin";

function checkStrings(val1, val2) {
    let arr1 = val1.split('').sort().join('');
    let arr2 = val2.split('').sort().join('');

    if (arr1 === arr2) return true
    else return false;
}
console.log("Result", checkStrings(str1, str2));