// oop - class - object

// class Animal {
//     name: string
//     species: string
//     sound: string

//     constructor(name: string, species: string, sound: string) {
//         this.name = name
//         this.species = species
//         this.sound = sound
//     }

//     makeSound() {
//         console.log(`${this.name} the ${this.species} says ${this.sound}`)
//     }
// }


// parameter properties : which is a shorthand syntax for defining and initializing class properties in the constructor parameters.

class Animal {
    constructor(
        public name: string,
        public species: string,
        public sound: string
    ) {}

    makeSound() {
        console.log(`${this.name} the ${this.species} says ${this.sound}`)
    }
}



const dog = new Animal("Tommy", "Dog", "Woof")
const cat = new Animal("Kitty", "Cat", "Meow")
const cow = new Animal("MooMoo", "Cow", "Moo")

console.log(dog.name)
console.log(dog.species)
console.log(dog.sound)

cat.makeSound()