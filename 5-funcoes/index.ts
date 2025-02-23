//Void

function withoutReturn() : void {
    console.log('Sem retorno!');

}

withoutReturn();

//Callback como argumento

function greeting(name: string) : string {
    return `Olá ${name}!`;
}

function preGreeting(name: string, fn: (name: string) => string) : void {
    console.log(`Preparando a função`);

    const greeting = fn(name);
    console.log(greeting);
}

preGreeting('Danilo', greeting);