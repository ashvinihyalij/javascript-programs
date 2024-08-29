/* Write a JavaScript program that takes a number, adds its digits together repeatedly
until a single-digit number is obtained, and outputs the result. 
5443 => 16 => 7
*/

function addDigits(num) {
    let arr = num.toString().split('');
    let sum = arr.reduce((acc, digit) => acc + parseInt(digit), 0);
    return sum < 10 ? sum : addDigits(sum);
}

console.log(addDigits(5443));