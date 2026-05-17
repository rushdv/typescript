// type guard
// in typeof operator, we can check the type of a variable
// in instanceof operator, we can check if an object is an instance of a class
// in in operator, we can check if a property exists in an object

// type guard is a way to narrow down the type of a variable
// it is used to check the type of a variable at runtime

type GuardedType = number | string;

const add = (num1: GuardedType, num2: GuardedType) => {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2;
    }
    else{
        return num1.toString() + num2.toString();
    }
};

add(5, 10); // Output: 15
add(5, "10"); // Output: 510
add("5", 10); // Output: 510
add("5", "10"); // Output: 510