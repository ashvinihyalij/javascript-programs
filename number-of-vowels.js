// count number of vowels in a string

function countVowels(str) {
    let vowels = ['a', 'i', 'o', 'e', 'u'];
    let obj = {};
    let arr = str.split('');
    for (let i = 0; i < arr.length; i++) {
        let item = arr[i].toLowerCase();
        if (vowels.indexOf(item) >= 0) {
            console.log(item);
            if (obj[item]) {
                obj[item] = obj[item] + 1;
            } else {
                obj[item] = 1;
            }
        }
    }
    return obj;
}

console.log(countVowels('AHello World!'));