/**
 * Generics
 */
function showData<T>(arg: T): string {
    return `O dado é ${arg}`;
}

console.log(showData(5));
console.log(showData('Olá'));

/**
 * Constraints em generics
 */

function showProductName<T extends { name: string, price: number }>(obj: T): string {
    return `O produto é ${obj.name}`;
}

const myObj = {name: 'Notebook', price: 2500};
const otherProduct = {name: 'Geladeira'};
console.log(showProductName(myObj));
//Não permite
//console.log(showProductName(otherProduct));

/**
 * Generics com interface
 */

interface AbstractObj<T, U, Q> {
    name: string;
    wheels: T;
    engine: U;
    color:Q;
}

type Car = AbstractObj<number, number, boolean>;
type Pen = AbstractObj<boolean, boolean, string>;

const myCar:Car = {name: 'Fusca', wheels: 4, engine: 1.0, color: false};
const myPen:Pen = {name: 'Bic', wheels: false, engine: false, color: 'azul'};

console.log(myCar);
console.log(myPen);

/**
 * Type parameters
 */

function getSomeKey<T, K extends keyof T>(obj: T, key: K): string {
    return `A chave ${String(key)} está presente no objeto e tem o valor ${obj[key]}`;
}

const server = {
    hd: '2TB',
    ram: '32GB',
}

console.log(getSomeKey(server, 'hd'));

//Não permite
//console.log(getSomeKey(server, 'gpu'));