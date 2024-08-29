/*setTimeout(function () {
    console.log('Ashvini will rock!');
}, 2000);

const intervalId = setInterval(function () {
    console.log('Yes! I will rock!');
}, 2000);

setTimeout(() => {
    clearInterval(intervalId);
    console.log('Cleared');
}, 10000);*/

const numbers = [1, 2, 3, 4, 5];
const double = numbers.map((num) => {
    return num * 2;
});

const sum = numbers.reduce((accum, val) => {
    return accum + val;
}, 0);
console.log(sum);

class person {
    constructor(name) {
        this.name = name;
    }
    sayHello() {
        console.log(`Hello ${this.name}`);
    }
}
const obj = new person('Ashvini');
obj.sayHello();

const myPromise = new Promise((resolve, reject) => {
    if (true) {
        resolve('success');
    } else {
        reject(new Error('Operation failed'));
    }
});
myPromise
    .then((result) => { console.log(result) })
    .catch((error) => console.log(error.message));

function outerfunction() {
    const outerVariable = 'outer scope';
    function innerfunction() {
        console.log(outerVariable);
    }
    return innerfunction;
}

const closure = outerfunction();
closure();

function createClosure() {
    let count = 0;
    return function () {
        count++;
        console.log(count);
    }
}

const closure1 = createClosure();
closure1();
closure1();
closure1();

function add(...numbers) {
    return numbers.reduce((accum, curr) => accum + curr, 0)
}
console.log(add(1, 2, 3, 4));

const fetchData = (callback) => {
    console.log('Data fetching...');
    setTimeout(() => {
        console.log('Data Fetched!');
        const error = null;
        const data = { name: "Ashvini" };
        callback(error, data);
    }, 2000)
}

const callbackFun = (error, data) => {
    if (error) {
        console.log('Error occured', error);
    } else {
        console.log('Data received', data);
    }
}

fetchData(callbackFun);