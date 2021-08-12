const Employee = require('./employee');

class Manager extends Employee {
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
}

const manager = new Manager(`${this.name}`, 10, `${this.email}`);

 manager.getName();
 manager.getId();
 manager.getEmail();
  
