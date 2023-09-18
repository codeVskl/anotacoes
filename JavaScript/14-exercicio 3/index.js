const vaiSeHospedar = confirm("Seja bem vindo(a), aventureiro(a)! Gostaria de pagar R$ 50,00 para passar a noite na nossa ahospedagem?")

switch(vaiSeHospedar) {
    case true :
        alert("Ótimo! Nós temos as melhores camas de toda a região!")
        break
    case false:  
        alert("Que pena! Você parecia ser uma pessoa mais legal")
        break
    default:
        alert("Você escolheu uma opção?")
        break
}