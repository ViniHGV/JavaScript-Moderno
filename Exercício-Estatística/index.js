const simpleMedia = () => {
    let n1 = parseFloat (prompt ("Digite a  primeira nota:"))
    let n2 = parseFloat (prompt ("Digite a  segunda nota:"))
    let n3 = parseFloat (prompt ("Digite a  terceira nota:"))
    let n4 = parseFloat (prompt ("Digite a  quarta not10a:"))
    
    
    return ((n1 + n2 + n3 + n4) / 4)
}

const MediaPon = () =>{
    
}

const Name = prompt("Digite o nome do aluno:")
let SM = simpleMedia()

alert(`A Média do aluno ${Name} foi: ${SM}`)


