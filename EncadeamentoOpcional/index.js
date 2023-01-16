const user = {
    name: "Vinicius",
    email: "ixxvinicius@gmail.com",
    friends: [{
        name: "Mary",
        address: {
            street: "Some Street",
            number: 45
        }
    }],
    age: 42,
    phone: {
        code: "+55",
        ddd: "11",
        number: "945211254"
    }


}

console.log(user.friends[0])

console.log(user?.friends[0]?.phone?.ddd)
