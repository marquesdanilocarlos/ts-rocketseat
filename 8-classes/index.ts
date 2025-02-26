class User {
    name: string;
    age: number;
    constructor(name:string, age:number) {
        this.name = name;
        this.age = age;
    }
}

const danilo = new User('Danilo', 33);
//danilo.name = 'Danilo';
//danilo.age = 33;

//Não permite
//danilo.job = 'programmer';

console.log(danilo);

/**
 * Readonly properties
 */

class Car {
    name: string;
    readonly wheels: number = 4;

    constructor(name:string) {
        this.name = name;
    }
}

const myCar = new Car('Fusca');
console.log(myCar);

//Não permite
//myCar.wheels = 5;

/**
 * Herança
 */

class Machine {
    name: string;
    constructor(name:string) {
        this.name = name;
    }
}

const tractor = new Machine('Trator');

class KillerMachine extends Machine {
    guns: number;
    constructor(name:string, guns:number) {
        super(name);
        this.guns = guns;
    }
    kill(): void {
        console.log('Killing...');
    }
}

const destroyer = new KillerMachine('Destroyer', 10);
console.log(tractor);
console.log(destroyer);

destroyer.kill();

/**
 * This
 */

class Truck {
    model: string;
    hp: number;

    constructor(model:string, hp:number) {
        this.model = model;
        this.hp = hp;
    }

    showDetails(): void {
        console.log(`Caminhão do modelo: ${this.model}, que tem ${this.hp} cavalos de potência`);
    }
}

const scania = new Truck('Scania', 500);
const volvo = new Truck('Volvo', 450);
scania.showDetails();
volvo.showDetails();

/**
 * Getters and Setters
 */

class Person {
    name: string;
    surname: string;
    weight!: number;

    constructor(name: string, surname: string) {
        this.name = name;
        this.surname = surname;
    }

    get fullName(): string {
        return `${this.name} ${this.surname}`;
    }

    set setWeight(weight: number){
        this.weight = weight;
    }
}

const daniloPerson = new Person('Danilo', 'Marques');
console.log(daniloPerson.fullName);
daniloPerson.setWeight = 71;
console.log(daniloPerson.weight);

/**
 * Implements
 */

interface showTitle {
    itemTitle(): string;
}

class blogPost implements showTitle {
    title: string;
    constructor(title: string) {
        this.title = title;
    }
    itemTitle(): string {
        return `O título do post é ${this.title}`;
    }
}

const myPost = new blogPost('Novidades do TypeScript 4.4');
console.log(myPost.itemTitle());

/**
 * Overriding
 */

class Base {
    someMethod(): void {
        console.log('Alguma coisa');
    }
}

class New extends Base {
    someMethod(): void {
        console.log('Nova coisa');
    }
}

const base = new Base();
base.someMethod();
const newBase = new New();
newBase.someMethod();

/**
 * Visibility
 */

class C {
    public x:number = 10;
    protected y:number = 20;
    private z:number = 30;

    protected showZ(): void {
        console.log(this.z);
    }
}

class D extends C {
    public showY(): void {
        console.log(this.y);
    }

    public showZ() {
        //Não permite
        //console.log(this.z);
        super.showZ();
    }
}

const cInstance = new C();
console.log(cInstance.x);
//Não permite
//cInstance.showZ();

const dInstance = new D();
dInstance.showY();
dInstance.showZ();