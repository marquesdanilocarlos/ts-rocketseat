//Void

function withoutReturn(): void {
    console.log('Sem retorno!');

}

withoutReturn();

//Callback como argumento

function greeting(name: string): string {
    return `Olá ${name}!`;
}

function preGreeting(name: string, fn: (name: string) => string): void {
    console.log(`Preparando a função`);

    const greeting = fn(name);
    console.log(greeting);
}

preGreeting('Danilo', greeting);

//Generic function

function firstElement<T>(arr: T[]): T {
    return arr[0];
}

console.log(firstElement([1, 2, 3, 4, 5]));
console.log(firstElement(['a', 'b', 'c']));

/**
 * Não permite
 * console.log(firstElement('string'));
 */

function mergeObjects<U, T>(obj1: U, obj2: T) {
    return {
        ...obj1,
        ...obj2,
    };
}

const newObject = mergeObjects({name: "Danilo"}, {age: 33, job: "Programmer"});
console.log(newObject);

//Constraits
function biggestNumber<T extends number | string>(a: T, b: T): T {

    if (+a > +b) {
        return a;
    }

    if (+a < +b) {
        return b;
    }
}

console.log(biggestNumber(5,3));
console.log(biggestNumber("7","9"));

//Especificar tipo de argumento na chamada da função

function mergeArrays<T>(arr1: T[], arr2: T[]): T[] {
    return arr1.concat(arr2);
}

let mergedArray: (string|number)[] = mergeArrays<number|string>([1,2,3,4], ["teste", 'Danilo']);
console.log(mergedArray);

//Parâmetro default
function defaultSum(n: number, m: number = 10): number {
    return n+m;
}

console.log(defaultSum(5));

//Parâmetro Unknown

function doSomething(x: unknown): void {
    //Necessário checar o tipo
    if (Array.isArray(x)) {
        console.log(x[0]);
    }

}

doSomething(10);