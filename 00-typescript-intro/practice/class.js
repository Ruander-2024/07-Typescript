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
var Employee = /** @class */ (function () {
    function Employee(fullName, _employeeId, dateOfBirth, _department) {
        this.fullName = fullName;
        this._employeeId = _employeeId;
        this.dateOfBirth = dateOfBirth;
        this._department = _department;
        this.company = 'Garage Inc';
    }
    Object.defineProperty(Employee.prototype, "employeeId", {
        get: function () {
            return this._employeeId;
        },
        set: function (id) {
            this._employeeId = id;
        },
        enumerable: false,
        configurable: true
    });
    return Employee;
}());
var user = new Employee('John Doe', 3671, '1994-03-25', 'Finance');
console.log(user.employeeId);
user.employeeId = 9134;
console.log(user.employeeId);
var FullTimeEmployee = /** @class */ (function (_super) {
    __extends(FullTimeEmployee, _super);
    function FullTimeEmployee(fullName, employeeId, dateOfBirth, department, salary) {
        var _this = _super.call(this, fullName, employeeId, dateOfBirth, department) || this;
        _this.salary = salary;
        return _this;
    }
    FullTimeEmployee.prototype.getPay = function () {
        return this.salary;
    };
    Object.defineProperty(FullTimeEmployee.prototype, "department", {
        get: function () {
            return this._department;
        },
        set: function (dep) {
            this._department = dep;
        },
        enumerable: false,
        configurable: true
    });
    return FullTimeEmployee;
}(Employee));
var user1 = new FullTimeEmployee('Jane Doe', 3671, '1989-06-01', 'Business', 5210);
console.log('--Jane--');
console.log(user1.department);
console.log(user1.company);
user1.department = 'FE-IT';
console.log(user1);
