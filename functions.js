// function add
function add(a, b) {
    return a + b;
}

function display(x, y, callback) {
    let result = callback(x, y);
    console.log(result);
}
//display(4, 5, add);
display(5, 6, (a, b) => a + b);

// Function which returns a function as a result
// Higher order function returns a function as a result
function createAdder(number) {
    return function add(value) {
        return number + value;
    }
}

const addFive = createAdder(5);
const res = addFive(2);
console.log(res);

// impure function
// When you call the same function with same argument
// every time it produces different result
let total = 0;
function addMe(number) {
    total += number;
    return total;
}
console.log(addMe(5));
console.log(addMe(5));