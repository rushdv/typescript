type User = {
    name: string
    age: number
}




// interface : object type definition: array, function, class, object

interface IUser {
    name: string
    age: number
}

type Role = {
    role: 'admin' | 'user'
}

type UserWithRole = IUser & Role

interface IUserWithRole extends IUser {
    role: 'admin' | 'user'
}


const user1: IUserWithRole = {
    name: "Neo",
    age: 30,
    role: "admin"
}

const user2: IUser = {
    name: "Trinity",
    age: 28
}


type IsAdmin = boolean
const isAdmin: IsAdmin = false


// function type interface

type Add = (num1:number, num2: number) => number

interface IAdd {
    (num1: number, num2: number): number
}

const add: IAdd = (num1, num2) => num1 + num2

type Friends = string[]


interface IFriends {
    [index: number]: string
}

const friends: IFriends = ["Morpheus", "Trinity", "Cypher"]