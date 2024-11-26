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

console.table('--Jane--');
console.table(user1.department);
console.table(user1.company);
user1.department = 'FE-IT'
console.table(user1);

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

console.table(FarmAnimal.farmName)

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

interface EggProd{
    eggPerDay : number;
}

class Chicken extends FarmAnimal implements Feeding, EggProd{
    constructor (
        breed: string,
        public name: string,
        public feed: FeedType,
        public eggPerDay: number
    ){
        super(breed)
    }
    makeNoise(): string{
        return 'Kot-kot-kot';
    }
}

const mcNuggets: Chicken = new Chicken('Kendermagos', 'Mcnuggets', 'mixed', 3)
const riska: Cow = new Cow('Tarka', 'Riska','carnivore' )


console.table(mcNuggets.feed)

const myFarm2: Chicken[] = [mcNuggets]
const myFarm3: Cow[] = [mcNuggets, riska]
const myFarm4: Feeding[] = [mcNuggets, riska]
const myFarm5: EggProd[] = [mcNuggets]

