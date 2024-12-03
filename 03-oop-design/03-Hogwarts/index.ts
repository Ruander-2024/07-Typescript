import { Hogwarts } from "./hogwarts";
import { Gryffindor, Slytherin, Ravenclaw, Hufflepuff } from "./student";

const hogwarts = new Hogwarts();

// Diákok hozzáadása
hogwarts.addStudent(new Gryffindor("Harry Potter", "Ron Weasley"));
hogwarts.addStudent(new Slytherin("Draco Malfoy", "serpensortia"));
hogwarts.addStudent(new Ravenclaw("Padma Patil", 124));
hogwarts.addStudent(new Hufflepuff("Cedric Diggory"));

// Bemutatkozások
console.log("Introductions:");
hogwarts.getStudents().forEach(student => {
    console.log(student.introduce());
});

// Fontos diákok
console.log("\nImportant students:");
console.log(hogwarts.getImportantStudents());

// Házak szerinti csoportosítás
console.log("\nSorted by houses:");
const sortedHouses = hogwarts.doSortingHat();
for (const [house, students] of Object.entries(sortedHouses)) {
    console.log(`${house}: ${students.map(student => student.name).join(", ")}`);
}
