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