const simpleMedia = () => {

    let i = 0
    let N = parseInt(prompt("Deseja obter a média simples de quantas notas ?"))
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

let SM = simpleMedia()

alert(`Média Simples = ${SM}`)

const MediaPon = () =>{

    let N = parseInt(prompt("Deseja obter a média ponderada de quantas notas ?"))
    let i = 0
    let grades
    let p 
    let totG = 0
    let totP = 0 
    
    for(i=0;i<N;i++){
        grades = parseFloat(prompt(`Digite a ${i+1}° Nota`))
        p = parseInt (prompt(`Digite o peso da nota`))
        totG += grades * p
        totP += p
    }
    return totG / totP
}

const MediaP = MediaPon()

alert(MediaP)





