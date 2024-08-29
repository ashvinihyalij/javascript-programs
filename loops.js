//BASIC FOR LOOP General way of iteration do any kind of iteration
console.log('------------Basic for loop------------');
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// FOR OF LOOP specific for array and object iteration
console.log('------------for of loop------------');
let arr = [1, 2, 3];
for (let val of arr) {
    console.log(val);
}

// FOR IN LOOP
console.log('------------for in loop------------');
let obj = {
    name: "Ashvini",
    age: 30,
    role: "SSE"
}
for (let key in obj) {
    console.log(obj[key]);
}

// forEach method
console.log('------------for each loop------------');
let array = [1, 2, 3, 4, 5];
array.forEach(function (item) {
    console.log(item)
});
const person = {
    name: "Aksha",
    age: 12
}
console.log(Object.values(person));
Object.values(person).forEach((item) => {
    console.log(item);
})
// WHILE
console.log('----------While------------');
let j = 0;
while (j < 5) {
    console.log(j);
    j++;
}

// DO WHILE
console.log('------------Do While------------');
let k = 0;
do {
    console.log(k);
    k++;
} while (k > 1)