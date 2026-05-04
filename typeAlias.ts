type User = {
    id: number;
    name: {
        firstName: string;
        lastName: string;
    };
    gender: 'male' | 'female',
    contact: string | number;
    address: {
        division: string;
        city: string;
    }
};  



const user1: User = {
    id: 1234,
    name: {
        firstName: "Alice",
        lastName: "Smith"
    }, 
    gender: 'female',
    contact: "1234567890",
    address: {
        division: "Dhaka",
        city: "Dhaka"
    }   
}     

const user2: User = {
    id: 5678,
    name: {
        firstName: "Bob",
        lastName: "Johnson" 
    },
    gender: 'male',
    contact: 9876543210,
    address: {
        division: "Chittagong",
        city: "Chittagong"
    }
}

console.log(user1);
console.log(user2);



type IsAdmin = true;
const isAdmin: IsAdmin = true;

type Name = string;
const myName: Name = "Abdullah"

// function type alias

const add = (num1, num2) => num1 + num2;