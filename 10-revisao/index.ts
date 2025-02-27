/**
 * Tipo primitivos
 */

let username: string;

username = 'Danilo';
//Não permite
//username = 10;
console.log(username);

let age: number;
//Não permite
//age = '33';
age = 33;
age = 33.5;
console.log(age);

let isLoading: boolean;
isLoading = true;
console.log(isLoading);


/**
 * Tipo Any
 */
let something: any;
something = 'Danilo';
console.log(something);
something = 10;
console.log(something);

/**
 * Array
 */

let users: string[] = ['Danilo', 'Juvenal', 'Arlindo'];
console.log(users);

let numbers: Array<number> = [1, 2, 3, 4, 5];
console.log(numbers);

/**
 * Tipagem em funções
 */

function sum(a: number, b: number):number {
    return a + b;
}

sum(10, 20);

const showMessage = (): void => {
    console.log('Hello World');
}

showMessage();

/**
 * Tipagem em objetos
 */

let user: {name: string, age: number, phone: string, weight?: number} = {
    name: 'Danilo',
    age: 33,
    phone: '999999999',
};

console.log(user);

function signIn({email, password}: {email: string, password: string}): void {
    console.log(`Bem vindo ${email}, sua senha é ${password}`);
}

signIn({email: 'danilo@dan', password: '123456'});

/**
 * Union types
 */

let response: string | null;

response = 'Teste';
console.log(response);
response = null;
console.log(response);
