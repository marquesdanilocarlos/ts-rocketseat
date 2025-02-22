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

//Função anonima

setTimeout(function() {
    const sallary: number = 1000
    //console.log(parseFloat(sallary))
}, 2000)

//Tipagem em objetc literals

function passCordinates(coord: {x: number, y: number}): void {
    console.log(coord.x);
    console.log(coord.y);
}

//Não permite
//const coordObj = {x: 132, y: 'danilo'};
const coordObj = {x: 132, y: 421.96};


passCordinates(coordObj);

//Tipagem em argumentos com desestruturação
function passCordinatesDestructuring({x, y}: {x: number, y:number}): void {
    console.log(x);
    console.log(y);
}

//Não permite
//passCordinatesDestructuring({x: 132, y: 'Danilo'});
passCordinatesDestructuring({x: 69, y: 892});