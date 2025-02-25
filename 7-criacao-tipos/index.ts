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

const myObj = { name: 'Notebook', price: 2500 };
const otherProduct = { name: 'Geladeira'};
console.log(showProductName(myObj));
//Não permite
//console.log(showProductName(otherProduct));