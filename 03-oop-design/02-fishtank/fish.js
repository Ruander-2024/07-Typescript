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
exports.Kong = exports.Tang = exports.Clownfish = exports.Fish = void 0;
var Fish = /** @class */ (function () {
    function Fish(_name, _weight, _color, _stml) {
        this._name = _name;
        this._weight = _weight;
        this._color = _color;
        this._stml = _stml;
    }
    Fish.prototype.status = function () {
        return "".concat(this._name, ", weight: ").concat(this._weight, ", color: ").concat(this._color, ", short-term memory loss: ").concat(this._stml);
    };
    Fish.prototype.feed = function (amount) {
        this._weight = this._weight + amount; // this._weight += amount
    };
    Object.defineProperty(Fish.prototype, "weight", {
        get: function () {
            return this._weight;
        },
        enumerable: false,
        configurable: true
    });
    return Fish;
}());
exports.Fish = Fish;
var Clownfish = /** @class */ (function (_super) {
    __extends(Clownfish, _super);
    function Clownfish(name, weight, color, stml, stripeColor) {
        var _this = _super.call(this, name, weight, color, stml) || this;
        _this.stripeColor = stripeColor;
        return _this;
    }
    Clownfish.prototype.status = function () {
        return "".concat(this._name, ", weight: ").concat(this._weight, ", color: ").concat(this._color, "-").concat(this.stripeColor, ", short-term memory loss: ").concat(this._stml);
    };
    return Clownfish;
}(Fish));
exports.Clownfish = Clownfish;
var Tang = /** @class */ (function (_super) {
    __extends(Tang, _super);
    function Tang(name, weight, color, stml) {
        return _super.call(this, name, weight, color, stml) || this;
    }
    return Tang;
}(Fish));
exports.Tang = Tang;
var Kong = /** @class */ (function (_super) {
    __extends(Kong, _super);
    function Kong(name, weight, color, stml) {
        return _super.call(this, name, weight, color, stml) || this;
    }
    Kong.prototype.feed = function () {
        this._weight = this._weight + 2; // this._weight += 2
    };
    return Kong;
}(Fish));
exports.Kong = Kong;
