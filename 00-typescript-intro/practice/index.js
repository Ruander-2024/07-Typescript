//* Type annotation
// normal comment
//! Not for sale
// TODO
//? rghthtzh
//* npm i typescript -g === npm install typescript -g => Typescript telepítése
//* Typescript fordítása Javascriptre => tsc index.ts --watch (saját mappában, folyamatos figyelés) 
var age = 25; // Az 'age' változó number típusú
// age = 'huszonöt'; // Valós idejű hiba, mert nem szám 
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.greet = function () {
        console.log("Hello, ".concat(this.name));
    };
    return Person;
}());
var item = {
    id: 1,
    name: 'laptop',
    price: 300000,
    vip: undefined
};
var item2 = {
    id: 2,
    name: 'telefon',
    price: 170000,
};
//! any típust ne használj
// let thing : any = 'hello';
// thing = 1;
// thing();
// Type inference - tipusfelismerés
var myNumber = 123;
// myNumber = 'string'
function add(x, y) {
    return x + y;
}
console.log(add(2, 3));
// console.log(add('2', 3));
function greeter(person) {
    if (person === void 0) { person = 'Stranger'; }
    return "Hi there ".concat(person);
}
console.log(greeter());
console.log(greeter('Peti'));
function greeterNum(person) {
    if (person === void 0) { person = 'Stranger'; }
    return person.length;
}
console.log(greeterNum());
console.log(greeterNum('Peti'));
function random(num) {
    if (Math.random() < 0.5) {
        return num.toString();
    }
    else {
        return num;
    }
}
console.log('--- Random function ---');
console.log(random(1));
console.log(random(1));
console.log(random(1));
console.log(random(1));
console.log(random(1));
console.log(random(1));
console.log(random(1));
console.log(random(1));
console.log('--- Random function ---');
// Type with Array
var inactiveUsers = [];
// inactiveUsers.push('Zsuszi');
var activeUsers = ['Laci'];
// activeUsers.push(34);
activeUsers.push('34');
activeUsers.push('Zsuszi');
console.log(activeUsers);
var lotteryNums = [11, 35, 6, 44, 28];
