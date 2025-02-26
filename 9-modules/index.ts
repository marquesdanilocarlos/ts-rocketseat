/**
 * Import default
 */
import importGreet from './greet.js';
importGreet();

/**
 * Importacao de variável
 */
import {x} from './variables.js';
console.log(x);

/**
 * Multiplas importações
 */
import {a, b, myFunction} from "./multiple";
console.log(a);
console.log(b);
myFunction();

/**
 * Alias
 */
import {someName as name} from "./changeName";
console.log(name);

/**
 * Import all
 */

import * as numbers from "./numbers";

console.log(numbers.n1);
console.log(numbers.n2);
console.log(numbers.sumNumbers());

/**
 * Import interface
 */

import {Human} from "./myType";

class User implements Human {
    name: string;
    age: number;
    phone: string;

    constructor(name: string, age: number, phone: string) {
        this.name = name;
        this.age = age;
        this.phone = phone;
    }
}

const danilo = new User('Danilo', 25, '9999-9999');
console.log(danilo);