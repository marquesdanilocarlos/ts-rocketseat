//Interface como parâmetro
interface Product {
    name: string;
    price: number;
    isAvailable: boolean;
    discount?: boolean;
}

function showProductDetails({name, price, isAvailable, discount}: Product) {
    console.log(name, price, isAvailable, discount);

    if (discount) {
        console.log('Está em promoção!');
    }
}

const product: Product = {
    name: 'Televisão',
    price: 5999.90,
    isAvailable: true,
}
showProductDetails(product);