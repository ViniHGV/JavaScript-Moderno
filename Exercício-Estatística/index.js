const simpleMedia = () => {

    let i = 0
    let N = parseInt(prompt("Deseja obter a média de quantas notas ?"))
    let grades  
    let Tot = 0 
    while (i<N)
    {
        grades =  parseFloat (prompt(`Digite a ${i+1}° Nota`))
        Tot += grades
        i++
    }
    
    return Tot / i
}

//const Name = prompt("Digite o nome do aluno:")

let SM = simpleMedia()

alert(`Média = ${SM}`)

const MediaPon = () =>{

    let 

}





