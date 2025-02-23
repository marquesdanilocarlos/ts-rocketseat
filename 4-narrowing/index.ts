//Type-guard

function sum(a: number | string, b: number | string): void {
    if (typeof a == "string" && typeof b == "string") {
        console.log(parseFloat(a) + parseFloat(b));
        return;
    }

    if (typeof a == "number" && typeof b == "number") {
        console.log(a+b);
        return;
    }

    console.log("Impossível realizar a soma");
}

sum(16,96);
sum("16","96");