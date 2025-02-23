//Type-guard
function sum(a: number | string, b: number | string): void {
    if (typeof a == "string" && typeof b == "string") {
        console.log(parseFloat(a) + parseFloat(b));
        return;
    }

    if (typeof a == "number" && typeof b == "number") {
        console.log(a + b);
        return;
    }

    console.log("Impossível realizar a soma");
}

sum(16, 96);
sum("16", "96");

//Check de existência do valor

function operations(arr: number[], operation?: string | undefined): void {
    if (!operation) {
        console.log("Defina a operação");
        return;
    }

    console.log("Vai realizar a operação");
}

operations([6,37,7,5,21], '+');