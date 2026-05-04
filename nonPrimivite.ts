// array, object 
// ts - tuple, enum, any, unknown, never, void

let bazarList: string[] = ["rice", "dal", "oil", "salt"]

bazarList.push("sugar")

let mixedArr: (string | number)[] = ["egg", 2, "milk", 3, "bread", 4]

mixedArr.push("butter")
mixedArr.push(5)

let coordinates: [number, number] = [40.7128, -74.0060];

let couple: [string, number] = ["Alice", 30]


let NameAndRoll: [string, number] = ["Bob", 24];

// reference type - object

const user: {
    // organization: "DevEleven",
    readonly organization: string, // readonly property
    firstName: string,
    middleName?: string, // optional property
    lastName: string,
    isMarried: boolean
} = {
    organization: 'DevEleven',
    firstName: 'Shihab',
    lastName: 'Shahriar',
    isMarried: false
}

// user.organization = "DevEleven" // This will cause a compile-time error since organization is readonly

console.log(user);