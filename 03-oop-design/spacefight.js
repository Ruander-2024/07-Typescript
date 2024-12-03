var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Spaceship osztály: 
var SpaceshipBase = /** @class */ (function () {
    function SpaceshipBase(name, maxDurability, firepower) {
        this.name = name;
        this.maxDurability = maxDurability;
        this.firepower = firepower;
        this.currentDurability = maxDurability;
    }
    SpaceshipBase.prototype.status = function () {
        return "".concat(this.name, ", durability: ").concat(this.currentDurability, "/").concat(this.maxDurability, ", firepower: ").concat(this.firepower);
    };
    SpaceshipBase.prototype.repair = function (repairPercentage) {
        var repairAmount = Math.floor((this.maxDurability * repairPercentage) / 100);
        this.currentDurability = Math.min(this.maxDurability, this.currentDurability + repairAmount);
    };
    SpaceshipBase.prototype.getDamage = function (damage) {
        this.currentDurability = Math.max(0, this.currentDurability - damage);
    };
    return SpaceshipBase;
}());
// Speciális űrhajók: 
// SpaceFighter:
var SpaceFighter = /** @class */ (function (_super) {
    __extends(SpaceFighter, _super);
    function SpaceFighter(name, firepower) {
        return _super.call(this, name, 100, firepower) || this;
    }
    return SpaceFighter;
}(SpaceshipBase));
// Avenger:
var Avenger = /** @class */ (function (_super) {
    __extends(Avenger, _super);
    function Avenger(name, firepower, ionTorpedo) {
        var _this = _super.call(this, name, 150, firepower) || this;
        _this.ionTorpedo = ionTorpedo;
        return _this;
    }
    Avenger.prototype.status = function () {
        return "".concat(_super.prototype.status.call(this), ", ion torpedo: ").concat(this.ionTorpedo);
    };
    return Avenger;
}(SpaceshipBase));
// Battlecruiser:
var Battlecruiser = /** @class */ (function (_super) {
    __extends(Battlecruiser, _super);
    function Battlecruiser(name, firepower) {
        return _super.call(this, name, 230, firepower) || this;
    }
    Battlecruiser.prototype.getDamage = function (damage) {
        var reducedDamage = Math.floor(damage * 0.8);
        _super.prototype.getDamage.call(this, reducedDamage);
    };
    Battlecruiser.prototype.repair = function (repairPercentage) {
        var effectiveRepairPercentage = Math.max(10, repairPercentage - 10);
        _super.prototype.repair.call(this, effectiveRepairPercentage);
    };
    return Battlecruiser;
}(SpaceshipBase));
// Űrállomás: 
var SpaceStation = /** @class */ (function () {
    function SpaceStation() {
        this.fleet = [];
    }
    SpaceStation.prototype.addShip = function (ship) {
        this.fleet.push(ship);
    };
    SpaceStation.prototype.repairShips = function (repairPercentage) {
        this.fleet.forEach(function (ship) { return ship.repair(repairPercentage); });
    };
    SpaceStation.prototype.spacefight = function (damage) {
        var totalFirepower = this.fleet.reduce(function (sum, ship) { return sum + ship.firepower; }, 0);
        this.fleet.forEach(function (ship) { return ship.getDamage(damage); });
        this.fleet = this.fleet.filter(function (ship) { return ship.currentDurability > 0; });
        return totalFirepower;
    };
    SpaceStation.prototype.getStatus = function () {
        return this.fleet.map(function (ship) { return ship.status(); });
    };
    return SpaceStation;
}());
var station = new SpaceStation();
var fighter = new SpaceFighter("SS Balthar", 40);
var avenger = new Avenger("SS Alexander", 50, "Eyepoker");
var cruiser = new Battlecruiser("MSC Galactus", 80);
station.addShip(fighter);
station.addShip(avenger);
station.addShip(cruiser);
console.table(station.getStatus());
station.repairShips(20);
console.table(station.getStatus());
var damageDealt = station.spacefight(30);
console.table("Total firepower: ".concat(damageDealt));
console.table(station.getStatus());
