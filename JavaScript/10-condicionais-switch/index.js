//  switch(parametro) {
//      case valor1:
//          <bloco de declaracao>
//          break
//      case valor2:
//          <bloco de declaracao>
//          break
//  }

let nomeFilme = 'Vingadores'

switch(nomeFilme) {
    case 'Vingadores':
        console.log('É o filme dos Vingadores')
        break
    case 'Batman':  
        console.log('É o filme do Batman')
        break
    case 'Senhor dos Anéis':
        console.log('É o filme do Senhor dos Anéis')
        break
    default:
        console.log('É um filme qualquer')
        break
}

let avaliacao = 5

switch(avaliacao) {
    case 1:
    case 2:
        console.log('Filme ruim')
        break
    case 3:
    case 4:
        console.log('Filme mediano')
        break
    case 5:
        console.log('Filme exelente')
        break
    default:
        console.log('Nota invalida')
        break
}