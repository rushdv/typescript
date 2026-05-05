// spread and rest operators

const friends = ["Alice", "Bob", "Charlie"];

const schoolFriends = ["David", "Eve", "Frank"];

const collegeFriends = ["Grace", "Heidi", "Ivan"];

friends.push(...schoolFriends)
friends.push(...collegeFriends)

console.log(friends);

// object spread operator

const user = { name: "Alice", phoneNumber: "1234567890" };

const otherInfo = { email: "alice@example.com", age: 30 };

const userInfo = { ...user, ...otherInfo };

console.log(userInfo);

// rest operator

const sendInvite = (...friends: string[]) => {
    friends.forEach((friend: string) => console.log(`Invitation sent to ${friend}`))

}

sendInvite("Alice", "Bob", "Charlie", "David", "Eve")