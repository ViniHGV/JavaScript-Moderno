const user = {
    name: "Vinicius",
    email: "ixxvinicius@gmail.com",
    brothers: [
        "Mary",
        "Nilton",
        "Enzo"
    ],
    
    girlfriend: {
        name:"Bruna"
    },
    age: 42,
    phone: {
        code: "+55",
        ddd: "11",
        number: "945211254"
    }


}

//Encadeamento Opcional
console.log(user?.brothers?.[0]?.phone?.ddd)

console.log(`Hi my name is ${user?.name} 
My E-mail for contact: ${user?.email}
My brothers ${user?.brothers}
My Girlfriend: ${user?.girlfriend?.name}`)
