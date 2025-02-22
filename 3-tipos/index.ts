//Array
let numbers: number[] = [1, 2, 3]
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
    return a + b
}

//Não permite
//console.log(sum('a', 'b'))

console.log(sum(10, 8))

//Tipagem de retorno

function greeting(name: string): string {
    return `Hello ${name}!`
}

console.log(greeting('Danilo'))

//Função anonima

setTimeout(function () {
    //const sallary: number = 1000
    //console.log(parseFloat(sallary))
    //console.log(sallary.toFixed(2))
}, 2000)

//Tipagem em objetc literals

function passCordinates(coord: { x: number, y: number }): void {
    console.log(coord.x);
    console.log(coord.y);
}

//Não permite
//const coordObj = {x: 132, y: 'danilo'};
const coordObj = {x: 132, y: 421.96};


passCordinates(coordObj);

//Tipagem em argumentos com desestruturação
function passCordinatesDestructuring({x, y}: { x: number, y: number }): void {
    console.log(x);
    console.log(y);
}

//Não permite
//passCordinatesDestructuring({x: 132, y: 'Danilo'});
passCordinatesDestructuring({x: 69, y: 892});

//Argumentos opcionais
function showNumbers(a: number, b: number, c?: number): void {
    console.log(a);
    console.log(b);
    console.log(c);
}

showNumbers(12, 36);

//Validação de argumento opcional
function advancedGreeting(firstName: string, lastName?: string): string {
    if (lastName !== undefined) {
        return `Olá, ${firstName} ${lastName}!`;
    }

    return `Olá, ${firstName}`;
}

const advanced = advancedGreeting('Danilo', 'Marques');
console.log(advanced);

//Union types

function showBalance(balance: string | number): string {
    return `O saldo da conta é ${balance}`;
}

console.log(showBalance(421));
console.log(showBalance('Danilo'));

const arrayMixed: Array<number | string> = [1, 'Danilo', 125.36];

function showUserRole(role: boolean | string): string {
    if (typeof role === 'boolean') {
        return 'Usuário não aprovado';
    }

    return `A função do usuário é ${role}`;
}

console.log(showUserRole('Admin'));

//Type alias

type ID = string | number;

function showId(id: ID): void
{
    console.log(`O ID é: ${id}`);
}

showId('Danilo');
showId(10);

//Interfaces

interface Point {
    x: number,
    y: number,
    z: number
}

function showCoords({x, y, z}: Point): void {
    console.log(x);
    console.log(y);
    console.log(z);
}

const coordObject: Point = {
    x: 1234,
    y: 754,
    z: 100
};

showCoords(coordObject);

//Interface X Type Alias

//A interface pode sofrer alterações...
interface Person {
    name: string
}

interface Person {
    age: number
}

const somePerson: Person = {name: 'Danilão', age: 33};
console.log(somePerson);

//... o type não.
type PersonType = {
    name: string
}

/*
Não permite:

type PersonType = {
    age: number
} */

//Literal types
let test: "testando";

//Não pode
//test = 'Danilo'
test = "testando";

function showDirection(direction: "left" | "right" | "center"): void {
    console.log(direction);
}
//Não pode
//showDirection("top");
showDirection("left");
