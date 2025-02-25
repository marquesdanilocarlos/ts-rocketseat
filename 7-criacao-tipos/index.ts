function showData<T>(arg: T): string {
    return `O dado é ${arg}`;
}

console.log(showData(5));
console.log(showData('Olá'));