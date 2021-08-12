const Employee = require('./employee');

class Engineer extends Employee {
    constructor (name, id, email) {
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
    getGithub() {
        console.log(this.Github);
    }
    getRole() {
        console.log("engineer");
        return;
    }
}

const engineer = new Engineer(`${this.name}`, 8, `${this.email}`, `${this.Github}`);

engineer.getName();
engineer.getId();
engineer.getEmail();
engineer.getGithub();
engineer.getRole();