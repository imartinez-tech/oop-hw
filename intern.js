const Employee = require('./employee');

class Intern extends Employee {
    constructor(name, id, email) {
        super(name, id, email); 
    }
    getName() {
        console.log(this.name);
    }
    getId() {
        console.log(this.id);
    }
    getEmail() {
        console.log(this.email);
    }
    getSchool() {
        console.log(this.school);
    }
    getRole() {
        console.log("intern");
        return;
    }
}

const intern = new Intern(`${this.name}`, 1, `${this.email}`, `${this.school}`);

intern.getName();
intern.getId();
intern.getEmail();
intern.getSchool();
intern.getRole();