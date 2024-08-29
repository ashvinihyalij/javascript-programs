//swap variable values without using third variable
var a = 10;
var b = 20;

a = a + b; // a becomes 30 (10 + 20)
b = a - b; // b becomes 10 (30 - 20)
a = a - b; // a becomes 20 (30 - 10)

console.log("a:", a); // a: 20
console.log("b:", b); // b: 10

var a = 'hello';
var b = 'world';

// Step 1: Concatenate both strings and assign to 'a'
a = a + b; // a becomes 'helloworld'

// Step 2: Extract the original value of 'b' from the concatenated string
b = a.substring(0, a.length - b.length); // b becomes 'hello'

// Step 3: Extract the original value of 'a' from the concatenated string
a = a.substring(b.length); // a becomes 'world'

console.log("a:", a); // a: 'world'
console.log("b:", b); // b: 'hello'