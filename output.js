var a = 10;
let b = 20;

console.log(this.a); // 10
console.log(this.b); // undefined

// this is global scope. var is used for a so it is in global space and you can get value from this.a that is 10
// let is not the global scope so you won't get the value of b using this.b

// Guess below output
(function () {
    setTimeout(() => console.log(1), 2000);
    console.log(2);
    setTimeout(() => console.log(3), 0);
    console.log(4);

})();
//output 2,4,3,1

// Guess below output
setImmediate(() => {
    console.log('first');
});
Process.nextTick(() => {
    console.log('second');
})
console.log('third');

//output third second first

// ==================Guess below output ==================== //
for (var i = 0; i < 10; i++) {
    setTimeout((function (i) {
        console.log(i)
    })(i), 10)
}
//output 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0

console.log("Value of age is", age); //Value of age is undefined
var age = 20;
console.log("Value of age is", age); //Value of age is 20

// ==================Guess below output ==================== //
age = 100;
console.log("Value of age is", age); // ReferenceError: Cannot access 'age' before initialization
let age = 30;

// ==================Guess below output ==================== //
age = 100;
console.log("Value of age is", age); // Value of age is 100

var age = 30;

// ==================Guess below output ==================== //
x = 8;
console.log(x);
//const x; // this line is not supposed to be commented
// SyntaxError: Missing initializer in const declaration
// ==================Guess below output ==================== //
myFun(); // Second

var myFun = function () {
    console.log('First');
}
myFun(); // First

function myFun() {
    console.log('Second');
}
myFun(); // First

// ==================Guess below output ==================== //
var variable = 10;
(() => {
    console.log(variable); //10
    variable = 20;
    console.log(variable); //20
})();

console.log(variable); //20
var variable = 30;

// ==================Guess below output ==================== //
foo = 30;
console.log("FOO", foo); // 30

var foo = 100;
console.log("FOO", foo); //100

// ==================Guess below output ==================== //
var variable = 10;
(() => {
    foo = 100;
    console.log(variable); // 10
    var foo = 100;
    variable = 20;
    console.log(variable); // 20
})();//sum(1,2,3,4,5)

// ================== function to add numbers ==================== //
/*const sum = (...nums) => {
    var total = 0;
    for (let i = 0; i < nums.length; i++) {
        total = total + nums[i];

    }
    return total;
}
console.log(sum(1, 2, 3));*/

// ==================Guess below output ==================== //
a = { "a": 3, "b": 4 }
b = a
console.log(a, b)
a["a"] = 6
console.log(a, b)

// a = {"a":3, "b":4}
// b = {"a":3, "b":4}

// a = {"a":6, "b":4}
// b = {"a":6, "b":4}

// ==================Guess below output ==================== //
console.log(foo); // ReferenceError: foo is not defined
console.log(variable);
var variable = 30;

// ==================Guess below output ==================== //
console.log("A");
setTimeout(() => { console.log("B") });
['C', 'D'].forEach(x => {
    console.log(x)
});
console.log("E");
// A C D E B

// ==================Guess below output ==================== //
const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < a.length; i++) {
    setTimeout(() => { console.log(a[i]) }, 1000);
}
// After one second it will print 1 2 3 4 5 6 7 8 9 10

// ==================Guess below output ==================== //
for (var i = 1; i < 10; i++) {
    (function (i) {
        setTimeout(() => { console.log(i) }, i * 100);
    })(i);
}
/*
Delay output
0       0
100     1
200     2
300     3
400     4
500     5
600     6
700     7
800     8
900     9
*/

// ==================Guess below output ==================== //
let obj1 = { x: "Hello", y: "Bye" };
let obj2 = { x: "Hi", y: "Tata" };
let clonedObj = { ...obj1, ...obj2 };
console.log(clonedObj);
// { x: 'Hi', y: 'Tata' }

// ==================Guess below output ==================== //
const pr1 = new Promise((resolve, reject) => {
});
console.log(pr1);
// Promise { <pending> }

// ==================Guess below output ==================== //
console.log(0 == false);
console.log(0 === false);
//true
//false

// ==================Guess below output ==================== //
function saySomething(message) {
    return this.name + ' is ' + message;
}

var person4 = { name: "John" };
console.log(saySomething.call(person4));
// John is undefined
// The call method is used to invoke the saySomething function with a specific this context. Here, person4 is passed as the this context to saySomething.
// Inside the function, this refers to the context in which the function is called. 

// ==================Guess below output ==================== //
function sayHello() {
    return "Hello " + this.name;
}
var person = { name: "John" };
console.log(sayHello.call());
// Hello undefined
// The call method is used to invoke the sayHello function with a specific this context. However, in this case, call is invoked without any arguments, meaning the this context will be undefined

// ==================Guess below output ==================== //
function func() {
    var x = "Variable";
    function abc() {
        console.log(x);
    }
    return abc()
}
func();
// Variable
//  The inner function abc can access the variable x from its outer function func due to closures in JavaScript.
// The abc function is defined. It has access to the x variable due to JavaScript's lexical scoping rules. This means that abc can access variables defined in its outer scope (func).

// ==================Guess below output ==================== //
console.log("A" + "B" + 2); // AB2
// The code console.log("A" + "B" + 2); concatenates the strings "A" and "B", resulting in "AB", and then concatenates the result with the number 2, which is converted to the string "2". The final result is the string "AB2", which is printed to the console.

console.log("A" - "B" + 2); // NaN
// The code console.log("A" - "B" + 2); attempts to perform arithmetic operations on string values. Since subtraction is not defined for strings, JavaScript converts the strings to numbers, resulting in NaN. Any arithmetic operation involving NaN will also result in NaN. Thus, the final output is NaN

console.log("A" + "B" + "2"); // AB2
// The code console.log("A" + "B" + "2"); concatenates the strings "A", "B", and "2" in sequence. The result of the concatenation is the string "AB2", which is then printed to the console.

console.log(3 - "3"); //0
console.log(3 + "3"); //33
//Subtraction (-): When subtracting a string from a number, JavaScript coerces the string to a number and performs the arithmetic operation. Hence, 3 - "3" results in 0 because both operands are treated as numbers.
//Addition (+): When adding a number to a string, JavaScript coerces the number to
//a string and performs string concatenation. Hence, 3 + "3" results in "33" because both operands are treated as strings.

// ==================Guess below output ==================== //
// Example 1: Closures
function createCounter() {
    let count = 0;
    return function () {
        count += 1;
        return count;
    };
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

// Hoisting
console.log(a); // undefined
var a = 10;
console.log(a); // 10

// ==================Guess below output ==================== //
// let and var in Loops
for (let j = 0; j < 3; j++) {
    setTimeout(() => console.log(j), 100);
}
// 0,1,2

for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 100);
}
// 3, 3, 3

// ==================Guess below output ==================== //
// Asynchronous Operations
console.log('Start');

setTimeout(() => {
    console.log('Timeout');
}, 0);

Promise.resolve().then(() => {
    console.log('Promise');
});

console.log('End');
// Start End Promise Timeout

// ==================Guess below output ==================== //
// this Context
const person = {
    name: 'John',
    greet: function () {
        console.log(this.name);
    },
};

const greet = person.greet;
greet(); // undefined
person.greet(); // John

// Object Mutation
const a = {};
const d = a;
d.prop = 123;

console.log(a.prop); // 123

// Prototype Chain
function Person(name) {
    this.name = name;
}

Person.prototype.greet = function () {
    return 'Hello, ' + this.name;
};

const john = new Person('John');
console.log(john.greet()); // Hello, John

// Default Parameters
function greet(name = 'Guest') {
    return 'Hello, ' + name;
}

console.log(greet('John')); // Hello, John 
console.log(greet()); // Hello, Guest

// Destructuring Assignment
const obj = { x: 1, y: 2 };
const { x, y, z } = obj;

console.log(x); // 1
console.log(y); // 2
console.log(z); // undefined

// Rest and Spread Operators
const [p, ...q] = [1, 2, 3, 4];
console.log(p); // 1
console.log(q); // [ 2, 3, 4 ]

const r = [...q, p];
console.log(r); // [ 2, 3, 4, 1 ]

// Equality Comparison
console.log(0 == false); // true
console.log(0 === false); // false
console.log(null == undefined); // true
console.log(null === undefined); // false

// Array Methods
const arrNums = [1, 2, 3, 4, 5];
const result = arrNums.map(n => n * 2).filter(n => n > 5);

console.log(result); // [6, 8, 10]

// Event loop
console.log(1);

setTimeout(() => {
    console.log(2);
}, 0);

Promise.resolve().then(() => {
    console.log(3);
});

console.log(4);
// 1 4 3 2

// Function Scope and Closures
for (var i = 0; i < 3; i++) {
    (function (i) {
        setTimeout(() => {
            console.log(i);
        }, 100);
    })(i);
}
// 0 1 2

// Call, Apply, and Bind
const person = {
    name: 'Alice',
    greet: function () {
        console.log('Hello, ' + this.name);
    },
};

const greet = person.greet;

greet(); // Hello, undefined
greet.call(person); // Hello, Alice
greet.apply(person); // Hello, Alice

const boundGreet = greet.bind(person);
boundGreet(); // Hello, Alice



// ================== Write program ==================== //

// Find longest word in paragraph
function findLongestWord(str) {
    var strSplit = str.split(' ');
    var longestWord = '';
    for (let i = 0; i < strSplit.length; i++) {
        if (strSplit[i].length > longestWord.length) {
            longestWord = strSplit[i];
        }
    }
    return longestWord;
}
console.log(findLongestWord('My name is Ashvini'));
// Ashvini


// get the second last element of an array
let arr = ["a", "b", "c", "d", "e", "f"];
let len = arr.length;
console.log(arr[len - 2]);

// Remove duplicate elements from array
let arr = [1, 2, 3, 4, 4, 5, 1, 6];
let uniqueArr = [];
let seen = {};

arr.forEach((value) => {
    if (!seen[value]) {
        uniqueArr.push(value);
        seen[value] = true;
    }
});
console.log(uniqueArr); // Output: [1, 2, 3, 4, 5, 6]

console.log();
console.log(1 + "2");
console.log([..."sandeep"]);
console.log({} == {});
console.log({} == {});

function sum(val1, val2) {
    'use strict'
    val1 = 50;
    val2 = 20;
    return arguments[0] + arguments[1]
}
console.log(sum(10, 20)) // 30

foo(); // foo
bar(); // ReferenceError: Cannot access 'bar' before initialization
function foo() {
    console.log('foo')
}
const bar = () => {
    console.log('bar')
}

function getMultipleValues() {
    return 10;
    return 20;
}
let res = getMultipleValues();
console.log(res); // 10

function* getMultipleValues2() {
    yield 10;
    yield 20;
}
let res2 = getMultipleValues2();

console.log(res2.next().value); //10
console.log(res2.next().value); //20

const objPerson = {
    name: "Ashvini",
    age: 30
}
console.log(Object.entries(objPerson));
//output
/*[
    ["name" , "ashvini"],
    ["age" , 30],
]*/


