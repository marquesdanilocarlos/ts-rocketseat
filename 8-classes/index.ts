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