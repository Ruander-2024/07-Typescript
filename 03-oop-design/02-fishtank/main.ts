import { Aquarium } from "./aquarium";
import { Clownfish, Tang, Kong } from "./fish";

const csipkejozsika: Clownfish = new Clownfish(
    'CsipkeJózsika',
    3,
    'sárga',
    false,
    'zöld'
);

const tanker: Tang = new Tang(
    'Tanker',
    2,
    'kék',
    true
);

const ficanka: Kong = new Kong(
    'Ficánka',
    7,
    'lila',
    false
);

const myAquarium: Aquarium = new Aquarium();

myAquarium.addFish(csipkejozsika);
myAquarium.addFish(tanker);
myAquarium.addFish(ficanka);

console.log(myAquarium.getStatus());
myAquarium.feed(10);
console.log(myAquarium);

myAquarium.removeFish();
console.log(myAquarium);

console.log(myAquarium.getStatus());
