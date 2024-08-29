function reverseString(str) {
    let reverse = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reverse += str[i];
    }
    return reverse;
}

function reverseString2(str) {
    return str.split('').reverse().join('');
}

//console.log(reverseString("Ashvini Hyalij"));
console.log(reverseString2("Ashvini Hyalij"));