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

    abstract makeNoise(): string;

    // classon belül érhető el
    // példányon keresztül nem érthető el
    static farmName: string = 'Joe Farmer Ranch';
}


console.log(FarmAnimal.farmName);

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

const tehen = new Cow('tarka', 'Boci', 'herbivore'); // Cow példány

// console.log(tehen.farmName);  A Cow class-on keresztül elérem a static farmName tulajdonságot, de a tehen példányon már nem

type FeedType = 'herbivore' | 'carnivore' | 'mixed';

interface Feeding {
    feed: FeedType;
}

interface EggProd{
    eggPerDay: number;
}

class Chicken extends FarmAnimal implements Feeding, EggProd {
    constructor(
        breed: string,
        public name: string,
        public feed: FeedType,
        public eggPerDay: number
    ){
        super(breed)
    }

    makeNoise(): string {
        return 'Kotkodács';
    }
}

const mcNuggets: Chicken = new Chicken('Kendermagos', 'McNuggets', 'mixed', 3);

console.log(mcNuggets.feed);

const myFarm: FarmAnimal[] = [tehen, mcNuggets]

console.log(myFarm);

const myFarm2: Chicken[] = [mcNuggets] // tehen példány nem megy bele

const myFarm3: Cow[] = [tehen, mcNuggets];

const myFarm4: Feeding[] = [mcNuggets, tehen];

const myFarm5: EggProd[] = [mcNuggets];

myFarm2.push(mcNuggets);
// myFarm2.push(tehen);