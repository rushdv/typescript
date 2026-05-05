// ? : ternary operator : decision making operator
// ?? : nullish coalescing operator : default value operator - null or undefined
// ?. : optional chaining operator : safe access operator

const eligibleForMarriage = (age: number) => {
    // if (age >= 21){
    //     console.log("You are eligible for marriage")
    // }
    // else {
    //     console.log("You are not eligible for marriage")
    // }

    const result = age >= 21 ? "You are eligible for marriage" : "You are not eligible for marriage"
    console.log(result)
}

eligibleForMarriage(20)



const userTheme = undefined
const selectedTheme = userTheme ?? "light theme"
console.log(selectedTheme)




const isAuthenticated = ""
const resultWithTernary = isAuthenticated ? isAuthenticated : "You are a guest"
const resultWithNullish = isAuthenticated ?? "You are a guest"

console.log({ resultWithTernary }, { resultWithNullish })



// optional chaining operator

const user: {
    address: {
        city: string
        town: string
        postalCode?: string
    }
} = {
    address: {
        city: "Dhaka",
        town: "Uttara",
    }
}

const postalCode = user?.address?.postalCode;
console.log(postalCode)