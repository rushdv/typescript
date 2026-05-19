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


class GraduateStudent extends Student {
    thesisTitle: string;

    constructor(name: string, age: number, address: string, thesisTitle: string) {
        super(name, age, address);
        this.thesisTitle = thesisTitle;
    }

    research() {
        console.log(`${this.name} is researching on ${this.thesisTitle}.`);
    }
}

const GraduateStudent1 = new GraduateStudent("Bob", 25, "456 Elm St", "Machine Learning");
console.log(GraduateStudent1.name); // Output: Bob
GraduateStudent1.study(5); // Output: Bob is studying for 5 hours.
GraduateStudent1.research(); // Output: Bob is researching on Machine Learning.     
