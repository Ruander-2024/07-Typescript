"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hogwarts = void 0;
var Hogwarts = /** @class */ (function () {
    function Hogwarts() {
        this.students = [];
    }
    Hogwarts.prototype.addStudent = function (student) {
        this.students.push(student);
    };
    Hogwarts.prototype.getStudents = function () {
        return this.students;
    };
    Hogwarts.prototype.getImportantStudents = function () {
        return this.students
            .filter(function (student) { return student.house === "Gryffindor" || student.house === "Slytherin"; })
            .map(function (student) { return student.name; })
            .sort();
    };
    Hogwarts.prototype.doSortingHat = function () {
        var houses = {
            Gryffindor: [],
            Slytherin: [],
            Ravenclaw: [],
            Hufflepuff: []
        };
        for (var _i = 0, _a = this.students; _i < _a.length; _i++) {
            var student = _a[_i];
            houses[student.house].push(student);
        }
        return houses;
    };
    return Hogwarts;
}());
exports.Hogwarts = Hogwarts;
