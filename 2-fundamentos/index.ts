//Declaração da variável com tipo
let x: number = 10

//Não permite atribuir string
//x = 'teste'

let y: number = 17.36

console.log(typeof x)
console.log(typeof y.toPrecision(3))


let firstName: string = 'Danilo'
let lastName: string = 'Marques'

let fullName: string

fullName = `${firstName} ${lastName}`

console.log(fullName)


let result: boolean = true
let notResult: boolean = false
console.log(result && notResult)

/*Infenrencia e annotation*/

//Definição por annotation, deliberada
const ann: string = 'teste';

//O TS define 'automaticamente'
let inf = 'teste'
