function normalSum(a,b){
    return a + b
}
console.log(`Soma de uma função normal: ${normalSum(5,5)}`)


const ArrowFunction = (a,b) => {
    return a+b
}
console.log(`Arrow Function: ${ArrowFunction(9,9)}`)


const subArrow = (a,b) => a-b
console.log (`Subtração com arrowFunction: ${subArrow(9,8)}`)


const number = 20
const dobro = n => `O dobro do numero: ${n} é ${n*2}`
console.log(dobro(number))

