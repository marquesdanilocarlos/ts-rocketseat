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


/**
 * Interfaces
 */

interface Product {
    id :number,
    name: string,
    price: number,
}

function createNewProduct(product: Product): string {
    return `Produto ${product.name} adicionado com sucesso!`;
}

const newProduct = createNewProduct({id: 1, name: 'Produto 1', price: 100});
console.log(newProduct);

/**
 * Estendendo interfaces
 */
interface Person {
    id: number,
    name: string,
}

interface Teacher extends Person {
    subjects: string[]
}

interface Student extends Person{
    age: number
}

let teacher: Teacher = { id: 1, name: 'Danilo', subjects: ['Matemática', 'Português']};
let student: Student = { id: 1, name: 'Juvenal', age: 33};

console.log(teacher);
console.log(student);

/**
 * Types
 */

type Produto = {
    id :number,
    name: string,
    price: number,
}

function addNewProduct (product: Produto): string {
    return `Produto ${product.name} adicionado com sucesso!`;
}

type SelectResponse = Product[] | null;

function selectProducts(): SelectResponse
{
    return null;
}

console.log(selectProducts());

/**
 * Type Intersection
 */

type Pessoa = {
    id: number,
    name: string
};

type Professor = Pessoa & {
    subjects: string[]
};

type Aluno = Pessoa & {
    age: number
};

let professor: Professor = { id: 1, name: 'Danilo', subjects: ['Matemática', 'Português']};
let aluno: Aluno = { id: 1, name: 'Juvenal', age: 33};
console.log(professor);
console.log(aluno);

/**
 * Assertion
 */

type UserResponse = {
    id: number,
    name: string,
    avatar: string
};
let userResponse = {} as UserResponse;
userResponse.id = 1;

console.log(userResponse);

/**
 * Type restrictions
 */

type Size = 'small' | 'medium' | 'large';

let size: Size;

//Não permite
//size = 'extra-large';

size = 'medium';

/**
 * Enums
 */
enum Profile {
    ADMIN = 1,
    USER = 2,
    SELLER = 3
}

let profile: number = Profile.ADMIN;
console.log(profile);


/**
* Generics
 *
 * Convenções:
 * S => state
 * T => Type
 * K => Key
 * V => Value
 * E => Element
 *
 * Generic deixa a tipagem flexível, mas a tipagem que vale é somente aquela que foi definida na chamada da função
 */

function useState<T extends number | string>(){
    let state: T;
    function getState(): T{
        return state;
    }
    function setState(newState: T){
        state = newState;
    }

    return {getState, setState};
}


let newState = useState<string>();
newState.getState();
//newState.setState(10);
newState.setState('Danilo');