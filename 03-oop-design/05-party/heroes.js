"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Warlock = exports.Bard = exports.Fighter = exports.Hero = void 0;
var Hero = /** @class */ (function () {
    function Hero(name, _money) {
        this.name = name;
        this._money = _money;
    }
    Hero.prototype.status = function () {
        return "".concat(this.name, " has ").concat(this._money, " gold.");
    };
    Hero.prototype.pay = function (amount) {
        this._money = this._money + amount; // this._money += amount;
    };
    Object.defineProperty(Hero.prototype, "money", {
        get: function () {
            return this._money;
        },
        enumerable: false,
        configurable: true
    });
    return Hero;
}());
exports.Hero = Hero;
var Fighter = /** @class */ (function (_super) {
    __extends(Fighter, _super);
    function Fighter(name, armorColor) {
        var _this = _super.call(this, name, 0) || this;
        _this.armorColor = armorColor;
        return _this;
    }
    Fighter.prototype.status = function () {
        return "".concat(this.name, " has ").concat(this._money, " gold and a/an ").concat(this.armorColor, " armor");
    };
    return Fighter;
}(Hero));
exports.Fighter = Fighter;
var Bard = /** @class */ (function (_super) {
    __extends(Bard, _super);
    function Bard(name) {
        return _super.call(this, name, 200) || this;
    }
    Bard.prototype.pay = function (amount) {
        this._money = this._money + Math.floor(amount * 0.8); // this._money += Math.floor(amount * 0.8);
    };
    return Bard;
}(Hero));
exports.Bard = Bard;
var Warlock = /** @class */ (function (_super) {
    __extends(Warlock, _super);
    function Warlock(name, demonName) {
        var _this = _super.call(this, name, 0) || this;
        _this.demonName = demonName;
        return _this;
    }
    Warlock.prototype.status = function () {
        return "".concat(this.name, " has ").concat(this._money, " gold and works for ").concat(this.demonName, ".");
    };
    Warlock.prototype.pay = function (amount) {
        this._money = this._money += Math.floor(amount * 1.1); // this._money += Math.floor(amount * 1.1)
    };
    return Warlock;
}(Hero));
exports.Warlock = Warlock;
