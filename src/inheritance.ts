// inheritance 

class Student {
    name: string;
    age: number;
    address: string;
    
    constructor(name: string, age: number, address: string) {
        this.name = name;
        this.age = age;
        this.address = address;
    }

    study(numberOfHours: number){
        console.log(`${this.name} is studying for ${numberOfHours} hours.`);
    }
}

const Student1 = new Student("Alice", 20, "123 Main St");
console.log(Student1.name); // Output: Alice
Student1.study(7); // Output: Alice is studying for 2 hours.

