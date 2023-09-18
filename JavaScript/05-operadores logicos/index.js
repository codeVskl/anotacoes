/*
    == ---- igual ---- a == b ---- verdadeiro se a for igual a b
    === ---- idêntico ---- a === b ---- verdadeiro se a for idẽntico a b
    != ---- diferente ---- a != b ---- verdadeiro se a for diferente a b
    !== ---- não idẽntico ---- a !== b ---- verdadeiro se o a não for idẽntico a b
    < ---- menor que ---- a < b ---- verdadeiro quando a for menor que b
    <= ---- menor igual que ---- a <= b ---- verdadeiro quando a for menor ou igual a b
    > ---- maior que ---- a > b ---- verdadeiro quando a for maior que b
    >= ---- maior igual que ---- a >= b ---- verdadeiro quando a for maior ou igual a b
*/

// const a = 3
// const b = 3

// console.log(a >= b)

const a = 2
const b = 2

console.log(a === b && a <= b)
// V e V = V
// V e F = F
// F e F = F

console.log(a === b || a <= b)
// V ou V = V
// V ou F = V
// F ou F = F

/*
NOT
*/

console.log(!(a === b)) //false

console.log(!(a < b)) //true