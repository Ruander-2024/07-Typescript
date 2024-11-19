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
