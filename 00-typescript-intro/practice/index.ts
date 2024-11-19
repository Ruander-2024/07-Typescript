//* Type annotation
// normal comment
//! Not for sale
// TODO
//? rghthtzh

//* npm i typescript -g === npm install typescript -g => Typescript telepítése
//* Typescript fordítása Javascriptre => tsc index.ts --watch (saját mappában, folyamatos figyelés) 

let age: number = 25; // Az 'age' változó number típusú
// age = 'huszonöt'; // Valós idejű hiba, mert nem szám 

class Person{
    name: string
    constructor(name: string){
        this.name = name;
    }
    greet() {
        console.log(`Hello, ${this.name}`);
    }
}

interface Product{
    id: number;
    name: string;
    price: number;
    vip?: boolean;
}

const item: Product = {
    id: 1,
    name: 'laptop',
    price: 300000,
    vip: undefined
};

const item2: Product = {
    id: 2,
    name: 'telefon',
    price: 170000,
}

//! any típust ne használj
// let thing : any = 'hello';
// thing = 1;
// thing();

// Type inference - tipusfelismerés

let myNumber = 123;
// myNumber = 'string'

function add(x: number, y: number){
    return x + y;
}

console.log(add(2, 3));
// console.log(add('2', 3));

function greeter(person: string = 'Stranger'): string{
    return `Hi there ${person}`;
}

console.log(greeter());
console.log(greeter('Peti'));

function greeterNum(person: string = 'Stranger'): number{
    return person.length;
}

console.log(greeterNum());
console.log(greeterNum('Peti'));

function random(num: number): number | string {
    if(Math.random() < 0.5){
        return num.toString();
    }
    else{
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

const inactiveUsers: [] = [];

// inactiveUsers.push('Zsuszi');

const activeUsers: string[] = ['Laci'];
// activeUsers.push(34);
activeUsers.push('34');
activeUsers.push('Zsuszi');

console.log(activeUsers);

const lotteryNums: Array<number> = [11, 35, 6, 44, 28];

// 2D

const board: string[][] = [
    ['X', 'O'],
    ['O', 'X'],
]

console.log(board);

// Union types - vagylagos megjelölés

let something: string | number = 3;
something = '3';

let stuffArray: string | number[] = [2, 3]
stuffArray = 'something'

let stuffArray2: (string | number)[] = ['2', 3]

let otherStuffArray: string[] | number[] = ['2', '3']
otherStuffArray = [2, 3]

function calcTax(price: string | number, tax: number): number{
    if(typeof price === 'string'){
        price = parseFloat(price.replace('HUF', ''));
    }
    return price * tax
}

console.log(calcTax('2040', 1.33));

