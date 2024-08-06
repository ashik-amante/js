// 1- 100 >> price 100
// 101- 200 >>first 100  price 100, rest of them 90 taka 
// 201- infinity >> first 100  price 100,up to 200 90taka rest of them 70 taka


function layerdDiscount(quantity){
const first100price = 100;
const second100price = 90;
const above200price = 70;

    if(quantity <=100){
        let total = quantity * first100price
        return total
    }
    else if (quantity <=200){
        let first100 = 100  * first100price;
        let extra = quantity - 100;
        let extratotal =  extra * second100price;
        let total = first100 + extratotal

        return total
    }
    else if( quantity > 200){
        let first100 = 100 * first100price;
        let second100 = 100 *  second100price;
        let extra = quantity - 200;
        let extraprice = extra * above200price;
        let total =  first100 + second100 + extraprice;
        return total
    }
}
console.log(layerdDiscount(10));
console.log(layerdDiscount(200));
console.log(layerdDiscount(300));