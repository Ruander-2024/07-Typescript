import { Student } from "./student";

export class Hogwarts {
    private students: Student[] = [];

    addStudent(student: Student): void {
        this.students.push(student);
    }

    getStudents(): Student[] {
        return this.students;
    }

    getImportantStudents(): string[] {
        return this.students
            .filter(student => student.house === "Gryffindor" || student.house === "Slytherin")
            .map(student => student.name)
            .sort();
    }

    doSortingHat(): Record<string, Student[]> {
        const houses: Record<string, Student[]> = {
            Gryffindor: [],
            Slytherin: [],
            Ravenclaw: [],
            Hufflepuff: []
        };

        for (const student of this.students) {
            houses[student.house].push(student);
        }

        return houses;
    }
}
