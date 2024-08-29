function getFactorial(num) {
    if (num === 0) {
        return 1;
    }
    let factorial = 1;
    for (let i = 1; i <= num; i++) {
        factorial *= i;
    }
    return factorial;
}

console.log(getFactorial(5));