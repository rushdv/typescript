// function 
// arrow function, normal function

function addNormal(num1: number, num2: number): number {
    return num1 + num2
}

const addArrow = (num1: number, num2: number): number => num1 + num2

addArrow(5, 10)


// object => function as a method

const poorUser = {
    name: "Abdullah",
    balance: 0,
    addBalance(value: number): number {
        const totalBalance = this.balance + value;
        return totalBalance;
    }
}

poorUser.addBalance(100000000)



const arr: number[] = [1,2,3]
const sqrArray = arr.map((element: number): number => element * element)