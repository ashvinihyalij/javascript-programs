function getLargestNumber(arr) {
    let largestNum = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largestNum)
            largestNum = arr[i];
    }
    return largestNum;
}
console.log("Result", getLargestNumber([1, 5, 6, 8, 13]));