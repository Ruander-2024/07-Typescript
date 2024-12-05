import { Aquarium } from "./aquarium";
import { Clownfish,  Tang, Kong} from "./fish";

const csipkejozsika: Clownfish = new Clownfish(
    'Csipkejózsika',
    3,
    'sárga',
    false, 
    'zöld'
)

const Tanker: Tang = new Tang(
    'Tanker',
    2,
    'Kék',
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
myAquarium.addFish(Tanker);
myAquarium.addFish(ficanka);


console.log(myAquarium.getStatus());
myAquarium.feed(10);
console.log(myAquarium);

myAquarium.removeFish();
console.log(myAquarium);

console.log(myAquarium.getStatus());