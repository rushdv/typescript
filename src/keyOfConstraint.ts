// keyof : type operator that takes an object type and produces a string or numeric literal union of its keys.

type richPeoplesVehicles = {
    car: string
    bike: string
    yacht: string
}

type myVehicle2 = keyof richPeoplesVehicles

const myVehicle: myVehicle2 = "car"


type User = {
    id: number
    name: string
    address: {
        city: string
    }
}

const user: User = {
    id: 1,
    name: "Neo",
    address: {
        city: "Zion",
    }
}

// const myId = user.id
const myId = user["id"]
const myName = user["name"]
const myCity = user["address"]["city"]

// console.log(myId)
// console.log(myName)
// console.log(myCity)

const getPropertyFromObject = (obj: User, key: keyof User) => {
    return obj[key]
}

const result = getPropertyFromObject(user, "id")
const result2 = getPropertyFromObject(user, "name")
const result3 = getPropertyFromObject(user, "address")

console.log(result)
console.log(result2)
console.log(result3)