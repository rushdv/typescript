// dynamically generalize

// type GenericArray<value> = Array<value>
type GenericArray<T> = Array<T>

// const friends : string[] = ["Morpheus", "Trinity", "Cypher"]
const friends: GenericArray<string> = ["Morpheus", "Trinity", "Cypher"]

// const roolNumbers: number[] = [1, 2, 3, 4, 5]
const rollNumbers: GenericArray<number> = [1, 2, 3, 4, 5]

// const isEligibleList: boolean[] = [true, false, true, true]
const isEligibleList: GenericArray<boolean> = [true, false, true, true]


const sqrFunction = (value: number) => {
    return value * value
}

sqrFunction(5)


type Coordinates<X, Y> = [X, Y]

const point1: Coordinates<number, number> = [10, 20]
const point2: Coordinates<string, string> = ["10", "20"]


type User = {
    name: string
    age: number
}

const userList: GenericArray<User> = [
    {
        name: "Neo",
        age: 30
    },
    {
        name: "Trinity",
        age: 28
    },
    {
        name: "Morpheus",
        age: 35
    }
]








