const user = {
    name: "Vinicius",
    email: "ixxvinicius@gmail.com",
    brothers: [{
        name: "Mary",
        name: "Nilton"
    }],
    age: 42,
    phone: {
        code: "+55",
        ddd: "11",
        number: "945211254"
    }


}

//Encadeamento Opcional
console.log(user?.brothers?.[0]?.phone?.ddd)

console.log(`Olá eu sou o ${user?.name} 
E meu E-mail para contato é: ${user?.email}`)
