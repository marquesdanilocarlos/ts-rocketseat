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