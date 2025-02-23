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