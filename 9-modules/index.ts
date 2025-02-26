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