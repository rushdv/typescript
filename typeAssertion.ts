let anything: any

anything = "Neo"

const kgToGrams = (input: string | number) : string | number | undefined => {
    if (typeof input === "number") {
        return input * 1000;
    }
    else if (typeof input === "string") {
        const [value] = input.split(" ")
        return `Converted output is: ${Number(value) * 1000} grams`
    }
}

const result1 = kgToGrams(2) as number
console.log(result1)
const result2 = kgToGrams("2 kg") as string
console.log(result2)

type CustomError = {
    message: string
}

try {

}
catch (error) {
    console.log((error as CustomError).message)
}