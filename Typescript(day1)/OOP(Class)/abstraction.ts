abstract class Employees{
    constructor(protected firstName: string, private lastName: string){
    }
    abstract getSalary(): number;
    abstract getFirstName(): string;
    fullName(): string{
        return `${this.firstName} ${this.lastName}`;
    }
    compensationStatement(): string{
        return `${this.fullName()} makes ${this.getSalary()} a month.`;
    }
}

class fullTimeEmployees extends Employees{
    constructor(firstName: string, lastName: string ,protected rate: number, protected hours: number){
        super(firstName, lastName);

    }
    getSalary(): number {
        return this.rate * this.hours;
    }
    getFirstName(): string {
        return this.firstName;
    }
}
let emp2= new fullTimeEmployees('Farid','Nurichsan',120000,40)
console.log(emp2.getSalary());
console.log(emp2.compensationStatement());
console.log(emp2.getFirstName());


