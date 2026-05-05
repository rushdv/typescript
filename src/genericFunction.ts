// generic function

// const  createArrayWithString = (value: string) => [value]
// const  createArrayWithNumber = (value: number) => [value]
// const createArrayWithUserObject = (value: { id: number; name: string }) => {
//     return [value]
// }

const createArrayWithGeneric = <T>(value: T): T[] => {
    return [value]
}

const arrString = createArrayWithGeneric("Hello")
const arrNumber = createArrayWithGeneric(42)
const arrUserObject = createArrayWithGeneric({ id: 1, name: "Neo" })



// tuple

const createArrayWithTuple = (param1: string, param2: string) => [
    param1,
    param2,
]

const createArrayTupleWithGeneric = <X, Y>(param1: X, param2: Y) => [param1, param2];

const result1 = createArrayTupleWithGeneric("Neo", 30)
const result2 = createArrayTupleWithGeneric("Trinity", true)
const result3 = createArrayTupleWithGeneric(1, { name: "Morpheus" })



//
const addStudentToCourse = <T>(studentInfo: T) => {
    return {
        course: "Computer Science",
        ...studentInfo,
    }
}
const student1 = {
    id: 1,
    name: "Neo",
    hasPen: true
}
const student2 = {
    id: 2,
    name: "Trinity",
    hasPen: false
}
const student3 = {
    id: 3,
    name: "Morpheus",
    hasPen: true,
    isMarried: true
}

const result = addStudentToCourse(student1)
const result4 = addStudentToCourse(student2)
const result5 = addStudentToCourse(student3)
console.log(result)
console.log(result4)
console.log(result5)