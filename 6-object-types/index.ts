//Interface como parâmetro
interface Product {
    name: string;
    price: number;
    isAvailable: boolean;
}

function showProductDetails({name, price, isAvailable}: Product) {
    console.log(name, price, isAvailable);
}

const product: Product = {
    name: 'Televisão',
    price: 5999.90,
    isAvailable: true,
}
showProductDetails(product);