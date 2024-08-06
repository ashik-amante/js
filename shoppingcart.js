
let mobile = [
    {name : 'samsung', price: 10, camera: '12mp', color: 'black', quantty:2},
    {name : 'iphone', price: 20, camera: '12mp', color: 'black', quantty:1},
    {name : 'xiomi', price: 20, camera: '12mp', color: 'black', quantty:1},
    {name : 'oppo', price: 10, camera: '12mp', color: 'black', quantty:1},
]

function cartTotal(products){
    let total = 0;
    for(let product of products){
        total = total + product.price * product.quantty;

    }
    return total
}

console.log(cartTotal(mobile));