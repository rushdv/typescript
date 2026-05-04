// union |

type userRole = "admin" | "user" | "guest";

const getDashboard = (role: userRole) => {
    if (role === "admin") {
        return("Welcome to the admin dashboard!");
    } 
    else if (role === "user") {
        return("Welcome to the user dashboard!");
    } 
    else {
        return("Welcome to the guest dashboard!");
    }
}

getDashboard("admin");


// intersection &

type Employee = {
    id: number;
    name: string;
    department: string;
}

type Manager = {
    id: number;
    name: string;
    teamSize: number;
}

type EmployeeManager = Employee & Manager;

const mrSmith: EmployeeManager = {
    id: 1,
    name: "Mr. Smith",
    department: "Sales",
    teamSize: 10
}