// nullable types : null and unknown 

const getUser = (input: string | null) => {
    if (input) {
        console.log(`From Database: ${input}`);
    }
    else {
        console.log("From Database: All User");
    }
}

getUser("brave")
getUser(null)


// unknown type

const discountCalculator = (input: unknown) => {
    if (typeof input === "number") {
        const discountedPrice = input * 0.1
        console.log(discountedPrice)
    }
    else if (typeof input === "string") {
        const [discountedPrice] = input.split(" ");
        console.log(Number(discountedPrice)*0.1)
    }
    else {
        console.log("Invalid input")
    }
}
discountCalculator(100)
discountCalculator("100 tk")
discountCalculator(null)


// void type : no return value

const throwError = (message: string): never => {
    throw new Error(message)
}

throwError("This is an error message")