"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aquarium = void 0;
var Aquarium = /** @class */ (function () {
    function Aquarium() {
        this.fishtank = [];
    }
    Aquarium.prototype.addFish = function (fish) {
        this.fishtank.push(fish);
    };
    Aquarium.prototype.feed = function (amount) {
        this.fishtank.forEach(function (fish) { return fish.feed(amount); });
    };
    Aquarium.prototype.removeFish = function () {
        this.fishtank = this.fishtank.filter(function (fish) { return fish.weight < 11; });
    };
    Aquarium.prototype.getStatus = function () {
        return this.fishtank.map(function (fish) { return fish.status(); });
    };
    return Aquarium;
}());
exports.Aquarium = Aquarium;
