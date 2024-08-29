function getLongestWord(sentence) {
    let longestWord = '';
    let arr = sentence.split(" ");

    for (let i = 0; i < arr.length; i++) {

        if (longestWord.length < arr[i].length) {
            longestWord = arr[i];
        }
    }
    return longestWord;
}

console.log(getLongestWord('I am Ashvini a developer'));