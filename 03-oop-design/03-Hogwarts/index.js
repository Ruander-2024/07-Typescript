"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Hogwarts_1 = require("./hogwarts");
var Student_1 = require("./student");
var hogwarts = new Hogwarts_1.Hogwarts();
// Diákok hozzáadása
hogwarts.addStudent(new Student_1.Gryffindor("Harry Potter", "Ron Weasley"));
hogwarts.addStudent(new Student_1.Slytherin("Draco Malfoy", "serpensortia"));
hogwarts.addStudent(new Student_1.Ravenclaw("Padma Patil", 124));
hogwarts.addStudent(new Student_1.Hufflepuff("Cedric Diggory"));
// Bemutatkozások
console.log("Introductions:");
hogwarts.getStudents().forEach(function (student) {
    console.log(student.introduce());
});
// Fontos diákok
console.log("\nImportant students:");
console.log(hogwarts.getImportantStudents());
// Házak szerinti csoportosítás
console.log("\nSorted by houses:");
var sortedHouses = hogwarts.doSortingHat();
for (var _i = 0, _a = Object.entries(sortedHouses); _i < _a.length; _i++) {
    var _b = _a[_i], house = _b[0], students = _b[1];
    console.log("".concat(house, ": ").concat(students.map(function (student) { return student.name; }).join(", ")));
}
