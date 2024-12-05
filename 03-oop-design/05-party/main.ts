import { Bard, Fighter, Warlock } from "./heroes";
import { Party } from "./party";

const arthur: Fighter = new Fighter(
    'Arthur the fat',
    'green'
);

const baszogep: Bard = new Bard(
    'Baszógép'
);

const hokuszpok: Warlock = new Warlock(
    'Hókuszpók',
    'Laothira'
);

const myParty: Party = new Party();

myParty.addHero(arthur);
myParty.addHero(baszogep);
myParty.addHero(hokuszpok);

console.log(myParty.getStatus());

myParty.getPayment(4800);
console.log(myParty.getStatus());

myParty.retireHeroes();
console.log(myParty.getStatus());

myParty.getPayment(200);
console.log(myParty.getStatus());

myParty.retireHeroes();
console.log(myParty.getStatus());
