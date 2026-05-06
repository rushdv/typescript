// mapped types : which is used to create new types based on existing types by applying a transformation to each property of the existing type.
// map

const arrayOfNumbers = [1, 2, 3, 4, 5]
const arraOfSrrings: string[] = ["1", "2", "3", "4", "5"]

const arrayOfStringsUsingMap: string[] = arrayOfNumbers.map((num) => num.toString())

console.log(arrayOfStringsUsingMap)

const user = {
    id: 222
}

type areaOfNumber = {
    height: number
    width: number
}

type height = areaOfNumber["height"]

// type areaOfString = {
//     height: string
//     width: string
// }

type areaOfString = {
    [key in "height" | "width"] : string
}

type areaOfBoolean = {
    [key in "height" | "width"] : boolean
}

type areaOfBool = {
    [key in keyof areaOfNumber] : boolean
}



type Area<T> = {
    [key in keyof T] : T[key]
}

const area1: Area<{ height: string; width: boolean }> = {
    height: "100",
    width: true
}