
interface Developer <T, X=null> {
    name: string
    salary: number
    device: {
        brand: string
        model: string
        releaseYear: number
    }
    smartWatch: T
    bike?: X
}

interface SmartWatch {
    heartRate: number
    stopWatch: boolean
}
interface AppleWatch {
    heartRate: number
    stopWatch: boolean
    callSupport: boolean
    AIFeatures: string[]
    gps: boolean
}

const poorDeveloper: Developer<SmartWatch> = {
    name: "John Doe",
    salary: 5000,
    device: {
        brand: "Dell",
        model: "Inspiron",
        releaseYear: 2015
    },
    smartWatch: {
        heartRate: 72,
        stopWatch: true
    },
    bike: null
}

const richDeveloper: Developer<AppleWatch, {
    brand: string
    model: string
}> = {
    name: "Jane Smith",
    salary: 15000,
    device: {
        brand: "Apple",
        model: "MacBook Pro",
        releaseYear: 2020
    },
    smartWatch: {
        heartRate: 68,
        stopWatch: true,
        callSupport: true,
        AIFeatures: ["Voice Assistant", "Health Monitoring"],
        gps: true
    },
    bike: {
        brand: "Trek",
        model: "Marlin 5"
    }
}    




const add = (num1: number, num2: number = 0) => num1 + num2

add(5, 10)
add(5)