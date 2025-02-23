/**
 * Interface como parâmetro
 */
interface Product {
    name: string;
    price: number;
    isAvailable: boolean;
    discount?: boolean;
}

function showProductDetails({name, price, isAvailable, discount}: Product) {
    console.log(name, price, isAvailable, discount);

    if (discount) {
        console.log('Está em promoção!');
    }
}

const product: Product = {
    name: 'Televisão',
    price: 5999.90,
    isAvailable: true,
}
showProductDetails(product);

/**
 * Readonly
 */

interface Car {
    brand: string;
    readonly wheels: number;
}

const fusca: Car = {
    brand: 'Wolkswagen',
    wheels: 4,
}

//Não permite
//fusca.wheels = 3;

console.log(fusca);

/**
 * Index Signature
 */

interface CoordoObject {
    [index: string]: number;
}

let coords: CoordoObject = {
    x: 10
};

coords.y = 12;

//Não permite
//coords.z = 'Danilo';

console.log(coords);

/**
 * Extend types
 */

interface Human {
    name: string;
    age: number;
}

interface SuperHuman extends Human {
    superPowers: string[];
}

const danilo: Human = {
    name: 'Danilo',
    age: 33,
};

const goku: SuperHuman = {
    name: 'Goku',
    age: 50,
    superPowers: ['Kamehameha', 'GenkiDama'],
};

console.log(goku);

/**
 * Intersection types
 */

interface Character {
    name: string;
}

interface Gun {
    type: string;
    caliber: number;
}

type HumanWithGun = Character & Gun;

const arnold: HumanWithGun = {
    name: 'Arnold',
    type: 'Shotgun',
    caliber: 12,
};

console.log(arnold);

/**
 * ReadOnly array
 */

let fruits: ReadonlyArray<string> = ['Maçã', 'Laranja', 'Kiwi'];

//Não permite
//fruits[3] = 'Mamão';

//Pode modificar por método
fruits = fruits.map(fruit => `A fruta é ${fruit}`);

console.log(fruits);

/**
 * Tuplas
 */

type fiveNumbers = [number, number, number, number, number];

//Não permite
//const myNumberArray: fiveNumbers = [12, 'Danilo', 62, 37, 98, 78];

const myNumberArray: fiveNumbers = [12, 42, 62, 37, 98];
console.log(myNumberArray);

type nameAndAge = [string, number];
const anotherUser: nameAndAge = ['Danilo', 33];

//Não permite
//anotherUser[0] = 10;

function showNumbers(numbers: readonly [number, number]): void {
    //Não permite
    //numbers[0] = 'Teste';
    console.log(numbers);
}

showNumbers([2, 8]);