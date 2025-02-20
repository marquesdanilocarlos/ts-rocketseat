//Array
let numbers: number[] = [1,2,3]
numbers.push(5)

console.log(numbers[2])

//Não permite
//numbers = 'teste'
//numbers.push('teste')

const names: string[] = ['Danilo', 'Teste'];
console.log(names)

const results: Array<boolean> = [true, false, false, false, true]
results.push(true)

console.log(results)

//Any
const mixedArray: any[] = ['Danilo', 10, true, {}]
mixedArray.push({})
console.log(mixedArray)

//Tipagem de parâmetros

function sum(a: number, b: number) {
    return a+b
}

//Não permite
//console.log(sum('a', 'b'))

console.log(sum(10,8))

//Tipagem de retorno

function greeting(name: string): string {
    return `Hello ${name}!`
}

console.log(greeting('Danilo'))