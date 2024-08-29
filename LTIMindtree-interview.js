const greet = (name) => {
    let msg = `Hello ${name}`;
    return new Promise((resolve, reject) => {
        if (name) {
            resolve(msg);
        } else reject(new Error('error'));
    })

}

async function getResult() {
    const startTime = new Date();
    try {
        let result = await greet('Ashvini');
        console.log(result);
    } catch (error) {
        console.log(error.message);
    }
    const endTime = new Date();

    console.log(endTime - startTime);
}
//getResult();
/*function createClosure() {
    var counter = 0;
    return function () {
        counter++;
        return counter;
    }
}

const closure = createClosure();
console.log(closure());
console.log(closure());
console.log(closure());*/

/*console.log((function sum(a, b) {
    return a + b;
})(2, 3));*/

//console.log(eval('2*3+2')); // 8

//console.log('2' * 3 + '2'); // 62

//console.log(1 + + "2"); //3
//console.log(1 + "2"); // 12
//console.log(1 - "2"); // -1

/*arr = [1, "", null, true, false]
res = arr.filter(Boolean)
console.log(res); //[1, true]*/

const arr = [1, 2, 3];
//arr.push(4,5);
//arr.unshift(0)
arr.splice(2, 0, 'a', 'b');
console.log(arr); // [1, 2, 'a', 'b', 3]

const arr1 = [1, 2, 3, 4, 5, 6, 7];
const subArr = arr1.slice(1, 4); //it exclude end element
// [2, 3, 4]
//console.log(arr1);
//console.log(subArr);

a = [1, 2, 3, 4, 5, 6]
//console.log(++a[a.length - 1]); // 6 -1 = 5 => 6 => 7
//console.log(a[a.length - 1]++); // 6 -1 = 5 => 6 => 7 

let number = 0
console.log('==> ', number++); // 0
console.log(number); // 1
console.log(++number); //2
number //2
console.log('num', number);



/*greet('Ashvini')
    .then((result) => new pr(result))
    .then((result1))
    .catch((error) => console.log(error.message));*/

//Promise.all([pr1, pr2, pr3]).then((result) => console.log(result)).catch((error))

//Accenture interview outputs
console.log(1 + "2");
console.log([..."san"]);
console.log({} == {});
console.log({} == {});

const sum = (a = 10, b = 20) => {
    return a + b;
}

console.log(sum(null, 10)) // 10

const sum1 = (a = 10, b = 20) => {
    console.log(a) // 10
    return a + b;
}

console.log(sum1(undefined, 5)) // 15

console.log(n); // undefined
var n;
n = 10;

//console.log(m);
let m;
m = 10; // ReferenceError: Cannot access 'n' before initialization

const obj = { name: "ashvini", lname: "hyalij" };
delete obj.lname;
console.log(obj);