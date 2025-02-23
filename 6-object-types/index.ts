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
    [index:string]: number;
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
