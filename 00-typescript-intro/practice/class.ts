class Employee {
    public readonly company: string = 'Garage Inc';

    constructor(
        public fullName: string,
        private _employeeId: number,
        public readonly dateOfBirth: string,
        protected _department: string
    ){}

    get employeeId(): number{
        return this._employeeId;
    }

    set employeeId(id: number){
        this._employeeId = id;
    }
}

const user: Employee = new Employee('John Doe', 3671, '1994-03-25', 'Finance');
console.log(user.employeeId);
user.employeeId = 9134;
console.log(user.employeeId);

class FullTimeEmployee extends Employee{
    constructor(
        fullName: string,
        employeeId: number,
        dateOfBirth: string,
        department: string,
        private salary: number
    ) {
        super(fullName, employeeId, dateOfBirth, department)
    }


    getPay(): number{
        return this.salary;
    }

    get department() {
        return this._department;
    }

    set department(dep: string) {
        this._department = dep
    }
}

const user1: FullTimeEmployee = new FullTimeEmployee('Jane Doe', 3671, '1989-06-01', 'Business', 5210);

console.log('--Jane--');
console.log(user1.department);
console.log(user1.company);
user1.department = 'FE-IT'
console.log(user1);

// Abstract osztály
// nem példányosítható

// gyüjtőfogalom, belőle le lehet származni

abstract class FarmAnimal {
    constructor(
        public breed: string
    ){}

    abstract makeNoise(): string

    // classon belül érhető el
    // példányon keresztül nem érthető el
    static farmName: string = 'Joe Farmer Ranch';
}

class Cow extends FarmAnimal implements Feeding{
    constructor(
        breed: string,
        public name: string,
        public feed: FeedType
    ){
        super(breed)
    }

    makeNoise(): string{
        return 'Muuuuuuuuuuuu';
    }
}

type FeedType = 'herbivore' | 'carnivore' | 'mixed';

interface Feeding {
    feed: FeedType    

}