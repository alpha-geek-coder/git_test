// "use strict";

let name = "John";
let surname = "Doe";

console.log(name);
console.log(surname);

const pi = 3.14;

//pi = 10;
console.log(pi);

// Numbers
console.log("------Numbers-------");
console.log(23 + 97);
console.log((4 + 6 + 9) / 77);

let a = 10;
console.log(a);
a = 20;
console.log(a);
let b = 7 * a;
console.log(b);

const max = 57;
const actual = max - 13;
const percentage = actual / max;
console.log(percentage);

z = 10;
console.log(z);
let x = "10";
let y = "20";
console.log(x - y);

console.log(typeof (0.01));

x = 100 / "apple";
console.log(x);

console.log(2 / 0);
let myNumber = 32;
console.log (myNumber.toString(32));
console.log(myNumber.toString(16));
console.log(myNumber.toString(12));
console.log(myNumber.toString(10));
console.log(myNumber.toString(8));
console.log(myNumber.toString(2));

const myInt = 5;
const myFloat = 6.667;
myInt;
myFloat;


const prompt = require('prompt-sync')();
let userName = prompt("Enter User name: ");

if (userName == "Admin") {
    let pwd = prompt("Enter Password: ");

    if (pwd = 'TheMaster') {
        console.log("Welcome!");
    } else if (pwd == '' || pwd == null) {
        console.log("Cancelled");
    } else {
        console.log("Wrong Password");
    }
} else if (userName == "" || userName == null) {
    console.log("Cancelled");
} else {
    console.log("I don't know you");
}