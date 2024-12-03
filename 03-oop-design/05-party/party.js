"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Party = void 0;
var Party = /** @class */ (function () {
    function Party() {
        this.heroes = [];
    }
    Party.prototype.addHero = function (hero) {
        this.heroes.push(hero);
    };
    Party.prototype.retireHeroes = function () {
        if (this.heroes.length > 0) {
            this.heroes = this.heroes.filter(function (hero) { return hero.money < 5000; });
        }
    };
    Party.prototype.getPayment = function (amount) {
        if (this.heroes.length > 0) {
            this.heroes.forEach(function (hero) { return hero.pay(amount); });
        }
    };
    return Party;
}());
exports.Party = Party;
