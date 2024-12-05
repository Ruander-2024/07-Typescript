"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var aquarium_1 = require("./aquarium");
var fish_1 = require("./fish");
var csipkejozsika = new fish_1.Clownfish('CsipkeJózsika', 3, 'sárga', false, 'zöld');
var tanker = new fish_1.Tang('Tanker', 2, 'kék', true);
var ficanka = new fish_1.Kong('Ficánka', 7, 'lila', false);
var myAquarium = new aquarium_1.Aquarium();
myAquarium.addFish(csipkejozsika);
myAquarium.addFish(tanker);
myAquarium.addFish(ficanka);
console.log(myAquarium.getStatus());
myAquarium.feed(10);
console.log(myAquarium);
myAquarium.removeFish();
console.log(myAquarium);
console.log(myAquarium.getStatus());
