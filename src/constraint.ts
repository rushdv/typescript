type Student = {id:number, name:string}

const addStudentToCourse = <T extends Student>(studentInfo: T) => {
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
const student4 = {
    hasWatch: true,
}

const result = addStudentToCourse(student1)
const result4 = addStudentToCourse(student2)
const result5 = addStudentToCourse(student3)
const result6 = addStudentToCourse(student4)
console.log(result)
console.log(result4)
console.log(result5)
console.log(result6)