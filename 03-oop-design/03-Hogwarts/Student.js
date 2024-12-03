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
exports.Hufflepuff = exports.Ravenclaw = exports.Slytherin = exports.Gryffindor = exports.Student = void 0;
// Alap osztály
var Student = /** @class */ (function () {
    function Student(name, house) {
        this.name = name;
        this.house = house;
    }
    Student.prototype.introduce = function () {
        return "Hi! I am ".concat(this.name, " from House ").concat(this.house);
    };
    return Student;
}());
exports.Student = Student;
// Gryffindor osztály
var Gryffindor = /** @class */ (function (_super) {
    __extends(Gryffindor, _super);
    function Gryffindor(name, bestFriend) {
        var _this = _super.call(this, name, "Gryffindor") || this;
        _this.bestFriend = bestFriend;
        return _this;
    }
    Gryffindor.prototype.introduce = function () {
        return "".concat(_super.prototype.introduce.call(this), ", and my best friend is ").concat(this.bestFriend);
    };
    return Gryffindor;
}(Student));
exports.Gryffindor = Gryffindor;
// Slytherin osztály
var Slytherin = /** @class */ (function (_super) {
    __extends(Slytherin, _super);
    function Slytherin(name, favoriteCurse) {
        var _this = _super.call(this, name, "Slytherin") || this;
        _this.favoriteCurse = favoriteCurse;
        return _this;
    }
    Slytherin.prototype.introduce = function () {
        return "".concat(_super.prototype.introduce.call(this), ", and my favourite curse is ").concat(this.favoriteCurse);
    };
    return Slytherin;
}(Student));
exports.Slytherin = Slytherin;
// Ravenclaw osztály
var Ravenclaw = /** @class */ (function (_super) {
    __extends(Ravenclaw, _super);
    function Ravenclaw(name, iq) {
        var _this = _super.call(this, name, "Ravenclaw") || this;
        _this.iq = iq;
        return _this;
    }
    Ravenclaw.prototype.introduce = function () {
        return "".concat(_super.prototype.introduce.call(this), ", and my IQ is ").concat(this.iq);
    };
    return Ravenclaw;
}(Student));
exports.Ravenclaw = Ravenclaw;
// Hufflepuff osztály
var Hufflepuff = /** @class */ (function (_super) {
    __extends(Hufflepuff, _super);
    function Hufflepuff(name) {
        return _super.call(this, name, "Hufflepuff") || this;
    }
    return Hufflepuff;
}(Student));
exports.Hufflepuff = Hufflepuff;
