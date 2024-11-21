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
}