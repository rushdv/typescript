// object destructuring
// array destructuring


const user = {
    name: {
            firstName: "Alice",
            lastName: "Smith"
        },
    age: 30,
    email: "alice@example.com",
    gender: "male",
    favoriteColors: ["blue"]
}

// const favouriteColor = user.favoriteColors[0]
// const middleName = user.name.middleName

const { favoriteColors : myFavoriteColors } = user;

console.log(myFavoriteColors) // This will log the 
// 
const friends = ["Alice", "Bob", "Charlie"]
const [, bestFriend, C] = friends;
console.log(bestFriend)